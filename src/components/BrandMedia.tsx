import { useState } from 'react'
import { Play } from 'lucide-react'
import { BRAND_MEDIA } from '../config'
import { Eyebrow } from './ui'

export function BrandMedia() {
  const [playing, setPlaying] = useState(false)
  const hasVideo = Boolean(BRAND_MEDIA.videoSrc || BRAND_MEDIA.youtubeId)

  return (
    <section aria-labelledby="brand-title" className="border-t border-line bg-ink">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl border border-gold/30 shadow-2xl shadow-black/40">
          {playing && BRAND_MEDIA.videoSrc ? (
            <video
              src={BRAND_MEDIA.videoSrc}
              poster={BRAND_MEDIA.image}
              controls
              autoPlay
              playsInline
              className="aspect-square w-full bg-black object-cover"
            />
          ) : playing && BRAND_MEDIA.youtubeId ? (
            <iframe
              className="aspect-square w-full"
              src={`https://www.youtube-nocookie.com/embed/${BRAND_MEDIA.youtubeId}?autoplay=1`}
              title={BRAND_MEDIA.videoTitle}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <img
                src={BRAND_MEDIA.image}
                alt={BRAND_MEDIA.imageAlt}
                width={1254}
                height={1254}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              {hasVideo && (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 m-auto flex size-20 items-center justify-center rounded-full bg-gold text-ink shadow-xl transition-transform hover:scale-105"
                >
                  <Play className="ml-1 size-8" aria-hidden="true" />
                  <span className="sr-only">Play {BRAND_MEDIA.videoTitle}</span>
                </button>
              )}
            </>
          )}
        </div>

        <div>
          <Eyebrow>Meet the founder</Eyebrow>
          <h2 id="brand-title" className="mt-4 font-serif text-4xl font-semibold leading-tight text-balance md:text-5xl">
            Rebuild after job loss. <span className="italic text-gold">Confidently</span> create your next chapter.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pretty text-mist">
            Silper Pesa built T.R.A.N.S.L.A.T.E.™ Career Reinvention to help experienced professionals navigate
            change with dignity. The approach blends human coaching wisdom with responsible AI, so your lived
            experience, cultural context, and judgment stay at the center of every decision.
          </p>
          <p className="mt-4 leading-relaxed text-mist">
            Through MAV AI Ventures, that same human-first philosophy extends to the organizations and
            communities adopting AI for the first time.
          </p>
        </div>
      </div>
    </section>
  )
}
