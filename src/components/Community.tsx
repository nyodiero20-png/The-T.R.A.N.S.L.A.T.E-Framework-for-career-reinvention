import { ArrowUpRight, Users } from 'lucide-react'
import { LINKS } from '../config'
import { ButtonLink, YoutubeIcon } from './ui'

export function Community() {
  return (
    <section aria-labelledby="community-title" className="border-t border-line bg-ink">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-20 md:grid-cols-2 md:py-28">
        <h2 id="community-title" className="sr-only">
          Join the community
        </h2>

        <article className="flex flex-col rounded-2xl border border-line bg-panel/50 p-8 md:p-10">
          <Users className="size-8 text-teal" aria-hidden="true" />
          <h3 className="mt-5 font-serif text-3xl font-semibold text-cream">AI Career Opportunity Circle</h3>
          <p className="mt-3 flex-1 leading-relaxed text-mist">
            Join our Skool community to learn alongside other professionals, share wins, and get support as you
            explore AI-powered career opportunities.
          </p>
          <ButtonLink href={LINKS.skool} external className="mt-8 self-start">
            Join on Skool
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        </article>

        <article className="flex flex-col rounded-2xl border border-line bg-panel/50 p-8 md:p-10">
          <YoutubeIcon className="size-8 text-gold" />
          <h3 className="mt-5 font-serif text-3xl font-semibold text-cream">MAV AI on YouTube</h3>
          <p className="mt-3 flex-1 leading-relaxed text-mist">
            Watch practical walkthroughs on AI, career reinvention, and the T.R.A.N.S.L.A.T.E.™ framework,
            released regularly on our channel.
          </p>
          <ButtonLink href={LINKS.youtube} variant="outline" external className="mt-8 self-start">
            Visit the channel
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        </article>
      </div>
    </section>
  )
}
