import type { Page, Lang } from '../types'
import { t, waLink, WHATSAPP_LBJ, WHATSAPP_RUTENG } from '../types'
import OrderForm from '../components/OrderForm'

interface Props {
  navigate: (p: Page) => void
  lang: Lang
}

const channels = [
  {
    name: 'Etsy',
    icon: '🛒',
    marketEn: 'International — Global Shipping',
    marketId: 'Internasional — Pengiriman Global',
    color: '#c9743a',
    statusEn: 'Active',
    statusId: 'Aktif',
    priceNoteEn: 'USD pricing — premium international positioning. Ships via DHL UMKM Export Program. Buyer pays shipping by zone.',
    priceNoteId: 'Harga USD — posisi premium internasional. Kirim via Program Ekspor UMKM DHL. Pembeli membayar pengiriman per zona.',
    url: 'https://www.etsy.com/shop/FloresKomodoStore',
    ctaEn: 'Visit Etsy Store',
    ctaId: 'Kunjungi Toko Etsy',
    products: ['Arabika 100g — $19', 'Robusta 100g — $19', 'Yellow Caturra 100g — $22', 'Juria 100g — $25', 'Flores Exploration Kit 4×50g — $45'],
  },
  {
    name: 'Lynk.id',
    icon: '🇮🇩',
    marketEn: 'Indonesia — Domestic Delivery',
    marketId: 'Indonesia — Pengiriman Domestik',
    color: '#2e6e68',
    statusEn: 'Active',
    statusId: 'Aktif',
    priceNoteEn: 'IDR pricing — domestic accessibility and loyalty pricing. Best for Indonesian buyers.',
    priceNoteId: 'Harga IDR — harga aksesibilitas domestik dan loyalitas. Terbaik untuk pembeli Indonesia.',
    url: '#REPLACE-WITH-LYNKID-URL',
    ctaEn: 'Visit Lynk.id Store',
    ctaId: 'Kunjungi Toko Lynk.id',
    products: ['Arabika 100g — Rp 85.000', 'Robusta 100g — Rp 85.000', 'Yellow Caturra 100g — Rp 105.000', 'Juria 100g — Rp 125.000', 'Flores Exploration Kit 4×50g — Rp 200.000'],
  },
  {
    name: 'Creema',
    icon: '🌏',
    marketEn: 'Japan · Taiwan · Hong Kong',
    marketId: 'Jepang · Taiwan · Hong Kong',
    color: '#c4452e',
    statusEn: 'Opening Soon',
    statusId: 'Segera Dibuka',
    priceNoteEn: 'Launching after 10+ transactions each on Etsy and Lynk.id. Curated for the Asian specialty coffee market.',
    priceNoteId: 'Diluncurkan setelah 10+ transaksi masing-masing di Etsy dan Lynk.id. Dikurasi untuk pasar kopi spesialti Asia.',
    url: '#',
    ctaEn: 'Coming Soon',
    ctaId: 'Segera Hadir',
    products: ['Arabika', 'Robusta', 'Yellow Caturra', 'Juria', 'Exploration Kit'],
  },
  {
    name: 'WhatsApp Direct',
    icon: '💬',
    marketEn: 'Direct — Indonesia & International',
    marketId: 'Langsung — Indonesia & Internasional',
    color: '#25d166',
    statusEn: 'Always Open',
    statusId: 'Selalu Buka',
    priceNoteEn: 'Order directly with us via WhatsApp. Great for bulk orders, group coffee class bookings, and custom requests.',
    priceNoteId: 'Pesan langsung dengan kami via WhatsApp. Ideal untuk pesanan besar, pemesanan kelas kopi kelompok, dan permintaan khusus.',
    url: waLink(WHATSAPP_LBJ, 'en'),
    ctaEn: 'Chat on WhatsApp',
    ctaId: 'Chat di WhatsApp',
    products: [
      'All coffee varietals (IDR / negotiable)',
      'Flores Coffee Exploration Class (group booking)',
      'Custom orders & wholesale enquiries',
    ],
  },
]

