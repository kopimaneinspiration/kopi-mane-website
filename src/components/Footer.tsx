import type { Page, Lang } from '../types'
import { t, waLink, WHATSAPP_RUTENG, WHATSAPP_LBJ } from '../types'

interface Props {
  navigate: (p: Page) => void
  lang: Lang
}

export default function Footer({ navigate, lang }: Props) {
  const year = new Date().getFullYear()

  const links: { key: Page; en: string; id: string }[] = [
    { key: 'home',         en: 'Home',         id: 'Beranda'     },
    { key: 'about',        en: 'About Us',     id: 'Tentang Kami'},
    { key: 'products',     en: 'Products',     id: 'Produk'      },
    { key: 'shop',         en: 'Shop Online',  id: 'Belanja'     },
    { key: 'achievements', en: 'Awards',       id: 'Penghargaan' },
    { key: 'contact',      en: 'Contact',      id: 'Kontak'      },
  ]

  return (
    <footer style={{ backgroundColor: '#1b1611', color: '#b7ad9c', borderTop: '1px solid rgba(192,138,62,0.2)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>

        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>

          {/* Brand column */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', color: '#f3ecdd', fontSize: '1.5rem', fontWeight: 700, marginBottom: '4px' }}>
              Kopi Mane
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Inspiration
            </div>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: '#8a8072', marginBottom: '1rem', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>
              "From Farmer to Cup · Taste It, Love It &amp; Live It"
            </p>
            <p style={{ fontSize: '0.78rem', lineHeight: 1.7, color: '#8a8072' }}>
              {t(
                'Premium specialty coffee from Colol Highlands, Manggarai, Flores — 1,200 MASL.',
                'Kopi spesialti premium dari Dataran Tinggi Colol, Manggarai, Flores — 1.200 MDPL.',
                lang
              )}
            </p>
            {/* Socials */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '1.25rem' }}>
              {['@kopi.mane.inspiration', '@kopi_mane_inspiration_ruteng'].map(handle => (
                <a
                  key={handle}
                  href={`https://instagram.com/${handle.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.58rem',
                    color: '#8a8072',
                    textDecoration: 'none',
                    border: '1px solid rgba(138,128,114,0.3)',
                    borderRadius: '2px',
                    padding: '3px 7px',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.color = '#c08a3e'; (e.target as HTMLElement).style.borderColor = '#c08a3e' }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.color = '#8a8072'; (e.target as HTMLElement).style.borderColor = 'rgba(138,128,114,0.3)' }}
                >
                  IG {handle}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              {t('Navigation', 'Navigasi', lang)}
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {links.map(l => (
                <li key={l.key}>
                  <button
                    onClick={() => navigate(l.key)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-body)',
                      color: '#8a8072',
                      fontSize: '0.82rem',
                      padding: 0,
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.target as HTMLElement).style.color = '#f3ecdd'}
                    onMouseLeave={e => (e.target as HTMLElement).style.color = '#8a8072'}
                  >
                    {t(l.en, l.id, lang)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              {t('Our Cafés', 'Café Kami', lang)}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', color: '#f3ecdd', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' }}>
                  {t('Ruteng (Roastery)', 'Ruteng (Roasteri)', lang)}
                </div>
                <div style={{ fontSize: '0.75rem', lineHeight: 1.6, color: '#8a8072' }}>
                  Jl. Yos Sudarso No. 12<br />Mbaumuku, Ruteng
                </div>
                <a href={waLink(WHATSAPP_RUTENG, lang)} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-block', marginTop: '4px', fontSize: '0.72rem', color: '#c08a3e', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>
                  +62 821 5754 0804
                </a>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', color: '#f3ecdd', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' }}>
                  Labuan Bajo
                </div>
                <div style={{ fontSize: '0.75rem', lineHeight: 1.6, color: '#8a8072' }}>
                  Gang Tuna, Jl. Soekarno Hatta<br />Labuan Bajo
                </div>
                <a href={waLink(WHATSAPP_LBJ, lang)} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-block', marginTop: '4px', fontSize: '0.72rem', color: '#c08a3e', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>
                  +62 813 1508 0648
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              {t('Order Coffee', 'Pesan Kopi', lang)}
            </div>
            <p style={{ fontSize: '0.78rem', lineHeight: 1.7, color: '#8a8072', marginBottom: '1rem' }}>
              {t(
                'Shop our award-winning Flores coffees on Etsy, Lynk.id, or contact us directly via WhatsApp.',
                'Beli kopi Flores peraih penghargaan kami di Etsy, Lynk.id, atau hubungi kami langsung via WhatsApp.',
                lang
              )}
            </p>
            <button
              onClick={() => navigate('shop')}
              style={{
                background: '#4f2036',
                color: '#f3ecdd',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '10px 22px',
                borderRadius: '3px',
                display: 'block',
                width: '100%',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.target as HTMLElement).style.background = '#7a3a56'}
              onMouseLeave={e => (e.target as HTMLElement).style.background = '#4f2036'}
            >
              {t('Visit Our Shop', 'Kunjungi Toko', lang)}
            </button>
            <a href={waLink(WHATSAPP_LBJ, lang)} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'block',
                marginTop: '10px',
                background: 'rgba(37,211,102,0.1)',
                color: '#25d166',
                border: '1px solid rgba(37,211,102,0.3)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '10px 22px',
                borderRadius: '3px',
                textDecoration: 'none',
                textAlign: 'center',
                transition: 'background 0.2s',
              }}>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(192,138,62,0.15)', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#8a8072', letterSpacing: '0.08em' }}>
            © {year} Kopi Mane Inspiration · NIB + NPWP {t('Registered', 'Terdaftar', lang)} 2014
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#8a8072', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ color: '#c08a3e' }}>✦</span> GI {t('Certified Arabica & Robusta', 'Bersertifikat Arabika & Robusta', lang)}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#8a8072', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ color: '#c08a3e' }}>✦</span> {t('G20 Official Coffee', 'Kopi Resmi G20', lang)} 2022
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
