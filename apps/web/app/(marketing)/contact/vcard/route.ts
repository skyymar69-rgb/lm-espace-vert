export async function GET() {
  const vcf = [
    'BEGIN:VCARD',
    'VERSION:4.0',
    'FN:LM Espace Vert',
    'N:LM Espace Vert;;;;',
    'ORG:LM Espace Vert',
    'TITLE:Paysagiste créateur',
    'TEL;TYPE=work,voice:+33XXXXXXXXX',
    'EMAIL;TYPE=work:contact@lm-espace-vert.fr',
    'URL:https://www.lm-espace-vert.fr',
    'ADR;TYPE=work:;;[rue];[ville];;[CP];France',
    'GEO:45.748,4.847',
    'NOTE:Création\\, entretien et aménagement de jardins · Lyon & Région',
    'END:VCARD',
  ].join('\r\n')

  return new Response(vcf, {
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': 'attachment; filename="lm-espace-vert.vcf"',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
