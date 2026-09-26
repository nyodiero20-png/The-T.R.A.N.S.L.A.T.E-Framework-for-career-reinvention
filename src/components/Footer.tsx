import { LINKS, LOGO, NAV_ITEMS, SUPPORT_EMAIL } from '../config'

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="" width={18} height={32} loading="lazy" className="h-8 w-auto" />
            <span className="font-serif text-lg font-semibold">
              MAV <span className="text-gold">AI</span> Ventures
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-mist">
            Humanity first. AI lifts. AI consulting, learning, and career reinvention, including the T.R.A.N.S.L.A.T.E.™ Career Reinvention project.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...('external' in item ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="text-mist hover:text-cream"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href={LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-mist hover:text-cream">
                YouTube
              </a>
            </li>
            <li>
              <a href={LINKS.email} className="text-mist hover:text-cream">
                {SUPPORT_EMAIL}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <p className="border-t border-line py-6 text-center text-xs text-mist/70">
        {`© ${new Date().getFullYear()} MAV AI Ventures. T.R.A.N.S.L.A.T.E.™ Career Reinvention is a project of MAV AI Ventures.`}
      </p>
    </footer>
  )
}
