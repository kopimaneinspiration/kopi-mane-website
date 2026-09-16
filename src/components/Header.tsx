import { useState } from 'react'
import type { Page, Lang } from '../types'
import { t } from '../types'

interface Props {
  page: Page
  navigate: (p: Page) => void
  lang: Lang
  setLang: (l: Lang) => void
}

const navLinks: { key: Page; en: string; id: string }[] = [
  { key: 'home',         en: 'Home',         id: 'Beranda'      },
  { key: 'about',        en: 'About',        id: 'Tentang'      },
  { key: 'products',     en: 'Products',     id: 'Produk'       },
  { key: 'shop',         en: 'Shop',         id: 'Toko'         },
  { key: 'achievements', en: 'Awards',       id: 'Penghargaan'  },
  { key: 'contact',      en: 'Contact',      id: 'Kontak'       },
]

export default function Header({ page, navigate, lang, setLang }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <header style={{
      backgroundColor: '#1b1611',
      borderBottom: '1px solid rgba(192,138,62,0.25)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

        {/* Logo */}
        <button onClick={() => navigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
          <div style={{ fontFamily: 'var(--font-display)', color: '#f3ecdd', fontSize: '1.15rem', fontWeight: 700, lineHeight: 1.1 }}>
            Kopi Mane
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.52rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '1px' }}>
            Inspiration
          </div>
        </button>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="hidden md:flex">
          {navLinks.map(link => (
            <button
              key={link.key}
              onClick={() => navigate(link.key)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                color: page === link.key ? '#c08a3e' : '#b7ad9c',
                fontSize: '0.75rem',
                fontWeight: page === link.key ? 600 : 400,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
                padding: '4px 0',
                borderBottom: page === link.key ? '1px solid #c08a3e' : '1px solid transparent',
              }}
              onMouseEnter={e => { if (page !== link.key) (e.target as HTMLElement).style.color = '#f3ecdd' }}
              onMouseLeave={e => { if (page !== link.key) (e.target as HTMLElement).style.color = '#b7ad9c' }}
            >
              {t(link.en, link.id, lang)}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Lang toggle */}
          <div style={{ display: 'flex', border: '1px solid rgba(192,138,62,0.4)', borderRadius: '3px', overflow: 'hidden' }}>
            {(['en', 'id'] as Lang[]).map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  background: lang === l ? '#c08a3e' : 'transparent',
                  color: lang === l ? '#1b1611' : '#8a8072',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  padding: '4px 9px',
                  transition: 'all 0.2s',
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => navigate('shop')}
            className="hidden md:block"
            style={{
              background: '#4f2036',
              color: '#f3ecdd',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              padding: '7px 18px',
              borderRadius: '3px',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.target as HTMLElement).style.background = '#7a3a56'}
            onMouseLeave={e => (e.target as HTMLElement).style.background = '#4f2036'}
          >
            {t('Order Now', 'Pesan Sekarang', lang)}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{ display: 'block', width: '22px', height: '1.5px', backgroundColor: '#f3ecdd' }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <div style={{ backgroundColor: '#241d17', borderTop: '1px solid rgba(192,138,62,0.2)' }}>
          {navLinks.map(link => (
            <button
              key={link.key}
              onClick={() => { navigate(link.key); setOpen(false) }}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                borderBottom: '1px solid rgba(192,138,62,0.12)',
                cursor: 'pointer',
                padding: '14px 24px',
                fontFamily: 'var(--font-body)',
                color: page === link.key ? '#c08a3e' : '#b7ad9c',
                fontSize: '0.82rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              {t(link.en, link.id, lang)}
            </button>
          ))}
          <div style={{ padding: '16px 24px' }}>
            <button
              onClick={() => { navigate('shop'); setOpen(false) }}
              style={{
                background: '#4f2036',
                color: '#f3ecdd',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '10px 24px',
                borderRadius: '3px',
                width: '100%',
              }}
            >
              {t('Order Now', 'Pesan Sekarang', lang)}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
