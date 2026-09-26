import { ArrowUpRight } from 'lucide-react'
import { FRAMEWORK_STAGES, FRAMEWORK_VIDEO, LINKS, ROADMAP_QR } from '../config'
import { ButtonLink, SectionHeading } from './ui'

export function Framework() {
  return (
    <section id="framework" aria-labelledby="framework-title" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading
          id="framework-title"
          eyebrow="Career reinvention"
          title={
            <>
              The T.R.A.N.S.L.A.T.E.™ <span className="italic text-gold">Advantage</span> After Layoff
            </>
          }
          intro="A nine-step roadmap for experienced professionals rebuilding after job loss. Your experience is not outdated, it is untranslated. The framework helps you turn what you already know into clear, marketable value, with AI as a thinking partner."
        />

        <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-ink shadow-2xl shadow-black/30">
          <div className="aspect-video">
            <iframe
              className="size-full"
              src={`https://www.youtube-nocookie.com/embed/${FRAMEWORK_VIDEO.id}`}
              title={FRAMEWORK_VIDEO.title}
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
        <p className="mt-3 text-sm text-mist">
          Video not loading?{' '}
          <a
            href={FRAMEWORK_VIDEO.watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-soft underline underline-offset-4 hover:text-gold"
          >
            Watch the introduction on YouTube
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>

        <ol className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FRAMEWORK_STAGES.map((stage, i) => (
            <li key={stage.name} className="flex gap-4 rounded-xl border border-line bg-panel/40 p-5">
              <span
                aria-hidden="true"
                className="flex size-12 shrink-0 items-center justify-center rounded-full border border-gold/50 font-serif text-2xl font-semibold text-gold"
              >
                {stage.letter}
              </span>
              <div>
                <h3 className="font-semibold text-cream">
                  <span className="sr-only">Step {i + 1}: </span>
                  {stage.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-mist">{stage.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid items-center gap-10 rounded-2xl border border-gold/30 bg-[linear-gradient(135deg,rgba(60,198,184,0.12),rgba(226,180,87,0.14))] p-8 md:grid-cols-[1fr_auto] md:p-12">
          <div>
            <h3 className="font-serif text-3xl font-semibold text-balance text-cream md:text-4xl">
              Put the framework to work.
            </h3>
            <p className="mt-3 max-w-xl leading-relaxed text-mist">
              Use the Career Reinvention web app to work through each step with guided AI support, or open the
              roadmap companion to map your next chapter.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={LINKS.webApp} external>
                Try the web app
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href={LINKS.roadmap} variant="outline" external>
                Open the roadmap
              </ButtonLink>
            </div>
          </div>
          <figure className="mx-auto w-40 md:w-44">
            <a href={LINKS.roadmap} target="_blank" rel="noopener noreferrer" className="block rounded-2xl bg-cream p-2">
              <img
                src={ROADMAP_QR}
                alt="QR code linking to the T.R.A.N.S.L.A.T.E. Career Reinvention Roadmap"
                width={920}
                height={920}
                loading="lazy"
                className="w-full rounded-xl"
              />
            </a>
            <figcaption className="mt-2 text-center text-xs text-mist">Scan for the roadmap</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
