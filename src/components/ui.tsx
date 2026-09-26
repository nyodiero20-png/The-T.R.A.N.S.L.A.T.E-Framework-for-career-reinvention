import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'gold' | 'outline' | 'ghost'

const variants: Record<Variant, string> = {
  gold: 'bg-gold text-ink hover:bg-gold-soft',
  outline: 'border border-gold/60 text-gold-soft hover:border-gold hover:bg-gold/10',
  ghost: 'text-cream hover:text-gold-soft',
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
  external?: boolean
  children: ReactNode
}

export function ButtonLink({ variant = 'gold', external, className = '', children, ...props }: ButtonLinkProps) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a
      {...externalProps}
      {...props}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors ${variants[variant]} ${className}`}
    >
      {children}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
      <span aria-hidden="true" className="h-px w-8 bg-gold/70" />
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
}: {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  id: string
}) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id} className="mt-4 font-serif text-4xl font-semibold leading-tight text-balance text-cream md:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-pretty text-mist">{intro}</p>}
    </div>
  )
}

export function YoutubeIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    </svg>
  )
}
