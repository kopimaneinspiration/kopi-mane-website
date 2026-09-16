import { useState } from 'react'
import type { Page, Lang } from '../types'
import { t, waLink, WHATSAPP_LBJ, WHATSAPP_RUTENG } from '../types'

interface Props {
  navigate: (p: Page) => void
  lang: Lang
}

export default function Contact({ navigate: _navigate, lang }: Props) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const locations = [
    {
      cityEn: 'Ruteng — Roastery & Café',
      cityId: 'Ruteng — Roasteri & Kafe',
      address: 'Jl. Yos Sudarso No. 12, Mbaumuku, Ruteng',
      province: 'Manggarai, Flores, NTT',
      phone: '+62 821 5754 0804',
      wa: WHATSAPP_RUTENG,
      ig: '@kopi_mane_inspiration_ruteng',
      noteEn: 'Our original roastery. All roasting happens here — NOT in Labuan Bajo.',
      noteId: 'Roasteri asli kami. Semua proses sangrai dilakukan di sini — TIDAK di Labuan Bajo.',
      color: '#c9743a',
      icon: '🏔️',
    },
    {
      cityEn: 'Labuan Bajo — Café',
      cityId: 'Labuan Bajo — Kafe',
      address: 'Gang Tuna, Jl. Soekarno Hatta',
      province: 'Labuan Bajo, West Manggarai, NTT',
      phone: '+62 813 1508 0648',
      wa: WHATSAPP_LBJ,
      ig: '@kopi.mane.inspiration',
      noteEn: 'Gateway to Komodo. Coffee classes, cupping sessions & café. G20 Official Coffee venue.',
      noteId: 'Gerbang ke Komodo. Kelas kopi, sesi cupping & kafe. Venue Kopi Resmi G20.',
      color: '#2e6e68',
      icon: '🌊',
    },
  ]

  return (
    <div>
      {/* ── PAGE HERO ────────────────────────────────────── */}
      <section style={{ backgroundColor: '#1b1611', padding: '5rem 1.5rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1920&h=500&fit=crop&auto=format"
          alt={t('Kopi Mane café', 'Kafe Kopi Mane', lang)}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.12 }}
        />
        <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            {t('Contact · Kontak', 'Kontak · Contact', lang)}
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', color: '#f3ecdd', fontSize: 'clamp(2.2rem, 6vw, 4rem)', fontWeight: 700, lineHeight: 1.1, maxWidth: '700px', marginBottom: '1rem' }}>
            {t('Find Us in Flores', 'Temukan Kami di Flores', lang)}
          </h1>
          <p style={{ color: '#b7ad9c', fontSize: '0.95rem', maxWidth: '520px', lineHeight: 1.7, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300 }}>
            {t(
              'Two cafés. One roastery. Always a warm cup waiting. Reach us via WhatsApp for the fastest response.',
              'Dua kafe. Satu roasteri. Selalu ada secangkir kopi hangat yang menunggu. Hubungi kami via WhatsApp untuk respons tercepat.',
              lang
            )}
          </p>
          {/* Quick WA links */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '2rem', flexWrap: 'wrap' }}>
            {locations.map(loc => (
              <a key={loc.wa} href={waLink(loc.wa, lang)} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(37,209,102,0.12)',
                  color: '#25d166',
                  border: '1px solid rgba(37,209,102,0.25)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '9px 18px',
                  borderRadius: '3px',
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(37,209,102,0.2)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(37,209,102,0.12)'}
              >
                <span>💬</span>
                {t(loc.cityEn.split(' —')[0], loc.cityId.split(' —')[0], lang)}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION CARDS ───────────────────────────────── */}
      <section style={{ backgroundColor: '#f3ecdd', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            {locations.map(loc => (
              <div key={loc.wa} style={{
                backgroundColor: '#fff',
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid rgba(27,22,17,0.07)',
                boxShadow: '0 2px 8px rgba(27,22,17,0.05)',
              }}>
                <div style={{ height: '4px', background: loc.color }} />
                {/* Map placeholder */}
                <div style={{ height: '180px', backgroundColor: '#e8e0cd', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=200&fit=crop&auto=format`}
                    alt={t('Location', 'Lokasi', lang)}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }}
                  />
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ fontSize: '2rem' }}>{loc.icon}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', color: '#1b1611', fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', backgroundColor: 'rgba(243,236,221,0.9)', padding: '3px 10px', borderRadius: '2px' }}>
                      {t('MAP PLACEHOLDER — ADD EMBED URL', 'MAP PLACEHOLDER — TAMBAH URL EMBED', lang)}
                    </div>
                  </div>
                </div>

                <div style={{ padding: '1.75rem' }}>
                  <h2 style={{ fontFamily: 'var(--font-display)', color: '#1b1611', fontSize: '1.15rem', fontWeight: 700, marginBottom: '4px' }}>
                    {t(loc.cityEn, loc.cityId, lang)}
                  </h2>
                  <div style={{ fontFamily: 'var(--font-mono)', color: loc.color, fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    {loc.province}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: loc.color, fontSize: '0.85rem', flexShrink: 0, marginTop: '1px' }}>📍</span>
                      <div style={{ color: '#4a4038', fontSize: '0.82rem', lineHeight: 1.6 }}>{loc.address}</div>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <span style={{ color: loc.color, fontSize: '0.85rem', flexShrink: 0 }}>📞</span>
                      <a href={`tel:${loc.phone.replace(/\s/g, '')}`} style={{ color: '#4a4038', fontSize: '0.82rem', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>
                        {loc.phone}
                      </a>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <span style={{ color: loc.color, fontSize: '0.85rem', flexShrink: 0 }}>📷</span>
                      <a href={`https://instagram.com/${loc.ig.replace('@', '')}`} target="_blank" rel="noopener noreferrer"
                        style={{ color: '#4a4038', fontSize: '0.82rem', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>
                        {loc.ig}
                      </a>
                    </div>
                  </div>

                  {/* Note */}
                  <div style={{ backgroundColor: `${loc.color}12`, borderRadius: '3px', padding: '10px 12px', marginBottom: '1.25rem', borderLeft: `2px solid ${loc.color}` }}>
                    <p style={{ color: '#4a4038', fontSize: '0.75rem', lineHeight: 1.6 }}>
                      {t(loc.noteEn, loc.noteId, lang)}
                    </p>
                  </div>

                  <a href={waLink(loc.wa, lang)} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      background: loc.color,
                      color: '#fff',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      padding: '11px',
                      borderRadius: '3px',
                      textDecoration: 'none',
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.85'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
                  >
                    {t('WhatsApp This Location', 'WhatsApp Lokasi Ini', lang)}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* ── CONTACT FORM ───────────────────────────────── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'flex-start' }}>
            {/* Left: info */}
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                {t('Send a Message', 'Kirim Pesan', lang)}
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', color: '#1b1611', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: '1.25rem' }}>
                {t('We\'d Love to Hear from You', 'Kami Senang Mendengar dari Anda', lang)}
              </h2>
              <p style={{ color: '#6a5e52', fontSize: '0.88rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                {t(
                  'Whether you have questions about our coffee, want to enquire about wholesale, or would like to book a coffee class — we\'re here. For the fastest response, WhatsApp is best.',
                  'Baik Anda memiliki pertanyaan tentang kopi kami, ingin menanyakan tentang grosir, atau ingin memesan kelas kopi — kami siap melayani. Untuk respons tercepat, WhatsApp adalah yang terbaik.',
                  lang
                )}
              </p>

              {/* Contact methods */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: '💬', labelEn: 'WhatsApp (Fastest)', labelId: 'WhatsApp (Tercepat)', detail: '+62 813 1508 0648 (LBJ) · +62 821 5754 0804 (Ruteng)', href: waLink(WHATSAPP_LBJ, lang) },
                  { icon: '📷', labelEn: 'Instagram (Labuan Bajo)', labelId: 'Instagram (Labuan Bajo)', detail: '@kopi.mane.inspiration', href: 'https://instagram.com/kopi.mane.inspiration' },
                  { icon: '📷', labelEn: 'Instagram (Ruteng)', labelId: 'Instagram (Ruteng)', detail: '@kopi_mane_inspiration_ruteng', href: 'https://instagram.com/kopi_mane_inspiration_ruteng' },
                ].map((cm, i) => (
                  <a key={i} href={cm.href} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      padding: '1rem',
                      backgroundColor: '#fff',
                      border: '1px solid rgba(27,22,17,0.07)',
                      borderRadius: '4px',
                      textDecoration: 'none',
                      transition: 'box-shadow 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(27,22,17,0.1)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = 'none'}
                  >
                    <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{cm.icon}</span>
                    <div>
                      <div style={{ fontFamily: 'var(--font-body)', color: '#1b1611', fontSize: '0.82rem', fontWeight: 600, marginBottom: '2px' }}>
                        {t(cm.labelEn, cm.labelId, lang)}
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.65rem' }}>{cm.detail}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div style={{ backgroundColor: '#fff', borderRadius: '4px', padding: '2.5rem', border: '1px solid rgba(27,22,17,0.07)', boxShadow: '0 2px 12px rgba(27,22,17,0.06)' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>☕</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', color: '#1b1611', fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                    {t('Message Sent!', 'Pesan Terkirim!', lang)}
                  </h3>
                  <p style={{ color: '#8a8072', fontSize: '0.85rem', lineHeight: 1.7 }}>
                    {t(
                      'Thank you for reaching out. We\'ll get back to you as soon as possible. For urgent orders, please use WhatsApp.',
                      'Terima kasih telah menghubungi kami. Kami akan membalas Anda sesegera mungkin. Untuk pesanan mendesak, silakan gunakan WhatsApp.',
                      lang
                    )}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                    {t('Contact Form', 'Formulir Kontak', lang)}
                  </div>

                  {[
                    { key: 'name', labelEn: 'Full Name', labelId: 'Nama Lengkap', type: 'text', required: true },
                    { key: 'email', labelEn: 'Email Address', labelId: 'Alamat Email', type: 'email', required: true },
                    { key: 'subject', labelEn: 'Subject', labelId: 'Subjek', type: 'text', required: false },
                  ].map(field => (
                    <div key={field.key} style={{ marginBottom: '1.25rem' }}>
                      <label style={{ display: 'block', fontFamily: 'var(--font-body)', color: '#1b1611', fontSize: '0.78rem', fontWeight: 600, marginBottom: '6px' }}>
                        {t(field.labelEn, field.labelId, lang)} {field.required && <span style={{ color: '#c4452e' }}>*</span>}
                      </label>
                      <input
                        type={field.type}
                        required={field.required}
                        value={form[field.key as keyof typeof form]}
                        onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '3px',
                          border: '1px solid rgba(27,22,17,0.15)',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.85rem',
                          color: '#1b1611',
                          backgroundColor: '#faf7f2',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                        }}
                        onFocus={e => (e.target as HTMLElement).style.borderColor = '#c08a3e'}
                        onBlur={e => (e.target as HTMLElement).style.borderColor = 'rgba(27,22,17,0.15)'}
                      />
                    </div>
                  ))}

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontFamily: 'var(--font-body)', color: '#1b1611', fontSize: '0.78rem', fontWeight: 600, marginBottom: '6px' }}>
                      {t('Message', 'Pesan', lang)} <span style={{ color: '#c4452e' }}>*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder={t(
                        'Tell us about your order, coffee class interest, or anything else...',
                        'Ceritakan tentang pesanan Anda, minat kelas kopi, atau hal lainnya...',
                        lang
                      )}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '3px',
                        border: '1px solid rgba(27,22,17,0.15)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.85rem',
                        color: '#1b1611',
                        backgroundColor: '#faf7f2',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={e => (e.target as HTMLElement).style.borderColor = '#c08a3e'}
                      onBlur={e => (e.target as HTMLElement).style.borderColor = 'rgba(27,22,17,0.15)'}
                    />
                  </div>

                  <button type="submit" style={{
                    width: '100%',
                    background: '#4f2036',
                    color: '#f3ecdd',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '13px',
                    borderRadius: '3px',
                    transition: 'background 0.2s',
                  }}
                    onMouseEnter={e => (e.target as HTMLElement).style.background = '#7a3a56'}
                    onMouseLeave={e => (e.target as HTMLElement).style.background = '#4f2036'}
                  >
                    {t('Send Message', 'Kirim Pesan', lang)}
                  </button>

                  <p style={{ marginTop: '1rem', textAlign: 'center', fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.58rem', letterSpacing: '0.06em' }}>
                    {t('For fastest response, use WhatsApp ↑', 'Untuk respons tercepat, gunakan WhatsApp ↑', lang)}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── BUSINESS INFO ────────────────────────────────── */}
      <section style={{ backgroundColor: '#241d17', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>
              {t('Legal Entity', 'Badan Hukum', lang)}
            </div>
            <div style={{ fontFamily: 'var(--font-body)', color: '#f3ecdd', fontSize: '0.82rem', fontWeight: 600 }}>
              Kopi Mane Inspiration
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.62rem', marginTop: '4px' }}>
              NIB + NPWP {t('Registered since', 'Terdaftar sejak', lang)} 2014 — {t('Good Standing', 'Status Baik', lang)}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>
              {t('Certifications', 'Sertifikasi', lang)}
            </div>
            <div style={{ fontFamily: 'var(--font-body)', color: '#f3ecdd', fontSize: '0.82rem' }}>
              GI Arabika (2018) · GI Robusta (2019)
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.62rem', marginTop: '4px' }}>
              {t('Geographical Indication — Ministry of Law & Human Rights RI', 'Indikasi Geografis — Kemenkumham RI', lang)}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>
              {t('Official Recognition', 'Pengakuan Resmi', lang)}
            </div>
            <div style={{ fontFamily: 'var(--font-body)', color: '#f3ecdd', fontSize: '0.82rem' }}>
              {t('G20 Labuan Bajo Summit 2022', 'KTT G20 Labuan Bajo 2022', lang)}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.62rem', marginTop: '4px' }}>
              {t('Official Coffee — Heads of State', 'Kopi Resmi — Kepala Negara', lang)}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
