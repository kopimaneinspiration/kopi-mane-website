import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Shop from './pages/Shop'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'
import type { Page, Lang } from './types'

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [lang, setLang] = useState<Lang>('en')

  const navigate = (p: Page) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const pages: Record<Page, React.ComponentType<{ navigate: (p: Page) => void; lang: Lang }>> = {
    home: Home,
    about: About,
    products: Products,
    shop: Shop,
    achievements: Achievements,
    contact: Contact,
  }
  const PageComponent = pages[page]

  return (
    <div style={{ fontFamily: "var(--font-body)", minHeight: '100vh', backgroundColor: '#f3ecdd' }}>
      <Header page={page} navigate={navigate} lang={lang} setLang={setLang} />
      <main>
        <PageComponent navigate={navigate} lang={lang} />
      </main>
      <Footer navigate={navigate} lang={lang} />
      <WhatsAppFloat lang={lang} />
    </div>
  )
}
