import { useState } from 'react'
import type { Page, Lang } from '../types'
import { t, waLink, WHATSAPP_LBJ } from '../types'

interface Props {
  navigate: (p: Page) => void
  lang: Lang
}

type Tab = 'physical' | 'digital' | 'courses'

const varietals = [
  {
    key: 'arabika',
    color: '#c9743a',
    nameEn: 'Arabika',
    nameId: 'Arabika',
    originEn: 'Colol Highlands, Manggarai — Full Washed',
    originId: 'Dataran Tinggi Colol, Manggarai — Full Washed',
    notesEn: 'Fruity · Caramel',
    notesId: 'Buah-buahan · Karamel',
    descEn: 'Bright and balanced. A classic Manggarai Arabica with clean fruit-forward character and sweet caramel finish. Sourced from ASNIKOM smallholder farmers at 1,200 MASL.',
    descId: 'Cerah dan seimbang. Arabika Manggarai klasik dengan karakter buah yang bersih dan akhir karamel manis. Bersumber dari petani kecil ASNIKOM di ketinggian 1.200 MDPL.',
    etsy: [{ sz: '100g', usd: '$19' }],
    idr: 'Rp 85.000 / 100g',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=450&fit=crop&auto=format',
  },
  {
    key: 'robusta',
    color: '#2e6e68',
    nameEn: 'Robusta',
    nameId: 'Robusta',
    originEn: 'Colol Highlands, Manggarai — Natural Process',
    originId: 'Dataran Tinggi Colol, Manggarai — Natural Process',
    notesEn: 'Dark Chocolate · Mint',
    notesId: 'Coklat Gelap · Mint',
    descEn: 'Bold and complex. An award-winning Robusta (Best 1st Robusta, Indonesia Specialty Coffee Contest 2015) with notes of dark chocolate and a surprising cool mint finish.',
    descId: 'Berani dan kompleks. Robusta peraih penghargaan (Robusta Terbaik ke-1, Kontes Kopi Spesialti Indonesia 2015) dengan nuansa coklat gelap dan akhir mint yang menyegarkan.',
    etsy: [{ sz: '100g', usd: '$19' }],
    idr: 'Rp 85.000 / 100g',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=450&fit=crop&auto=format',
  },
  {
    key: 'caturra',
    color: '#c4452e',
    nameEn: 'Yellow Caturra',
    nameId: 'Yellow Caturra',
    originEn: 'Colol Highlands, Manggarai — Full Washed',
    originId: 'Dataran Tinggi Colol, Manggarai — Full Washed',
    notesEn: 'Chocolate · Milky · Almond',
    notesId: 'Coklat · Susu · Almond',
    descEn: 'Smooth and comforting. Descended from Bourbon (not Bourbon itself), this rare Yellow Caturra offers chocolatey, milky sweetness with almond depth. "Caturra" — double R.',
    descId: 'Lembut dan nyaman. Keturunan Bourbon (bukan Bourbon itu sendiri), Yellow Caturra langka ini menawarkan kemanisan coklat susu dengan kedalaman almond. "Caturra" — dua huruf R.',
    etsy: [{ sz: '100g', usd: '$22' }],
    idr: 'Rp 105.000 / 100g',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=450&fit=crop&auto=format',
  },
  {
    key: 'juria',
    color: '#3a5a3e',
    nameEn: 'Juria',
    nameId: 'Juria',
    originEn: 'Colol Highlands, Manggarai — Full Washed · Biennial Harvest',
    originId: 'Dataran Tinggi Colol, Manggarai — Full Washed · Panen Dua Tahunan',
    notesEn: 'Floral · Chocolate · Tobacco · Spicy',
    notesId: 'Bunga · Coklat · Tembakau · Pedas',
    descEn: 'Ancient Typica Arabica grown from heritage seeds first introduced in 1937. Biennial harvest makes this the rarest cup in our collection. Extraordinarily complex — for the curious, the collector, the connoisseur.',
    descId: 'Typica Arabika kuno yang tumbuh dari benih warisan yang pertama kali diperkenalkan pada 1937. Panen dua tahunan menjadikan ini sajian paling langka dalam koleksi kami. Sangat kompleks — untuk yang penasaran, kolektor, dan penikmat sejati.',
    etsy: [{ sz: '100g', usd: '$25' }],
    idr: 'Rp 125.000 / 100g',
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?w=600&h=450&fit=crop&auto=format',
  },
]

