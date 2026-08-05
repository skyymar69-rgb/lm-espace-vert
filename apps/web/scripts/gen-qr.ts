import QRCode from 'qrcode'
import fs from 'node:fs'
import path from 'node:path'

const targets = [
  { name: 'site', url: 'https://www.lm-espace-vert.fr/', label: 'Site web' },
  { name: 'maps', url: 'https://maps.app.goo.gl/KkB9EVAchidTC4G59', label: 'Google Maps' },
  { name: 'avis', url: 'https://maps.app.goo.gl/KkB9EVAchidTC4G59', label: 'Laisser un avis' },
]

const outputDir = path.join(process.cwd(), 'public', 'qr')
fs.mkdirSync(outputDir, { recursive: true })

for (const t of targets) {
  const svg = await QRCode.toString(t.url, {
    type: 'svg',
    errorCorrectionLevel: 'H',
    margin: 2,
    color: {
      dark: '#243238',
      light: '#FEFBF6',
    },
  })
  const filePath = path.join(outputDir, `${t.name}.svg`)
  fs.writeFileSync(filePath, svg, 'utf-8')
  console.log(`✓ QR code "${t.label}" → ${filePath}`)
}

console.log('\n✅ QR codes générés dans public/qr/')
