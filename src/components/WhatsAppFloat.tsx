import { useState } from 'react'
import type { Lang } from '../types'
import { t, waLink, WHATSAPP_LBJ, WHATSAPP_RUTENG } from '../types'

interface Props { lang: Lang }

export default function WhatsAppFloat({ lang }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
      {/* Popover */}
      {open && (
        <div style={{
          backgroundColor: '#1b1611',
          border: '1px solid rgba(192,138,62,0.3)',
          borderRadius: '8px',
          padding: '1rem',
          minWidth: '220px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#c08a3e', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
            {t('Chat with us', 'Chat dengan kami', lang)}
          </div>
          <a href={waLink(WHATSAPP_LBJ, lang)} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 10px',
              borderRadius: '5px',
              textDecoration: 'none',
              color: '#f3ecdd',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-body)',
              marginBottom: '6px',
              backgroundColor: 'rgba(255,255,255,0.05)',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'}
          >
            <span style={{ fontSize: '1rem' }}>📍</span>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.75rem' }}>Labuan Bajo</div>
              <div style={{ color: '#8a8072', fontSize: '0.68rem' }}>+62 813 1508 0648</div>
            </div>
          </a>
          <a href={waLink(WHATSAPP_RUTENG, lang)} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 10px',
              borderRadius: '5px',
              textDecoration: 'none',
              color: '#f3ecdd',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-body)',
              backgroundColor: 'rgba(255,255,255,0.05)',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'}
          >
            <span style={{ fontSize: '1rem' }}>📍</span>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.75rem' }}>Ruteng</div>
              <div style={{ color: '#8a8072', fontSize: '0.68rem' }}>+62 821 5754 0804</div>
            </div>
          </a>
        </div>
      )}

      {/* Float button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="WhatsApp"
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25d166, #128c4a)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,209,102,0.4)',
          fontSize: '1.4rem',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(37,209,102,0.55)' }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(37,209,102,0.4)' }}
      >
        💬
      </button>
    </div>
  )
}
