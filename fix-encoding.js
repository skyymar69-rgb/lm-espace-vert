const fs = require('fs');

const files = [
  'apps/web/app/(marketing)/services/creation-jardins/page.tsx',
  'apps/web/app/(marketing)/services/maconnerie-paysagere/page.tsx',
  'apps/web/app/(marketing)/services/arrosage-automatique/page.tsx',
  'apps/web/app/(marketing)/services/engazonnement/page.tsx'
];

// cp1252 mojibake: UTF-8 bytes of a character were decoded as Windows-1252 bytes,
// then those characters were re-encoded as UTF-8.
// We need to identify what chars appear in the file and map them back.
//
// Key mappings (cp1252 byte -> Unicode codepoint):
//   0x80 -> U+20AC (€)
//   0x82 -> U+201A (‚)
//   0x83 -> U+0192 (ƒ)
//   0x84 -> U+201E („)
//   0x85 -> U+2026 (…) [NOT used as mojibake, this IS the ellipsis]
//   0x86 -> U+2020 (†)
//   0x87 -> U+2021 (‡)
//   0x88 -> U+02C6 (ˆ)
//   0x89 -> U+2030 (‰)
//   0x8A -> U+0160 (Š)
//   0x8B -> U+2039 (‹)
//   0x8C -> U+0152 (Œ)
//   0x8E -> U+017D (Ž)
//   0x91 -> U+2018 (')
//   0x92 -> U+2019 (')
//   0x93 -> U+201C (")
//   0x94 -> U+201D (")
//   0x95 -> U+2022 (•)
//   0x96 -> U+2013 (–)
//   0x97 -> U+2014 (—)
//   0x98 -> U+02DC (˜)
//   0x99 -> U+2122 (™)
//   0x9A -> U+0161 (š)
//   0x9B -> U+203A (›)
//   0x9C -> U+0153 (œ)
//   0x9E -> U+017E (ž)
//   0x9F -> U+0178 (Ÿ)
//
// For the em dash (U+2014), UTF-8 = E2 80 94:
//   E2 in Latin-1 = â (U+00E2)
//   80 in cp1252 = € (U+20AC)
//   94 in cp1252 = " (U+201D right double quote)
// So em dash mojibake = â + € + " = "â€”"

