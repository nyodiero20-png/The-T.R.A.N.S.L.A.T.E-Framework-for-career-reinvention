// Central place for every link and piece of editable content on the site.

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const SUPPORT_EMAIL = 'support@mav-ai-ventures.com'

// Booking calendar (GrowthHub) for "Book an AI consultation".
export const CALENDAR_URL = 'https://api.growthhub365.com/widget/booking/MErwtkiRNTxdLS1kVolg'

export const CONSULTATION_MAILTO = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
  'AI consultation request',
)}&body=${encodeURIComponent(
  'Hello MAV AI Ventures team,\n\nI would like to request an AI consultation with MAV AI Ventures.\n\nName:\nOrganization (if any):\nWhat I would like support with:\n\nThank you!',
)}`

export const CONSULTATION_URL = CALENDAR_URL || CONSULTATION_MAILTO

export const LINKS = {
  youtube: 'https://www.youtube.com/@MAVAI-LLC',
  webApp: 'https://preview--reinvention-ai-suite.lovable.app/',
  roadmap: 'https://career-reinvention-roadmap.mavaiventures.org/',
  skool: 'https://www.skool.com/ai-career-opportunity-circle-8512',
  email: `mailto:${SUPPORT_EMAIL}`,
} as const

export const FRAMEWORK_VIDEO = {
  id: 'n6b_TRkrUfQ',
  title: 'Introduction to The T.R.A.N.S.L.A.T.E.™ Advantage After Layoff framework, a MAV AI Ventures project',
  watchUrl: 'https://www.youtube.com/watch?v=n6b_TRkrUfQ',
}

// Brand media feature. To add a future AI video, set `videoSrc` to an .mp4 file in
// /public/videos (e.g. asset('videos/brand-intro.mp4')) OR set `youtubeId`.
// A play control only appears once one of these is set.
export const BRAND_MEDIA = {
  image: asset('images/career-reinvention-brand.jpg'),
  imageAlt:
    'The T.R.A.N.S.L.A.T.E.™ Career Reinvention brand image, a MAV AI Ventures project: a smiling woman wearing a colorful beaded necklace, against a turquoise and gold background.',
  videoSrc: '',
  youtubeId: '',
  videoTitle: 'MAV AI Ventures brand video',
}

export const LOGO = asset('images/mav-logo.png')
export const ROADMAP_QR = asset('images/roadmap-qr.jpg')

// Amazon #1 Bestseller attestation for The T.R.A.N.S.L.A.T.E.™ Advantage After Layoff.
export const BESTSELLER_ATTESTATION = {
  url: asset('downloads/amazon-bestseller-attestation.pptx'),
  fileName: 'amazon-bestseller-attestation.pptx',
}

export type Book = {
  title: string
  subtitle?: string
  audience: string
  description: string
  url: string
  // Optional: add a cover image to /public/images/books/ and set e.g. asset('images/books/translate.jpg')
  cover?: string
  accent: 'teal' | 'gold' | 'ember'
}

export const BOOKS: Book[] = [
  {
    title: 'The T.R.A.N.S.L.A.T.E.™ Advantage After Layoff',
    subtitle: 'A Nine Step Career Reinvention Roadmap for Experienced Professionals',
    audience: 'For experienced professionals in transition',
    description:
      'Your experience is not outdated, it is untranslated. A dignity-first guide to identifying transferable strengths, shaping your value, and using AI responsibly as a thinking partner.',
    url: 'https://www.amazon.com/dp/B0HK5768XL',
    cover: asset('images/books/B0HK5768XL.jpg'),
    accent: 'teal',
  },
  {
    title: "Naserian's Story",
    subtitle: 'Coding Against The Current',
    audience: 'For young readers, ages 8–14',
    description:
      'Based on a true story, a young girl in a Kenyan village discovers coding and uses technology to preserve her community’s stories and spark change.',
    url: 'https://www.amazon.com/dp/B0FVTFFM3S',
    cover: asset('images/books/B0FVTFFM3S.jpg'),
    accent: 'ember',
  },
  {
    title: 'Career Reset',
    subtitle: 'Reinvent Yourself with AI',
    audience: 'For mid-career professionals',
    description:
      'An inspiring guide to reframing setbacks as springboards, pivoting into tech-driven paths with AI, and building resilience and future-ready skills.',
    url: 'https://www.amazon.com/dp/B0FRWSFF2T',
    cover: asset('images/books/B0FRWSFF2T.jpg'),
    accent: 'gold',
  },
]

// Verified from the T.R.A.N.S.L.A.T.E.™ Career Reinvention Roadmap site.
export const FRAMEWORK_STAGES = [
  { letter: 'T', name: 'Translate Your Assets', text: 'Audit your roles, results, skills, sectors, relationships, values and lessons.' },
  { letter: 'R', name: 'Reframe Your Story', text: 'Express your past in the present- and future-facing value language used today.' },
  { letter: 'A', name: 'Anchor Your Direction', text: 'Choose one career direction or audience with a real, paying need.' },
  { letter: 'N', name: 'Name Your Method', text: 'Turn your repeated problem-solving into a memorable, named process.' },
  { letter: 'S', name: 'Shape Your Offer', text: 'Define what you deliver, for whom, how, and with what outcome.' },
  { letter: 'L', name: 'Lead With Problems', text: 'Map the pain, risk, cost or aspiration to lead with, before any credential.' },
  { letter: 'A', name: 'Activate Your Presence', text: 'Pick the channel and cadence where the right people will find you.' },
  { letter: 'T', name: 'Test and Refine', text: 'Run small experiments, capture feedback and refine your positioning.' },
  { letter: 'E', name: 'Earn, Expand, and Evolve', text: 'Build income, credibility, referrals and continuous learning over time.' },
]

export const SERVICES = [
  {
    title: 'AI readiness',
    text: 'Understand where your team or organization stands today: skills, workflows, data, and appetite for change.',
  },
  {
    title: 'Practical AI strategy',
    text: 'Identify the use cases that actually matter for your mission, and focus effort where AI adds real value.',
  },
  {
    title: 'Adoption planning',
    text: 'Map the steps, people, and pacing needed to bring AI tools into everyday work without overwhelm.',
  },
  {
    title: 'Training & capacity building',
    text: 'Hands-on learning that helps leaders and teams use AI with confidence as a thinking partner.',
  },
  {
    title: 'Responsible implementation',
    text: 'Keep ethics, privacy, cultural context, and human judgment at the center of every AI decision.',
  },
]

export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Framework', href: '#framework' },
  { label: 'Books', href: '#books' },
  { label: 'Skool', href: LINKS.skool, external: true },
  { label: 'Contact', href: '#contact' },
] as const
