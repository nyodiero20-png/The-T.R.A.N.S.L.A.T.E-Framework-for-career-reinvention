import { Calendar, Mail } from 'lucide-react'
import { CALENDAR_URL, CONSULTATION_URL, LINKS, SUPPORT_EMAIL } from '../config'
import { ButtonLink, Eyebrow } from './ui'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden border-t border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(226,180,87,0.2),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
        <div className="flex justify-center">
          <Eyebrow>Contact</Eyebrow>
        </div>
        <h2 id="contact-title" className="mt-5 font-serif text-4xl font-semibold leading-tight text-balance md:text-6xl">
          {"Let's talk about what AI can do for you."}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-pretty text-mist">
          Whether you are navigating a career transition or leading a team into AI adoption, reach out and we
          will find the right next step together.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={CONSULTATION_URL} external={Boolean(CALENDAR_URL)}>
            <Calendar className="size-4" aria-hidden="true" />
            Book an AI consultation
          </ButtonLink>
          <ButtonLink href={LINKS.email} variant="outline">
            <Mail className="size-4" aria-hidden="true" />
            {SUPPORT_EMAIL}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