function fixMojibake(content) {
  // Build replacement array using Unicode escapes to avoid encoding issues
  const replacements = [
    // em dash —: E2 80 94 -> â + € + ”
    ['â€”', '—'],
    // en dash –: E2 80 93 -> â + € + “
    ['â€“', '–'],
    // right single quote ’: E2 80 99 -> â + € + ™
    ['â€™', '’'],
    // left single quote ‘: E2 80 98 -> â + € + ˜
    ['â€˜', '‘'],
    // right double quote ”: E2 80 9D -> â + € + ? (0x9D not in cp1252 map, U+009D)
    // Actually 0x9D is undefined in cp1252, maps to U+009D control char
    // left double quote “: E2 80 9C -> â + € + œ (0x9C=oe)
    ['â€œ', '“'],
    // ellipsis …: E2 80 A6 -> â + € + ¦
    ['â€¦', '…'],
    // bullet •: E2 80 A2 -> â + € + ¢
    ['â€¢', '•'],
    // trademark ™: E2 84 A2 -> â + „ + ¢
    ['â„¢', '™'],
    // triangle down ▾: E2 96 BE -> â + – + ¾
    ['â–¾', '▾'],
    // Non-breaking space: C2 A0 -> Â +
    ['Â ', ' '],
    // middle dot ·: C2 B7 -> Â + ·
    ['Â·', '·'],
    // degree sign °: C2 B0 -> Â + °
    ['Â°', '°'],
    // euro sign in string (not as mojibake indicator): not needed since € is already used

    // Accented Latin chars: each C3 XX -> Ã + corresponding char
    // Ã = Ã, then the second byte:
    // C3 89 -> Ã + ? No... 0x89 in latin-1 is U+0089 (control)
    // Wait: C3 bytes in UTF-8 encode U+00C0-U+00FF
    // If the file was read as Latin-1: each byte is its Unicode codepoint
    // So C3 A9 (=é in UTF-8) would be read as U+00C3 + U+00A9
    // U+00C3 = Ã, U+00A9 = ©
    // BUT the file was re-encoded as UTF-8, so Ã is stored as C3 83 and © as C2 A9
    // Then when read back as UTF-8, we get the chars Ã and ©
    // Let's verify: é = U+00E9, UTF-8 = C3 A9
    //   read as latin-1: C3 -> U+00C3 (Ã), A9 -> U+00A9 (©)
    //   re-encoded UTF-8: C3 83 C2 A9
    //   read back as UTF-8: Ã + ©
    //   BUT in CP1252 A9 = © (same as Latin-1 for A9)
    // So é mojibake = Ã + © = "Ã©"? Let me check against what we see...
    // The file shows "Ã©" which is Ã (U+00C3) + © (U+00A9)
    // YES! That matches.

    // é U+00E9: C3 A9 -> Ã (U+00C3) + © (U+00A9)
    ['Ã©', 'é'],
    // è U+00E8: C3 A8 -> Ã + ¨ (U+00A8)
    ['Ã¨', 'è'],
    // ê U+00EA: C3 AA -> Ã + ª (U+00AA)
    ['Ãª', 'ê'],
    // ë U+00EB: C3 AB -> Ã + « (U+00AB)
    ['Ã«', 'ë'],
    // É U+00C9: C3 89 -> Ã +  (control)?
    //   Actually in Latin-1, 0x89 = U+0089 (control char)
    //   But when we READ the file, the Ã‰ we SEE is: Ã (U+00C3) + ‰ (U+2030, per mille sign)
    //   Because: 0x89 in CP1252 = U+2030 (per mille sign)!
    //   UTF-8 for U+2030 = E2 80 B0 -> that's 3 bytes, not 1
    //   Hmm, wait... we see "Ã‰" in the original file which is rendered as two chars: Ã and ‰
    //   Our first fix script replaced 'Ã‰' -> 'É' and it worked based on what we see
    //   But the second pass still shows issues...
    //
    //   Actually: the file content after our first fix: É is correct (U+00C9)
    //   The remaining issue is only the em dash on line 16
    //   Let's check: the file now shows "â€"" - what chars are those?
    //   From our earlier analysis: U+00E2, U+20AC, U+201D
    //   So the replacement ['â€”', '—'] should work!

    // à U+00E0: C3 A0 -> Ã +   (nbsp)
    ['Ã ', 'à'],
    // â U+00E2: C3 A2 -> Ã + ¢ (U+00A2)
    ['Ã¢', 'â'],
    // ô U+00F4: C3 B4 -> Ã + ´ (U+00B4)
    ['Ã´', 'ô'],
    // î U+00EE: C3 AE -> Ã + ® (U+00AE)
    ['Ã®', 'î'],
    // û U+00FB: C3 BB -> Ã + » (U+00BB)
    ['Ã»', 'û'],
    // ù U+00F9: C3 B9 -> Ã + ¹ (U+00B9)
    ['Ã¹', 'ù'],
    // ü U+00FC: C3 BC -> Ã + ¼ (U+00BC)
    ['Ã¼', 'ü'],
    // ï U+00EF: C3 AF -> Ã + ¯ (U+00AF)
    ['Ã¯', 'ï'],
    // ç U+00E7: C3 A7 -> Ã + § (U+00A7)
    ['Ã§', 'ç'],
    // À U+00C0: C3 80 -> Ã + € (€) -- wait, 0x80 in CP1252 = U+20AC
    ['Ã€', 'À'],
    // Â U+00C2: C3 82 -> Ã + ‚ (U+201A, 0x82 in CP1252)
    ['Ã‚', 'Â'],
    // É U+00C9: C3 89 -> Ã + ‰ (U+2030, 0x89 in CP1252)
    ['Ã‰', 'É'],
    // Ê U+00CA: C3 8A -> Ã + Š (U+0160, 0x8A in CP1252)
    ['ÃŠ', 'Ê'],
    // Ç U+00C7: C3 87 -> Ã + ‡ (U+2021, 0x87 in CP1252)
    ['Ã‡', 'Ç'],
    // ñ U+00F1: C3 B1 -> Ã + ± (U+00B1)
    ['Ã±', 'ñ'],
    // ö U+00F6: C3 B6 -> Ã + ¶ (U+00B6)
    ['Ã¶', 'ö'],
    // ó U+00F3: C3 B3 -> Ã + ³ (U+00B3)
    ['Ã³', 'ó'],
    // ú U+00FA: C3 BA -> Ã + º (U+00BA)
    ['Ãº', 'ú'],
  ];

  for (const [from, to] of replacements) {
    if (content.includes(from)) {
      content = content.split(from).join(to);
    }
  }
  return content;
}

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');
  const fixed = fixMojibake(content);
  if (fixed !== content) {
    fs.writeFileSync(f, fixed, 'utf8');
    console.log('Fixed:', f);
  } else {
    console.log('No changes needed:', f);
  }
}
console.log('Done.');
