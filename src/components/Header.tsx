import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { CONSULTATION_URL, CALENDAR_URL, LOGO, NAV_ITEMS } from '../config'
import { ButtonLink } from './ui'

const sectionIds = NAV_ITEMS.filter((item) => !('external' in item)).map((item) => item.href.slice(1))

function useActiveSection() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return active
}

export function Header() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={LOGO} alt="" width={20} height={36} className="h-9 w-auto" />
          <span className="font-serif text-xl font-semibold tracking-wide text-cream">
            MAV <span className="text-gold">AI</span> Ventures
          </span>
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isExternal = 'external' in item
              const isActive = !isExternal && active === item.href.slice(1)
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'location' : undefined}
                    {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                      isActive ? 'bg-gold/15 text-gold-soft' : 'text-mist hover:text-cream'
                    }`}
                  >
                    {item.label}
                    {isExternal && <span className="sr-only"> (opens in a new tab)</span>}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ButtonLink href={CONSULTATION_URL} external={Boolean(CALENDAR_URL)}>
              Book a consultation
            </ButtonLink>
          </div>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-cream hover:bg-panel lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-ink lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4">
            {NAV_ITEMS.map((item) => {
              const isExternal = 'external' in item
              const isActive = !isExternal && active === item.href.slice(1)
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? 'location' : undefined}
                    {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={`block rounded-lg px-3 py-3 text-base font-medium ${
                      isActive ? 'text-gold-soft' : 'text-cream'
                    }`}
                  >
                    {item.label}
                    {isExternal && <span className="sr-only"> (opens in a new tab)</span>}
                  </a>
                </li>
              )
            })}
            <li className="mt-3">
              <ButtonLink href={CONSULTATION_URL} external={Boolean(CALENDAR_URL)} className="w-full">
                Book an AI consultation
              </ButtonLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