const digitalProducts = [
  { titleEn: 'The Manggarai Cup', titleId: 'Cangkir Manggarai', price: t('FREE', 'GRATIS', 'en'), typeEn: 'Origin Story Ebook', typeId: 'Ebook Kisah Asal', statusEn: 'Lead Magnet — Available', statusId: 'Lead Magnet — Tersedia', color: '#c08a3e' },
  { titleEn: 'Brew Like Manggarai', titleId: 'Seduh Seperti Manggarai', price: '$6–9', typeEn: 'Brewing Guide', typeId: 'Panduan Penyeduhan', statusEn: 'Coming Soon', statusId: 'Segera Hadir', color: '#c9743a' },
  { titleEn: 'Tasting Notes Companion', titleId: 'Pendamping Catatan Rasa', price: '$4–5', typeEn: 'Cupping Cards', typeId: 'Kartu Cupping', statusEn: 'Coming Soon', statusId: 'Segera Hadir', color: '#2e6e68' },
  { titleEn: 'Grind-to-Style Video Series', titleId: 'Seri Video Gilingan-ke-Gaya', price: '$3–5', typeEn: 'Video Course', typeId: 'Kursus Video', statusEn: 'Coming Soon', statusId: 'Segera Hadir', color: '#c4452e' },
  { titleEn: 'Kopi & Bony: The Story of Kopi Mane', titleId: 'Kopi & Bony: Kisah Kopi Mane', price: '$3–5', typeEn: 'Founder Legacy Ebook', typeId: 'Ebook Warisan Pendiri', statusEn: 'Coming Soon', statusId: 'Segera Hadir', color: '#4f2036' },
  { titleEn: 'Mompreneurship: Wenti and The World of Coffee', titleId: 'Mompreneurship: Wenti dan Dunia Kopi', price: '$3–5', typeEn: 'Owner Legacy Ebook', typeId: 'Ebook Warisan Pemilik', statusEn: 'Coming Soon', statusId: 'Segera Hadir', color: '#3a5a3e' },
]

const courseTopics = [
  { en: 'Best Brewing Methods', id: 'Metode Penyeduhan Terbaik' },
  { en: 'Grind-to-Style Matching', id: 'Pencocokan Gilingan-ke-Gaya' },
  { en: 'Reading Flavor Notes', id: 'Membaca Catatan Rasa' },
  { en: 'Cupping Fundamentals (SCA Protocol)', id: 'Dasar-Dasar Cupping (Protokol SCA)' },
]

const classSchedule = [
  { part: '1', durEn: '10–15 min', topicEn: 'Welcome & Brand Story — G20, Davos, AVPA, GI certifications', topicId: 'Sambutan & Kisah Brand — G20, Davos, AVPA, Sertifikasi GI' },
  { part: '2', durEn: '30 min', topicEn: 'SCA Cupping — 4 varietals, 8.25g/150ml, 93°C, guided tasting', topicId: 'Cupping SCA — 4 varietas, 8,25g/150ml, 93°C, panduan mencicipi' },
  { part: '3', durEn: '30–35 min', topicEn: 'Hands-On Brewing (V60) + Snack Pairing with your favourite varietal', topicId: 'Penyeduhan Langsung (V60) + Pairing Camilan dengan varietas favorit Anda' },
  { part: '4', durEn: '10 min', topicEn: 'Closing — Discount offer on chosen varietal to take home', topicId: 'Penutup — Penawaran diskon untuk varietas pilihan yang dibawa pulang' },
]

