import { readdirSync, mkdirSync, existsSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const sharp = require('D:/1x/lm-espace-vert-master/lm-espace-vert-master/node_modules/.pnpm/sharp@0.34.5/node_modules/sharp')

const SRC = 'C:/Users/Maison/Desktop/Leo/traitees'
const OUT = 'D:/1x/lm-espace-vert-master/lm-espace-vert-master/apps/web/public/images/realisations'
const SHEETS = 'C:/Users/Maison/Desktop/Leo/_sheets'

mkdirSync(OUT, { recursive: true })
mkdirSync(SHEETS, { recursive: true })

const files = readdirSync(SRC).filter((f) => /\.(png|jpe?g|webp)$/i.test(f)).sort()
console.log('Found', files.length, 'images')

const pad = (n) => String(n).padStart(2, '0')
const manifest = []

// 1. Convert each to optimized webp + collect thumb buffer
const CELL_W = 360
const CELL_H = 270
const LABEL_H = 26
const COLS = 6

const thumbs = []
for (let i = 0; i < files.length; i++) {
  const idx = i + 1
  const src = path.join(SRC, files[i])
  const outName = `lm-${pad(idx)}.webp`
  const meta = await sharp(src).metadata()
  // production webp
  await sharp(src)
    .rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(OUT, outName))
  manifest.push({ idx, file: files[i], out: outName, w: meta.width, h: meta.height, orient: meta.width >= meta.height ? 'paysage' : 'portrait' })

  // thumb for contact sheet
  const t = await sharp(src)
    .rotate()
    .resize({ width: CELL_W, height: CELL_H, fit: 'cover' })
    .toBuffer()
  // label svg
  const label = Buffer.from(
    `<svg width="${CELL_W}" height="${LABEL_H}"><rect width="100%" height="100%" fill="#0B3D2C"/><text x="8" y="18" font-family="Arial" font-size="16" fill="#80BC00" font-weight="bold">#${idx}  ${manifest[i].orient}  ${meta.width}x${meta.height}</text></svg>`
  )
  const cell = await sharp({ create: { width: CELL_W, height: CELL_H + LABEL_H, channels: 3, background: '#000' } })
    .composite([{ input: t, top: 0, left: 0 }, { input: label, top: CELL_H, left: 0 }])
    .png()
    .toBuffer()
  thumbs.push(cell)
  console.log('done', outName)
}

// 2. Build contact sheets (12 cells each = 6 cols x 2 rows)
const PER_SHEET = 12
const rowsPerSheet = PER_SHEET / COLS
const sheetW = COLS * CELL_W
const cellFullH = CELL_H + LABEL_H
let sheetNum = 0
for (let start = 0; start < thumbs.length; start += PER_SHEET) {
  sheetNum++
  const batch = thumbs.slice(start, start + PER_SHEET)
  const rows = Math.ceil(batch.length / COLS)
  const sheetH = rows * cellFullH
  const comp = batch.map((buf, j) => {
    const r = Math.floor(j / COLS)
    const c = j % COLS
    return { input: buf, top: r * cellFullH, left: c * CELL_W }
  })
  await sharp({ create: { width: sheetW, height: sheetH, channels: 3, background: '#222' } })
    .composite(comp)
    .jpeg({ quality: 78 })
    .toFile(path.join(SHEETS, `sheet-${sheetNum}.jpg`))
  console.log('sheet', sheetNum)
}

writeFileSync(path.join(SHEETS, 'manifest.json'), JSON.stringify(manifest, null, 2))
console.log('MANIFEST:')
console.log(JSON.stringify(manifest, null, 2))
