import { ArrowUpRight, Award, Download, Eye } from 'lucide-react'
import { BESTSELLER_ATTESTATION, BOOKS, type Book } from '../config'
import { SectionHeading } from './ui'

const accentStyles: Record<Book['accent'], string> = {
  teal: 'from-[#0f4a4f] to-[#062629] border-teal/40',
  gold: 'from-[#6b4e1c] to-[#2a1f0c] border-gold/50',
  ember: 'from-[#6a2f1c] to-[#2a130b] border-[#d9825b]/40',
}

function BookCover({ book }: { book: Book }) {
  if (book.cover) {
    return (
      <img
        src={book.cover}
        alt={`Cover of ${book.title}`}
        width={600}
        height={900}
        loading="lazy"
        className="aspect-[2/3] w-full rounded-lg object-cover shadow-xl shadow-black/40"
      />
    )
  }
  return (
    <div
      aria-hidden="true"
      className={`flex aspect-[2/3] w-full flex-col justify-between rounded-lg border bg-gradient-to-br p-6 shadow-xl shadow-black/40 ${accentStyles[book.accent]}`}
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-soft/80">MAV AI Ventures</span>
      <div>
        <p className="font-serif text-2xl font-semibold leading-tight text-cream">{book.title}</p>
        {book.subtitle && <p className="mt-2 text-xs leading-snug text-cream/70">{book.subtitle}</p>}
      </div>
      <span className="h-px w-10 bg-gold" />
    </div>
  )
}

export function Books() {
  return (
    <section id="books" aria-labelledby="books-title" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading
          id="books-title"
          eyebrow="Books from MAV AI Ventures"
          title="Stories and roadmaps for every stage of change."
          intro="From career reinvention to inspiring the next generation of young coders."
        />

        <ul className="mt-14 grid gap-10 md:grid-cols-3">
          {BOOKS.map((book) => (
            <li key={book.title} className="flex flex-col">
              <div className="mx-auto w-full max-w-60">
                <BookCover book={book} />
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-teal">{book.audience}</p>
              <h3 className="mt-2 font-serif text-2xl font-semibold leading-snug text-cream">{book.title}</h3>
              {book.subtitle && <p className="mt-1 text-sm text-gold-soft">{book.subtitle}</p>}
              <p className="mt-3 flex-1 leading-relaxed text-mist">{book.description}</p>
              <a
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-11 items-center gap-2 self-start font-semibold text-gold hover:text-gold-soft"
              >
                View on Amazon
                <ArrowUpRight className="size-4" aria-hidden="true" />
                <span className="sr-only">: {book.title} (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col gap-5 rounded-2xl border border-gold/40 bg-gold/10 p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
          <div className="flex items-start gap-4">
            <span
              aria-hidden="true"
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gold text-black"
            >
              <Award className="size-5" />
            </span>
            <div>
              <h3 className="font-serif text-xl font-semibold text-cream">Amazon #1 Bestseller</h3>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-mist">
                <em className="text-gold-soft">The T.R.A.N.S.L.A.T.E.™ Advantage After Layoff</em> reached #1 in two
                paid categories and three Hot New Release categories. Download the verified attestation.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={BESTSELLER_ATTESTATION.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-5 py-2.5 font-semibold text-black transition-colors hover:bg-gold-soft"
            >
              <Eye className="size-4" aria-hidden="true" />
              View attestation
              <span className="sr-only">(PDF, opens in a new tab)</span>
            </a>
            <a
              href={BESTSELLER_ATTESTATION.downloadUrl}
              download={BESTSELLER_ATTESTATION.fileName}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-gold/60 px-5 py-2.5 font-semibold text-gold transition-colors hover:bg-gold/10"
            >
              <Download className="size-4" aria-hidden="true" />
              Download (PowerPoint)
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