export default function Shop({ navigate, lang }: Props) {
  return (
    <div>
      {/* ── PAGE HERO ────────────────────────────────────── */}
      <section style={{ backgroundColor: '#1b1611', padding: '5rem 1.5rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(79,32,54,0.4) 0%, transparent 70%)' }} />
        <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            {t('Shop · Toko', 'Toko · Shop', lang)}
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', color: '#f3ecdd', fontSize: 'clamp(2.2rem, 6vw, 4rem)', fontWeight: 700, lineHeight: 1.1, maxWidth: '700px', marginBottom: '1rem' }}>
            {t('Order Kopi Mane', 'Pesan Kopi Mane', lang)}
          </h1>
          <p style={{ color: '#b7ad9c', fontSize: '0.95rem', maxWidth: '520px', lineHeight: 1.7, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300 }}>
            {t(
              'We sell through multiple channels to serve customers worldwide. Choose the platform that works best for you.',
              'Kami menjual melalui berbagai saluran untuk melayani pelanggan di seluruh dunia. Pilih platform yang paling sesuai untuk Anda.',
              lang
            )}
          </p>
        </div>
      </section>

      {/* ── CHANNEL CARDS ────────────────────────────────── */}
      <section style={{ backgroundColor: '#f3ecdd', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {channels.map(ch => (
              <div key={ch.name} style={{
                backgroundColor: '#fff',
                border: '1px solid rgba(27,22,17,0.07)',
                borderTop: `3px solid ${ch.color}`,
                borderRadius: '4px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
              }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.5rem' }}>{ch.icon}</span>
                    <h3 style={{ fontFamily: 'var(--font-display)', color: '#1b1611', fontSize: '1.25rem', fontWeight: 700 }}>{ch.name}</h3>
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.55rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '3px 8px',
                    borderRadius: '2px',
                    backgroundColor: `${ch.color}18`,
                    color: ch.color,
                    whiteSpace: 'nowrap',
                  }}>
                    {t(ch.statusEn, ch.statusId, lang)}
                  </div>
                </div>

                <div style={{ fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
                  {t(ch.marketEn, ch.marketId, lang)}
                </div>

                <p style={{ color: '#6a5e52', fontSize: '0.82rem', lineHeight: 1.7, marginBottom: '1.25rem', flex: 1 }}>
                  {t(ch.priceNoteEn, ch.priceNoteId, lang)}
                </p>

                {/* Products list */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', color: ch.color, fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                    {t('Available Products', 'Produk Tersedia', lang)}
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {ch.products.map((p, i) => (
                      <li key={i} style={{ display: 'flex', gap: '8px', color: '#8a8072', fontSize: '0.75rem', fontFamily: 'var(--font-body)' }}>
                        <span style={{ color: ch.color, flexShrink: 0, marginTop: '1px' }}>·</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href={ch.url}
                  target={ch.url.startsWith('#') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    background: ch.statusEn === 'Opening Soon' ? 'rgba(27,22,17,0.06)' : ch.color === '#25d166' ? '#25d166' : '#4f2036',
                    color: ch.color === '#25d166' ? '#1b1611' : '#f3ecdd',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    padding: '11px 20px',
                    borderRadius: '3px',
                    textDecoration: 'none',
                    pointerEvents: ch.statusEn === 'Opening Soon' ? 'none' : 'auto',
                    opacity: ch.statusEn === 'Opening Soon' ? 0.5 : 1,
                    transition: 'opacity 0.2s',
                  }}
                >
                  {t(ch.ctaEn, ch.ctaId, lang)}
                </a>
              </div>
            ))}
          </div>

          <OrderForm lang={lang} />

          {/* Compliance note */}
          <div style={{ backgroundColor: '#241d17', borderRadius: '4px', padding: '1.25rem 1.5rem', border: '1px solid rgba(192,138,62,0.15)', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <span style={{ color: '#c08a3e', fontSize: '1rem', flexShrink: 0, marginTop: '1px' }}>ℹ</span>
            <div>
              <div style={{ fontFamily: 'var(--font-body)', color: '#f3ecdd', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' }}>
                {t('Platform Compliance Notice', 'Pemberitahuan Kepatuhan Platform', lang)}
              </div>
              <p style={{ fontFamily: 'var(--font-body)', color: '#8a8072', fontSize: '0.75rem', lineHeight: 1.65 }}>
                {t(
                  'Etsy buyers are never directed off-platform to a cheaper price elsewhere, in compliance with Etsy seller policy. Etsy (international USD) and Lynk.id (domestic IDR) operate separate pricing tracks — this is intentional.',
                  'Pembeli Etsy tidak pernah diarahkan ke luar platform ke harga yang lebih murah di tempat lain, sesuai dengan kebijakan penjual Etsy. Etsy (USD internasional) dan Lynk.id (IDR domestik) beroperasi dengan jalur harga terpisah — ini disengaja.',
                  lang
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHIPPING INFO ────────────────────────────────── */}
      <section style={{ backgroundColor: '#e8e0cd', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2rem' }}>
            {t('Shipping Information', 'Informasi Pengiriman', lang)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: '✈️', titleEn: 'International Shipping', titleId: 'Pengiriman Internasional', descEn: 'DHL via UMKM Export Program. Buyer pays shipping by zone. Rate calculated at checkout on Etsy.', descId: 'DHL via Program Ekspor UMKM. Pembeli membayar pengiriman per zona. Tarif dihitung saat checkout di Etsy.' },
              { icon: '🇮🇩', titleEn: 'Domestic Indonesia', titleId: 'Domestik Indonesia', descEn: 'Standard domestic courier via Lynk.id. Competitive rates within Indonesia.', descId: 'Kurir domestik standar via Lynk.id. Tarif kompetitif di seluruh Indonesia.' },
              { icon: '☕', titleEn: 'Freshness Guarantee', titleId: 'Garansi Kesegaran', descEn: 'All coffee is roasted to order at our Ruteng roastery before shipping. Whole bean or ground to your preference.', descId: 'Semua kopi disangrai sesuai pesanan di roasteri Ruteng kami sebelum dikirim. Biji utuh atau digiling sesuai preferensi Anda.' },
              { icon: '🎁', titleEn: 'Gift-Ready Packaging', titleId: 'Kemasan Siap Hadiah', descEn: 'Our premium Kopi Mane packaging is gift-ready. Custom notes available via WhatsApp request.', descId: 'Kemasan premium Kopi Mane kami siap sebagai hadiah. Catatan kustom tersedia via permintaan WhatsApp.' },
            ].map((info, i) => (
              <div key={i} style={{ backgroundColor: '#f3ecdd', borderRadius: '4px', padding: '1.5rem', border: '1px solid rgba(27,22,17,0.07)' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{info.icon}</div>
                <div style={{ fontFamily: 'var(--font-body)', color: '#1b1611', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
                  {t(info.titleEn, info.titleId, lang)}
                </div>
                <p style={{ color: '#8a8072', fontSize: '0.78rem', lineHeight: 1.65 }}>
                  {t(info.descEn, info.descId, lang)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISIT IN PERSON CTA ──────────────────────────── */}
      <section style={{ backgroundColor: '#4f2036', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', color: '#f3ecdd', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 700, marginBottom: '1rem' }}>
            {t('In Labuan Bajo? Come Visit Us', 'Di Labuan Bajo? Kunjungi Kami', lang)}
          </h2>
          <p style={{ color: 'rgba(243,236,221,0.7)', lineHeight: 1.7, marginBottom: '2rem', fontSize: '0.9rem' }}>
            {t(
              'Our café at Gang Tuna, Jl. Soekarno Hatta is open for coffee, cupping sessions, and the Flores Coffee Exploration Class. Walk-ins welcome.',
              'Kafe kami di Gang Tuna, Jl. Soekarno Hatta buka untuk kopi, sesi cupping, dan Kelas Eksplorasi Kopi Flores. Tamu tanpa reservasi diterima.',
              lang
            )}
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={waLink(WHATSAPP_LBJ, lang)} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#c08a3e',
                color: '#1b1611',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '12px 28px',
                borderRadius: '3px',
                textDecoration: 'none',
              }}>
              {t('WhatsApp Labuan Bajo', 'WhatsApp Labuan Bajo', lang)}
            </a>
            <a href={waLink(WHATSAPP_RUTENG, lang)} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: '#f3ecdd',
                border: '1px solid rgba(243,236,221,0.3)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '12px 28px',
                borderRadius: '3px',
                textDecoration: 'none',
              }}>
              {t('WhatsApp Ruteng', 'WhatsApp Ruteng', lang)}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
