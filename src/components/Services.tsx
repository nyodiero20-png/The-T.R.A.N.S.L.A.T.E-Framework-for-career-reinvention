import { ArrowRight } from 'lucide-react'
import { CALENDAR_URL, CONSULTATION_URL, SERVICES } from '../config'
import { ButtonLink, SectionHeading } from './ui'

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            id="services-title"
            eyebrow="AI consulting"
            title="Consulting that meets you where you are."
            intro="For leaders, small businesses, nonprofits, and teams who want AI to serve their people and their mission, not replace them."
          />
          <ButtonLink href={CONSULTATION_URL} external={Boolean(CALENDAR_URL)} className="shrink-0">
            Book an AI consultation
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <li key={service.title} className="flex flex-col bg-ink p-8">
              <span className="font-serif text-3xl font-semibold text-gold">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-lg font-semibold text-cream">{service.title}</h3>
              <p className="mt-2 leading-relaxed text-mist">{service.text}</p>
            </li>
          ))}
          <li className="flex flex-col justify-center bg-panel p-8">
            <p className="font-serif text-2xl leading-snug text-gold-soft">
              Humanity first. AI lifts.
            </p>
            <p className="mt-3 text-sm text-mist">The principle behind every MAV AI Ventures engagement.</p>
          </li>
        </ol>
      </div>
    </section>
  )
}
