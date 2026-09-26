import { ArrowRight, GitBranch } from 'lucide-react'
import { CALENDAR_URL, CONSULTATION_URL, LINKS, LOGO } from '../config'
import { ButtonLink, Eyebrow, YoutubeIcon } from './ui'

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_10%,rgba(226,180,87,0.22),transparent_55%),radial-gradient(ellipse_at_10%_90%,rgba(60,198,184,0.14),transparent_50%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <p className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-gold/40 bg-gold/10 py-1.5 pl-1.5 pr-4 text-sm text-cream">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-black">
              <GitBranch className="size-3.5" aria-hidden="true" />
              New
            </span>
            <span>
              The MAV AI Ventures website is <strong className="font-semibold text-gold">Now available in GitHub</strong>
            </span>
          </p>
          <Eyebrow>Humanity first. AI lifts.</Eyebrow>
          <h1
            id="hero-title"
            className="mt-6 font-serif text-5xl font-semibold leading-[1.05] text-balance text-cream md:text-7xl"
          >
            Practical AI for people <em className="font-medium text-gold">and</em> the organizations they power.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-mist">
            MAV AI Ventures offers AI consulting, learning, and career reinvention
            support so experienced professionals and mission-driven teams can use AI with clarity, confidence,
            and care.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={CONSULTATION_URL} external={Boolean(CALENDAR_URL)}>
              Book an AI consultation
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#framework" variant="outline">
              Explore the framework
            </ButtonLink>
            <ButtonLink href={LINKS.youtube} variant="ghost" external>
              <YoutubeIcon />
              Watch on YouTube
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div aria-hidden="true" className="absolute -inset-6 rounded-full border border-gold/25" />
          <div aria-hidden="true" className="absolute -inset-12 rounded-full border border-teal/15" />
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-full border border-gold/40 bg-black shadow-2xl shadow-black/40">
            <img
              src={LOGO}
              alt="MAV AI Ventures logo: a gold and turquoise geometric diamond emblem"
              width={104}
              height={188}
              className="h-1/2 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
