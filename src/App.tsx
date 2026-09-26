import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Framework } from './components/Framework'
import { BrandMedia } from './components/BrandMedia'
import { Books } from './components/Books'
import { Community } from './components/Community'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Framework />
        <BrandMedia />
        <Books />
        <Community />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
