import { NextResponse } from 'next/server'

export async function GET() {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Léo Maurice — LM Espace Vert',
    'N:Maurice;Léo;;;',
    'ORG:LM Espace Vert',
    'TITLE:Paysagiste créateur',
    'TEL;TYPE=CELL:+33672587353',
    'TEL;TYPE=WORK:+33672587353',
    'EMAIL;TYPE=WORK:contact@lm-espace-vert.fr',
    'URL;TYPE=WORK:https://www.lm-espace-vert.fr',
    "ADR;TYPE=WORK:;;Saint-Didier-au-Mont-d'Or;;69370;;France",
    'NOTE:Paysagiste à Saint-Didier-au-Mont-d\'Or. Création\\, entretien\\, élagage.',
    'END:VCARD',
  ].join('\r\n')

  return new NextResponse(vcard, {
    status: 200,
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': 'attachment; filename="leo-maurice-lm-espace-vert.vcf"',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