export default function Products({ navigate, lang }: Props) {
  const [tab, setTab] = useState<Tab>('physical')

  const tabs: { key: Tab; en: string; id: string }[] = [
    { key: 'physical', en: 'Physical Coffee', id: 'Kopi Fisik' },
    { key: 'digital',  en: 'Digital Products', id: 'Produk Digital' },
    { key: 'courses',  en: 'Courses & Classes', id: 'Kursus & Kelas' },
  ]

  return (
    <div>
      {/* ── PAGE HERO ────────────────────────────────────── */}
      <section style={{ backgroundColor: '#1b1611', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            {t('Products · Produk', 'Produk · Products', lang)}
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', color: '#f3ecdd', fontSize: 'clamp(2.2rem, 6vw, 4rem)', fontWeight: 700, lineHeight: 1.1, maxWidth: '700px' }}>
            {t('Everything We Make', 'Semua yang Kami Buat', lang)}
          </h1>
          <p style={{ color: '#b7ad9c', marginTop: '1rem', fontSize: '0.95rem', maxWidth: '500px', lineHeight: 1.7, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300 }}>
            {t('Roasted coffee, brewing guides, and coffee education — all from one highland family in Flores.', 'Kopi sangrai, panduan penyeduhan, dan edukasi kopi — semuanya dari satu keluarga pegunungan di Flores.', lang)}
          </p>
        </div>
      </section>

      {/* ── TABS ─────────────────────────────────────────── */}
      <div style={{ backgroundColor: '#241d17', borderBottom: '1px solid rgba(192,138,62,0.2)', position: 'sticky', top: '64px', zIndex: 40 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', gap: 0, overflowX: 'auto' }}>
          {tabs.map(tb => (
            <button
              key={tb.key}
              onClick={() => setTab(tb.key)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: tab === tb.key ? '2px solid #c08a3e' : '2px solid transparent',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                color: tab === tb.key ? '#c08a3e' : '#8a8072',
                fontSize: '0.75rem',
                fontWeight: tab === tb.key ? 600 : 400,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '1rem 1.5rem',
                whiteSpace: 'nowrap',
                transition: 'color 0.2s',
              }}
            >
              {t(tb.en, tb.id, lang)}
            </button>
          ))}
        </div>
      </div>

      {/* ── PHYSICAL ─────────────────────────────────────── */}
      {tab === 'physical' && (
        <section style={{ backgroundColor: '#f3ecdd', padding: '5rem 1.5rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            {/* Pricing note */}
            <div style={{ backgroundColor: '#241d17', borderRadius: '4px', padding: '1rem 1.5rem', marginBottom: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {t('Two Pricing Tracks', 'Dua Jalur Harga', lang)}
              </div>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ fontFamily: 'var(--font-mono)', color: '#b7ad9c', fontSize: '0.65rem' }}>
                  <span style={{ color: '#c08a3e' }}>USD</span> {t('International via Etsy', 'Internasional via Etsy', lang)}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', color: '#b7ad9c', fontSize: '0.65rem' }}>
                  <span style={{ color: '#c08a3e' }}>IDR</span> {t('Domestic via Lynk.id', 'Domestik via Lynk.id', lang)}
                </div>
              </div>
            </div>

            {/* Varietal cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
              {varietals.map(v => (
                <div key={v.key} style={{ backgroundColor: '#fff', borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(27,22,17,0.07)', boxShadow: '0 2px 8px rgba(27,22,17,0.05)' }}>
                  <div style={{ height: '3px', background: v.color }} />
                  {/* Image placeholder */}
                  <div style={{ height: '200px', position: 'relative', overflow: 'hidden', backgroundColor: '#e8e0cd' }}>
                    <img src={v.image} alt={t(v.nameEn, v.nameId, lang)} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(27,22,17,0.35) 0%, transparent 50%)' }} />
                    <div style={{ position: 'absolute', top: '8px', right: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.48rem', color: '#fff', background: 'rgba(0,0,0,0.55)', padding: '2px 6px', borderRadius: '2px', letterSpacing: '0.06em' }}>
                      PLACEHOLDER PHOTO
                    </div>
                  </div>

                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                      <h3 style={{ fontFamily: 'var(--font-display)', color: '#1b1611', fontSize: '1.3rem', fontWeight: 700 }}>
                        {t(v.nameEn, v.nameId, lang)}
                      </h3>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', color: v.color, fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                      {t(v.notesEn, v.notesId, lang)}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.58rem', letterSpacing: '0.08em', marginBottom: '12px' }}>
                      {t(v.originEn, v.originId, lang)}
                    </div>
                    <p style={{ color: '#6a5e52', fontSize: '0.8rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                      {t(v.descEn, v.descId, lang)}
                    </p>

                    {/* Price */}
                    <div style={{ borderTop: '1px solid rgba(27,22,17,0.08)', paddingTop: '1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <div style={{ fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                          {t('International · Etsy', 'Internasional · Etsy', lang)}
                        </div>
                        <div style={{ fontFamily: 'var(--font-display)', color: v.color, fontSize: '1.1rem', fontWeight: 700 }}>
                          {v.etsy[0].usd} <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#8a8072' }}>/ 100g</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                          {t('Domestic · Lynk.id', 'Domestik · Lynk.id', lang)}
                        </div>
                        <div style={{ fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.68rem' }}>{v.idr}</div>
                      </div>
                      <div style={{ marginTop: '6px', fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.55rem', letterSpacing: '0.06em' }}>
                        {t('Max 3 units per order (shipping weight limit)', 'Maks 3 unit per pesanan (batas berat pengiriman)', lang)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Exploration Kit */}
            <div style={{ backgroundColor: '#241d17', borderRadius: '4px', padding: '2.5rem', border: '1px solid rgba(192,138,62,0.2)', display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'center' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  {t('Flores Exploration Kit', 'Kit Eksplorasi Flores', lang)} — {t('4 × 50g · Total 200g', '4 × 50g · Total 200g', lang)}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', color: '#f3ecdd', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  {t('Try All Four Varietals', 'Coba Semua Empat Varietas', lang)}
                </h3>
                <p style={{ color: '#8a8072', fontSize: '0.85rem', lineHeight: 1.7, maxWidth: '500px' }}>
                  {t(
                    'A curated sampler of all four Manggarai varietals — Arabika, Robusta, Yellow Caturra, and Juria — 50g each, in one exploration package. Perfect for gifting or your first deep dive into Flores coffee.',
                    'Sampler terpilih semua empat varietas Manggarai — Arabika, Robusta, Yellow Caturra, dan Juria — masing-masing 50g, dalam satu paket eksplorasi. Sempurna untuk hadiah atau penyelaman pertama ke kopi Flores.',
                    lang
                  )}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--font-display)', color: '#c08a3e', fontSize: '2rem', fontWeight: 700 }}>$45</div>
                <div style={{ fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.62rem', marginBottom: '1rem' }}>Rp 200.000</div>
                <button
                  onClick={() => navigate('shop')}
                  style={{
                    background: '#c08a3e',
                    color: '#1b1611',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    padding: '10px 24px',
                    borderRadius: '3px',
                    transition: 'background 0.2s',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => (e.target as HTMLElement).style.background = '#a07030'}
                  onMouseLeave={e => (e.target as HTMLElement).style.background = '#c08a3e'}
                >
                  {t('Order Kit', 'Pesan Kit', lang)}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── DIGITAL ──────────────────────────────────────── */}
      {tab === 'digital' && (
        <section style={{ backgroundColor: '#f3ecdd', padding: '5rem 1.5rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ backgroundColor: '#4f2036', borderRadius: '4px', padding: '1.5rem', marginBottom: '3rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span style={{ fontSize: '1.5rem' }}>📦</span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', color: '#f3ecdd', fontSize: '1rem', fontWeight: 600, marginBottom: '2px' }}>
                  {t('Launching After Physical Products Validate', 'Diluncurkan Setelah Produk Fisik Tervalidasi', lang)}
                </div>
                <div style={{ color: 'rgba(243,236,221,0.65)', fontSize: '0.8rem' }}>
                  {t('Register your interest below and be first to know when each product drops.', 'Daftarkan minat Anda di bawah ini dan jadilah yang pertama tahu ketika setiap produk diluncurkan.', lang)}
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {digitalProducts.map((dp, i) => (
                <div key={i} style={{ backgroundColor: '#fff', border: '1px solid rgba(27,22,17,0.07)', borderLeft: `3px solid ${dp.color}`, borderRadius: '4px', padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', color: dp.color, fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      {t(dp.typeEn, dp.typeId, lang)}
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', color: '#1b1611', fontSize: '1rem', fontWeight: 700 }}>{dp.price}</div>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', color: '#1b1611', fontSize: '1rem', fontWeight: 600, lineHeight: 1.3, marginBottom: '10px' }}>
                    {t(dp.titleEn, dp.titleId, lang)}
                  </h3>
                  <div style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.56rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '3px 8px',
                    borderRadius: '2px',
                    backgroundColor: dp.statusEn === 'Coming Soon' ? 'rgba(27,22,17,0.06)' : 'rgba(192,138,62,0.15)',
                    color: dp.statusEn === 'Coming Soon' ? '#8a8072' : '#c08a3e',
                  }}>
                    {t(dp.statusEn, dp.statusId, lang)}
                  </div>
                </div>
              ))}
            </div>

            {/* Email capture */}
            <div style={{ marginTop: '3rem', backgroundColor: '#241d17', borderRadius: '4px', padding: '2.5rem', textAlign: 'center', border: '1px solid rgba(192,138,62,0.2)' }}>
              <div style={{ fontFamily: 'var(--font-display)', color: '#f3ecdd', fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                {t('Be First to Know', 'Jadilah yang Pertama Tahu', lang)}
              </div>
              <p style={{ color: '#8a8072', fontSize: '0.82rem', marginBottom: '1.5rem' }}>
                {t('Join the list — receive The Manggarai Cup ebook free when you sign up.', 'Bergabunglah dengan daftar — terima ebook Cangkir Manggarai gratis saat mendaftar.', lang)}
              </p>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', maxWidth: '400px', margin: '0 auto' }}>
                <input
                  type="email"
                  placeholder={t('your@email.com', 'email@anda.com', lang)}
                  style={{
                    flex: 1,
                    padding: '10px 14px',
                    borderRadius: '3px',
                    border: '1px solid rgba(192,138,62,0.3)',
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    color: '#f3ecdd',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    outline: 'none',
                  }}
                />
                <button style={{
                  background: '#c08a3e',
                  color: '#1b1611',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '10px 20px',
                  borderRadius: '3px',
                  whiteSpace: 'nowrap',
                }}>
                  {t('Notify Me', 'Beri Tahu Saya', lang)}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── COURSES ──────────────────────────────────────── */}
      {tab === 'courses' && (
        <section style={{ backgroundColor: '#f3ecdd', padding: '5rem 1.5rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>

            {/* Flores Exploration Class — FEATURED */}
            <div style={{ backgroundColor: '#241d17', borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(192,138,62,0.2)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <div style={{ padding: '3rem' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    ✦ {t('Featured Experience · Labuan Bajo', 'Pengalaman Unggulan · Labuan Bajo', lang)}
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-display)', color: '#f3ecdd', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: '1rem' }}>
                    {t('Flores Coffee Exploration Class', 'Kelas Eksplorasi Kopi Flores', lang)}
                  </h2>
                  <p style={{ color: '#b7ad9c', fontSize: '0.88rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                    {t(
                      'A 1.5–2 hour immersive coffee experience designed for Komodo / Labuan Bajo tourists. Presented by Kopi Mane Inspiration, "The House of Flores Coffee." Individual or group bookings welcome.',
                      'Pengalaman kopi imersif 1,5–2 jam yang dirancang untuk wisatawan Komodo / Labuan Bajo. Dipersembahkan oleh Kopi Mane Inspiration, "Rumah Kopi Flores." Pemesanan individu atau kelompok diterima.',
                      lang
                    )}
                  </p>

                  {/* Price */}
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>
                        {t('per person', 'per orang', lang)}
                      </div>
                      <div style={{ fontFamily: 'var(--font-display)', color: '#c08a3e', fontSize: '2.2rem', fontWeight: 700, lineHeight: 1 }}>$20</div>
                      <div style={{ fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.62rem' }}>~Rp 360.000</div>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.6rem', paddingBottom: '4px', lineHeight: 1.6 }}>
                      {t('Group discounts available\n(confirm via WhatsApp)', 'Diskon kelompok tersedia\n(konfirmasi via WhatsApp)', lang)}
                    </div>
                  </div>

                  <a href={waLink(WHATSAPP_LBJ, lang)} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      background: '#c08a3e',
                      color: '#1b1611',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '12px 28px',
                      borderRadius: '3px',
                      textDecoration: 'none',
                      transition: 'background 0.2s',
                    }}>
                    {t('Book via WhatsApp', 'Pesan via WhatsApp', lang)}
                  </a>
                </div>

                {/* Class schedule */}
                <div style={{ backgroundColor: 'rgba(0,0,0,0.25)', padding: '2.5rem', borderLeft: '1px solid rgba(192,138,62,0.15)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                    {t('Class Schedule', 'Jadwal Kelas', lang)}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {classSchedule.map(cs => (
                      <div key={cs.part} style={{ display: 'flex', gap: '1rem' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(192,138,62,0.2)', border: '1px solid rgba(192,138,62,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <span style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.6rem', fontWeight: 600 }}>{cs.part}</span>
                        </div>
                        <div>
                          <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.55rem', letterSpacing: '0.08em', marginBottom: '2px' }}>{cs.durEn}</div>
                          <div style={{ color: '#b7ad9c', fontSize: '0.78rem', lineHeight: 1.5 }}>{t(cs.topicEn, cs.topicId, lang)}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* In-Person Courses */}
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                {t('Private Courses — In-Person', 'Kursus Privat — Tatap Muka', lang)}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                {[
                  {
                    titleEn: 'Full Cupping & Brewing Course',
                    titleId: 'Kursus Cupping & Penyeduhan Penuh',
                    descEn: 'In-person at either Ruteng or Labuan Bajo café. Deep dive into cupping fundamentals, grind settings, and brewing methods tailored to Manggarai varietals.',
                    descId: 'Tatap muka di kafe Ruteng atau Labuan Bajo. Pendalaman dasar-dasar cupping, pengaturan gilingan, dan metode penyeduhan yang disesuaikan dengan varietas Manggarai.',
                    badge: t('In-Person Only', 'Tatap Muka Saja', lang),
                  },
                  {
                    titleEn: 'Live Zoom Cupping Session',
                    titleId: 'Sesi Cupping Zoom Langsung',
                    descEn: 'A 40-minute live cupping session via Zoom. Ideal for buyers who want to understand their purchase. Timezone-scheduled, recorded for async viewing.',
                    descId: 'Sesi cupping langsung 40 menit via Zoom. Ideal untuk pembeli yang ingin memahami pembelian mereka. Dijadwalkan sesuai zona waktu, direkam untuk tampilan asinkron.',
                    badge: '$1–2 / ' + t('session', 'sesi', lang),
                  },
                ].map((c, i) => (
                  <div key={i} style={{ backgroundColor: '#fff', border: '1px solid rgba(27,22,17,0.07)', borderRadius: '4px', padding: '1.75rem' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px', display: 'inline-block', padding: '3px 8px', backgroundColor: '#f3ecdd', borderRadius: '2px' }}>
                      {c.badge}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', color: '#1b1611', fontSize: '1.1rem', fontWeight: 700, margin: '10px 0 10px' }}>
                      {t(c.titleEn, c.titleId, lang)}
                    </h3>
                    <p style={{ color: '#6a5e52', fontSize: '0.82rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                      {t(c.descEn, c.descId, lang)}
                    </p>
                    <div style={{ fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
                      {t('Topics covered', 'Topik yang dibahas', lang)}:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {courseTopics.map((tp, j) => (
                        <li key={j} style={{ display: 'flex', gap: '8px', color: '#6a5e52', fontSize: '0.78rem' }}>
                          <span style={{ color: '#c08a3e', flexShrink: 0 }}>·</span>
                          {t(tp.en, tp.id, lang)}
                        </li>
                      ))}
                    </ul>
                    <a href={waLink(WHATSAPP_LBJ, lang)} target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'block',
                        marginTop: '1.25rem',
                        background: '#4f2036',
                        color: '#f3ecdd',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        padding: '10px 20px',
                        borderRadius: '3px',
                        textDecoration: 'none',
                        textAlign: 'center',
                        transition: 'background 0.2s',
                      }}>
                      {t('Enquire via WhatsApp', 'Tanya via WhatsApp', lang)}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
