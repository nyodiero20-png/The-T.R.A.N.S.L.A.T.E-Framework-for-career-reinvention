import pptxgen from 'pptxgenjs'
import { mkdirSync } from 'node:fs'

const TEAL = '062629'
const TEAL_MID = '0F4A4F'
const GOLD = 'E2B457'
const CREAM = 'F3ECDD'
const MIST = 'C9D6D3'

const pptx = new pptxgen()
pptx.defineLayout({ name: 'W', width: 13.333, height: 7.5 })
pptx.layout = 'W'
pptx.author = 'MAV AI Ventures'
pptx.company = 'MAV AI Ventures'
pptx.title = 'Amazon Bestseller Attestation'

const bg = { color: TEAL }

function heading(slide, text) {
  slide.addText(text, {
    x: 0.7, y: 0.5, w: 12, h: 0.9, fontSize: 26, bold: true,
    color: GOLD, fontFace: 'Georgia',
  })
}

// Slide 1 - Title
let s = pptx.addSlide()
s.background = bg
s.addText('Amazon #1 Bestseller Attestation', {
  x: 0.7, y: 2.2, w: 12, h: 1.2, fontSize: 40, bold: true, color: CREAM, fontFace: 'Georgia',
})
s.addText('The T.R.A.N.S.L.A.T.E.\u2122 Advantage After Layoff', {
  x: 0.7, y: 3.5, w: 12, h: 0.8, fontSize: 24, color: GOLD, fontFace: 'Georgia',
})
s.addText('Verified Amazon ranking evidence captured September 17, 2026', {
  x: 0.7, y: 4.4, w: 12, h: 0.5, fontSize: 15, color: MIST,
})
s.addText('Prepared by Fred Jones Law Firm LLC and Bestseller Overnight\u00AE   \u2022   A MAV AI Ventures project', {
  x: 0.7, y: 6.5, w: 12, h: 0.4, fontSize: 12, color: MIST,
})

// Slide 2 - Achievement summary + table
s = pptx.addSlide()
s.background = bg
heading(s, 'Achievement Summary')
s.addText(
  'Amazon displayed the Kindle edition as a #1 Best Seller in two paid categories, a #1 Hot New Release in three categories, and #6 in Career Guides. The product page also displayed Amazon\u2019s #1 Best Seller badge.',
  { x: 0.7, y: 1.4, w: 12, h: 0.9, fontSize: 15, color: CREAM },
)
const rows = [
  [
    { text: 'Achievement', options: { bold: true, color: TEAL, fill: { color: GOLD } } },
    { text: 'Rank', options: { bold: true, color: TEAL, fill: { color: GOLD } } },
    { text: 'Amazon category', options: { bold: true, color: TEAL, fill: { color: GOLD } } },
  ],
  ['Best Seller', '#1', '15 Minute Business and Money Short Reads'],
  ['Best Seller', '#1', '15 Minute Self Help Short Reads'],
  ['Best Seller', '#6', 'Career Guides'],
  ['Hot New Release', '#1', 'Career Guides'],
  ['Hot New Release', '#1', '15 Minute Self Help Short Reads'],
  ['Hot New Release', '#1', '15 Minute Business and Money Short Reads'],
].map((r) =>
  r.map((c) =>
    typeof c === 'string'
      ? { text: c, options: { color: CREAM, fill: { color: TEAL_MID } } }
      : c,
  ),
)
s.addTable(rows, {
  x: 0.7, y: 2.5, w: 12, colW: [3, 1.5, 7.5], fontSize: 14, border: { pt: 1, color: TEAL },
  rowH: 0.55, valign: 'middle',
})

// Slide 3 - What the evidence establishes
s = pptx.addSlide()
s.background = bg
heading(s, 'What the Evidence Establishes')
s.addText(
  [
    { text: 'Amazon\u2019s category pages displayed the book in the numbered positions shown in this dossier.', options: { bullet: true } },
    { text: 'The product page displayed a #1 Best Seller badge in 15 Minute Business and Money Short Reads.', options: { bullet: true } },
    { text: 'The achievement record reflects the rankings visible at the time of capture. Amazon rankings update frequently and may later change.', options: { bullet: true } },
  ],
  { x: 0.7, y: 1.5, w: 12, h: 3, fontSize: 17, color: CREAM, lineSpacingMultiple: 1.3 },
)

// Slide 4 - Congratulations
s = pptx.addSlide()
s.background = bg
heading(s, 'Congratulations')
s.addText(
  'Congratulations on becoming an Amazon #1 bestselling author with The T.R.A.N.S.L.A.T.E.\u2122 Advantage After Layoff. The book reached #1 in two paid bestseller categories and #1 in three Hot New Release categories, and rose to #6 in Career Guides. These results show that the message connected with readers who need a practical path forward after career disruption.\n\nThis achievement gives documented proof that these ideas can compete, connect, and establish authority in the marketplace.',
  { x: 0.7, y: 1.5, w: 12, h: 4, fontSize: 16, color: CREAM, lineSpacingMultiple: 1.3, valign: 'top' },
)
s.addText('Dr. Frederick D. Jones Esq.  \u2022  Fred Jones Law Firm LLC  \u2022  Bestseller Overnight\u00AE', {
  x: 0.7, y: 6.4, w: 12, h: 0.4, fontSize: 12, color: GOLD,
})

// Slide 5 - Recommended authority assets
s = pptx.addSlide()
s.background = bg
heading(s, 'Recommended Authority Assets')
s.addText(
  [
    { text: 'Use the #1 Amazon Bestseller designation with the date and category context when precision matters.', options: { bullet: true } },
    { text: 'Save the original screenshots and this dossier as the evidence record for media, speaking, and partnership opportunities.', options: { bullet: true } },
    { text: 'Carry the achievement into the author bio, speaker introduction, press materials, and business development conversations.', options: { bullet: true } },
    { text: 'Continue the ownership review for the title, framework name, course content, and licensing opportunities.', options: { bullet: true } },
  ],
  { x: 0.7, y: 1.5, w: 12, h: 4, fontSize: 16, color: CREAM, lineSpacingMultiple: 1.3 },
)

mkdirSync('public/downloads', { recursive: true })
await pptx.writeFile({ fileName: 'public/downloads/amazon-bestseller-attestation.pptx' })
console.log('wrote public/downloads/amazon-bestseller-attestation.pptx')
