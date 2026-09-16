import type { Page, Lang } from '../types'
import { t, waLink, WHATSAPP_LBJ } from '../types'

interface Props {
  navigate: (p: Page) => void
  lang: Lang
}

const varietals = [
  {
    key: 'arabika',
    color: '#c9743a',
    en: 'Arabika',
    id: 'Arabika',
    notesEn: 'Fruity · Caramel',
    notesId: 'Buah-buahan · Karamel',
    priceUSD: '$19',
    priceIDR: 'Rp 85.000',
    descEn: 'Bright and balanced. A classic Manggarai Arabica with clean fruit-forward character and sweet caramel finish.',
    descId: 'Cerah dan seimbang. Arabika Manggarai klasik dengan karakter buah yang bersih dan akhir karamel manis.',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=400&fit=crop&auto=format',
  },
  {
    key: 'robusta',
    color: '#2e6e68',
    en: 'Robusta',
    id: 'Robusta',
    notesEn: 'Dark Chocolate · Mint',
    notesId: 'Coklat Gelap · Mint',
    priceUSD: '$19',
    priceIDR: 'Rp 85.000',
    descEn: 'Bold and complex. An extraordinary Robusta with notes of dark chocolate and a surprising cool mint finish.',
    descId: 'Berani dan kompleks. Robusta luar biasa dengan nuansa coklat gelap dan akhir mint yang menyegarkan.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop&auto=format',
  },
  {
    key: 'caturra',
    color: '#c4452e',
    en: 'Yellow Caturra',
    id: 'Yellow Caturra',
    notesEn: 'Chocolate · Milky · Almond',
    notesId: 'Coklat · Susu · Almond',
    priceUSD: '$22',
    priceIDR: 'Rp 105.000',
    descEn: 'Smooth and comforting. Descended from Bourbon, this rare Caturra offers a chocolatey, milky sweetness with almond depth.',
    descId: 'Lembut dan nyaman. Keturunan Bourbon, Caturra langka ini menawarkan kemanisan coklat susu dengan kedalaman almond.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop&auto=format',
  },
  {
    key: 'juria',
    color: '#3a5a3e',
    en: 'Juria',
    id: 'Juria',
    notesEn: 'Floral · Chocolate · Tobacco · Spicy',
    notesId: 'Bunga · Coklat · Tembakau · Pedas',
    priceUSD: '$25',
    priceIDR: 'Rp 125.000',
    descEn: 'Ancient Typica Arabica grown from heritage seeds first introduced in 1937. Biennial harvest. The rarest, most storied cup in our collection.',
    descId: 'Typica Arabika kuno yang tumbuh dari benih warisan yang pertama kali diperkenalkan pada 1937. Panen dua tahunan. Sajian paling langka dan bersejarah.',
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?w=600&h=400&fit=crop&auto=format',
  },
]

const facts = [
  { num: '2014', labelEn: 'Founded\nRuteng, Flores', labelId: 'Didirikan\nRuteng, Flores' },
  { num: '1,200', labelEn: 'Metres Above\nSea Level', labelId: 'Meter Di Atas\nPermukaan Laut' },
  { num: '4', labelEn: 'Certified\nVarietals', labelId: 'Varietas\nBersertifikat' },
  { num: 'G20', labelEn: 'Official Coffee\nLabuan Bajo 2022', labelId: 'Kopi Resmi\nLabuan Bajo 2022' },
  { num: 'GI', labelEn: 'Geographical\nIndication Certified', labelId: 'Bersertifikat\nIndikasi Geografis' },
]

// ⚠️  PLACEHOLDER — Ganti dengan review asli dari Google Business / TripAdvisor sebelum live
const reviews: { name: string; origin: string; stars: number; textEn: string; textId: string }[] = [
  {
    name: '[NAMA REVIEWER 1]',
    origin: '[Negara/Kota]',
    stars: 5,
    textEn: '[PASTE TEKS REVIEW ASLI DI SINI — dari Google Business Profile Labuan Bajo]',
    textId: '[PASTE TEKS REVIEW ASLI DI SINI — dari Google Business Profile Labuan Bajo]',
  },
  {
    name: '[NAMA REVIEWER 2]',
    origin: '[Negara/Kota]',
    stars: 5,
    textEn: '[PASTE TEKS REVIEW ASLI DI SINI]',
    textId: '[PASTE TEKS REVIEW ASLI DI SINI]',
  },
  {
    name: '[NAMA REVIEWER 3]',
    origin: '[Negara/Kota]',
    stars: 5,
    textEn: '[PASTE TEKS REVIEW ASLI DI SINI]',
    textId: '[PASTE TEKS REVIEW ASLI DI SINI]',
  },
  {
    name: '[NAMA REVIEWER 4]',
    origin: '[Negara/Kota]',
    stars: 5,
    textEn: '[PASTE TEKS REVIEW ASLI DI SINI]',
    textId: '[PASTE TEKS REVIEW ASLI DI SINI]',
  },
  {
    name: '[NAMA REVIEWER 5]',
    origin: '[Negara/Kota]',
    stars: 5,
    textEn: '[PASTE TEKS REVIEW ASLI DI SINI]',
    textId: '[PASTE TEKS REVIEW ASLI DI SINI]',
  },
]

export default function Home({ navigate, lang }: Props) {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        minHeight: '95vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1b1611',
        overflow: 'hidden',
      }}>
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=1080&fit=crop&auto=format"
          alt={t('Kopi Mane specialty coffee', 'Kopi spesialti Kopi Mane', lang)}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.22 }}
        />
        {/* Gradient overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(27,22,17,0.3) 0%, rgba(27,22,17,0.7) 100%)' }} />

        {/* Content */}
        <div style={{ position: 'relative', textAlign: 'center', padding: '0 1.5rem', maxWidth: '900px' }}>
          {/* Eyebrow */}
          <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <span style={{ display: 'inline-block', width: '32px', height: '1px', background: '#c08a3e' }} />
            {t('Ruteng · Labuan Bajo · Since 2014', 'Ruteng · Labuan Bajo · Sejak 2014', lang)}
            <span style={{ display: 'inline-block', width: '32px', height: '1px', background: '#c08a3e' }} />
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily: 'var(--font-display)', color: '#f3ecdd', fontSize: 'clamp(2.8rem, 8vw, 6rem)', fontWeight: 700, lineHeight: 1.05, marginBottom: '1rem' }}>
            {t('From Farmer', 'Dari Petani', lang)}
            <br />
            <span style={{ color: '#c08a3e', fontStyle: 'italic' }}>{t('to Cup', 'ke Cangkir', lang)}</span>
          </h1>

          {/* Tagline */}
          <p style={{ fontFamily: 'var(--font-display)', color: '#b7ad9c', fontSize: 'clamp(0.95rem, 2.5vw, 1.25rem)', fontWeight: 300, fontStyle: 'italic', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            {t(
              'Award-winning specialty coffee from the highlands of Manggarai, Flores — 1,200 metres above sea level.',
              'Kopi spesialti peraih penghargaan dari dataran tinggi Manggarai, Flores — 1.200 meter di atas permukaan laut.',
              lang
            )}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('products')}
              style={{
                background: '#4f2036',
                color: '#f3ecdd',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '14px 32px',
                borderRadius: '3px',
                transition: 'background 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.background = '#7a3a56' }}
              onMouseLeave={e => { (e.target as HTMLElement).style.background = '#4f2036' }}
            >
              {t('Explore Our Coffee', 'Jelajahi Kopi Kami', lang)}
            </button>
            <button
              onClick={() => navigate('about')}
              style={{
                background: 'transparent',
                color: '#f3ecdd',
                border: '1px solid rgba(243,236,221,0.4)',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '14px 32px',
                borderRadius: '3px',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(243,236,221,0.1)'; (e.currentTarget as HTMLElement).style.borderColor = '#f3ecdd' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(243,236,221,0.4)' }}
            >
              {t('Our Story', 'Kisah Kami', lang)}
            </button>
          </div>

          {/* Scroll indicator */}
          <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', opacity: 0.5 }}>
            <div style={{ fontFamily: 'var(--font-mono)', color: '#f3ecdd', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              {t('Scroll', 'Gulir', lang)}
            </div>
            <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #f3ecdd, transparent)' }} />
          </div>
        </div>
      </section>

      {/* ── FACT STRIP ───────────────────────────────────── */}
      <section style={{ backgroundColor: '#241d17', borderTop: '1px solid rgba(192,138,62,0.2)', borderBottom: '1px solid rgba(192,138,62,0.2)', overflowX: 'auto' }}>
        <div style={{ display: 'flex', minWidth: 'max-content', maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          {facts.map((f, i) => (
            <div key={i} style={{ flex: '1', padding: '1.5rem 2rem', borderRight: i < facts.length - 1 ? '1px solid rgba(192,138,62,0.15)' : 'none', display: 'flex', alignItems: 'center', gap: '1rem', minWidth: '160px' }}>
              <div style={{ fontFamily: 'var(--font-display)', color: '#c08a3e', fontSize: '1.8rem', fontWeight: 700, lineHeight: 1 }}>
                {f.num}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'pre-line', lineHeight: 1.5 }}>
                {t(f.labelEn, f.labelId, lang)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED VARIETALS ───────────────────────────── */}
      <section style={{ backgroundColor: '#f3ecdd', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              {t('Our Varietals', 'Varietas Kami', lang)}
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: '#1b1611', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '1rem' }}>
              {t('Four Distinct Characters', 'Empat Karakter yang Berbeda', lang)}
            </h2>
            <p style={{ color: '#8a8072', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.95rem' }}>
              {t(
                'Sourced from ASNIKOM farmers in the Colol Highlands. Each varietal expresses a different facet of Manggarai terroir.',
                'Bersumber dari petani ASNIKOM di Dataran Tinggi Colol. Setiap varietas mengekspresikan sisi berbeda dari terroir Manggarai.',
                lang
              )}
            </p>
          </div>

          {/* Cards grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {varietals.map(v => (
              <div
                key={v.key}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  border: '1px solid rgba(27,22,17,0.08)',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                  cursor: 'pointer',
                }}
                onClick={() => navigate('products')}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(27,22,17,0.12)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
              >
                {/* Color tag bar */}
                <div style={{ height: '4px', background: v.color }} />

                {/* Image placeholder — REPLACE WITH REAL PRODUCT PHOTO */}
                <div style={{ height: '180px', backgroundColor: '#e8e0cd', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={v.image}
                    alt={t(v.en, v.id, lang)}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, rgba(27,22,17,0.4) 0%, transparent 60%)` }} />
                  {/* PLACEHOLDER LABEL */}
                  <div style={{ position: 'absolute', top: '8px', right: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: '#fff', background: 'rgba(0,0,0,0.5)', padding: '2px 6px', borderRadius: '2px', letterSpacing: '0.08em' }}>
                    PLACEHOLDER PHOTO
                  </div>
                </div>

                <div style={{ padding: '1.25rem' }}>
                  {/* Varietal name */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', color: '#1b1611', fontSize: '1.2rem', fontWeight: 700 }}>
                      {t(v.en, v.id, lang)}
                    </h3>
                    <div style={{ fontFamily: 'var(--font-mono)', color: v.color, fontSize: '0.7rem', fontWeight: 600, whiteSpace: 'nowrap', marginLeft: '8px' }}>
                      {v.priceUSD} / 100g
                    </div>
                  </div>

                  {/* Tasting notes */}
                  <div style={{ fontFamily: 'var(--font-mono)', color: v.color, fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
                    {t(v.notesEn, v.notesId, lang)}
                  </div>

                  {/* Desc */}
                  <p style={{ color: '#8a8072', fontSize: '0.8rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                    {t(v.descEn, v.descId, lang)}
                  </p>

                  {/* IDR price */}
                  <div style={{ fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.62rem', borderTop: '1px solid rgba(27,22,17,0.08)', paddingTop: '10px' }}>
                    {t('Domestic', 'Domestik', lang)}: {v.priceIDR} · 100g
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              onClick={() => navigate('products')}
              style={{
                background: 'transparent',
                color: '#1b1611',
                border: '1px solid rgba(27,22,17,0.3)',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '12px 28px',
                borderRadius: '3px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.background = '#1b1611'; (e.target as HTMLElement).style.color = '#f3ecdd' }}
              onMouseLeave={e => { (e.target as HTMLElement).style.background = 'transparent'; (e.target as HTMLElement).style.color = '#1b1611' }}
            >
              {t('View All Products + Sizes', 'Lihat Semua Produk + Ukuran', lang)}
            </button>
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENT TEASER ───────────────────────────── */}
      <section style={{ backgroundColor: '#4f2036', padding: '5rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(192,138,62,0.08) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="grid-cols-1 md:grid-cols-2">
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', color: 'rgba(192,138,62,0.8)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                {t('International Recognition', 'Pengakuan Internasional', lang)}
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', color: '#f3ecdd', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                {t('From Flores Hills to', 'Dari Bukit Flores ke', lang)}{' '}
                <span style={{ color: '#c08a3e', fontStyle: 'italic' }}>{t('World Stages', 'Panggung Dunia', lang)}</span>
              </h2>
              <p style={{ color: 'rgba(243,236,221,0.7)', lineHeight: 1.75, fontSize: '0.9rem', marginBottom: '2rem' }}>
                {t(
                  'Since 2015, Kopi Mane has been recognised at the Indonesia Specialty Coffee Contest, the AVPA Paris, the World Economic Forum in Davos, and named the official coffee of the G20 Labuan Bajo Summit 2022.',
                  'Sejak 2015, Kopi Mane telah diakui di Kontes Kopi Spesialti Indonesia, AVPA Paris, World Economic Forum di Davos, dan dinobatkan sebagai kopi resmi KTT G20 Labuan Bajo 2022.',
                  lang
                )}
              </p>
              <button
                onClick={() => navigate('achievements')}
                style={{
                  background: '#c08a3e',
                  color: '#1b1611',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '12px 28px',
                  borderRadius: '3px',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.target as HTMLElement).style.background = '#a07030'}
                onMouseLeave={e => (e.target as HTMLElement).style.background = '#c08a3e'}
              >
                {t('View Full Timeline', 'Lihat Linimasa Lengkap', lang)}
              </button>
            </div>

            {/* Achievement stamps */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { year: '2015', place: 'Banyuwangi', event: t('Best Robusta', 'Robusta Terbaik', lang), sub: t('Indonesia Specialty\nCoffee Contest', 'Kontes Kopi Spesialti\nIndonesia', lang) },
                { year: '2018', place: 'Paris', event: t('AVPA Medal', 'Medali AVPA', lang), sub: t('Int\'l Origin-Roasted\nCoffees Contest', 'Kontes Kopi Panggang\nAsal Internasional', lang) },
                { year: '2020', place: 'Davos', event: t('WEF Guest', 'Tamu WEF', lang), sub: t('World Economic\nForum', 'Forum Ekonomi\nDunia', lang) },
                { year: '2022', place: 'Labuan Bajo', event: t('G20 Official Coffee', 'Kopi Resmi G20', lang), sub: t('Presidential\nSummit', 'KTT\nPresiden', lang) },
              ].map((a, i) => (
                <div key={i} style={{
                  border: '1px dashed rgba(192,138,62,0.4)',
                  borderRadius: '4px',
                  padding: '1.25rem',
                  transform: i % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)',
                  backgroundColor: 'rgba(27,22,17,0.3)',
                  transition: 'transform 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'rotate(0deg) scale(1.03)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = i % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)'}
                >
                  <div style={{ fontFamily: 'var(--font-display)', color: '#c08a3e', fontSize: '1.4rem', fontWeight: 700, lineHeight: 1 }}>{a.year}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', color: 'rgba(243,236,221,0.5)', fontSize: '0.55rem', letterSpacing: '0.12em', textTransform: 'uppercase', margin: '4px 0' }}>{a.place}</div>
                  <div style={{ fontFamily: 'var(--font-display)', color: '#f3ecdd', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2px' }}>{a.event}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', color: 'rgba(243,236,221,0.45)', fontSize: '0.55rem', whiteSpace: 'pre-line', lineHeight: 1.4 }}>{a.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────── */}
      <section style={{ backgroundColor: '#e8e0cd', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              {t('What Guests Say', 'Kata Tamu Kami', lang)}
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: '#1b1611', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, marginBottom: '0.5rem' }}>
              {t('Loved Around the World', 'Dicintai di Seluruh Dunia', lang)}
            </h2>
            <p style={{ color: '#8a8072', fontSize: '0.85rem' }}>
              {t('From Google Business & TripAdvisor — Labuan Bajo', 'Dari Google Bisnis & TripAdvisor — Labuan Bajo', lang)}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {reviews.map((r, i) => (
              <div key={i} style={{
                backgroundColor: '#f3ecdd',
                border: '1px solid rgba(27,22,17,0.08)',
                borderRadius: '4px',
                padding: '1.5rem',
                transition: 'box-shadow 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(27,22,17,0.1)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = 'none'}
              >
                {/* Stars */}
                <div style={{ color: '#c08a3e', fontSize: '0.85rem', marginBottom: '10px', letterSpacing: '2px' }}>
                  {'★'.repeat(r.stars)}
                </div>
                <p style={{ color: '#1b1611', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1.25rem', fontStyle: 'italic', fontFamily: 'var(--font-display)', fontWeight: 300 }}>
                  "{t(r.textEn, r.textId, lang)}"
                </p>
                <div style={{ borderTop: '1px solid rgba(27,22,17,0.08)', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-body)', color: '#1b1611', fontSize: '0.78rem', fontWeight: 600 }}>{r.name}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.6rem', letterSpacing: '0.08em' }}>{r.origin}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              onClick={() => navigate('achievements')}
              style={{
                background: 'transparent',
                color: '#1b1611',
                border: '1px solid rgba(27,22,17,0.25)',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '11px 26px',
                borderRadius: '3px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.background = '#1b1611'; (e.target as HTMLElement).style.color = '#f3ecdd' }}
              onMouseLeave={e => { (e.target as HTMLElement).style.background = 'transparent'; (e.target as HTMLElement).style.color = '#1b1611' }}
            >
              {t('Read More Reviews', 'Baca Ulasan Lebih Lanjut', lang)}
            </button>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section style={{ backgroundColor: '#1b1611', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            {t('Ready to Taste?', 'Siap Mencicipi?', lang)}
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', color: '#f3ecdd', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, marginBottom: '1.25rem' }}>
            {t('Order Your Flores Coffee Today', 'Pesan Kopi Flores Anda Hari Ini', lang)}
          </h2>
          <p style={{ color: '#8a8072', lineHeight: 1.7, marginBottom: '2rem', fontSize: '0.9rem' }}>
            {t(
              'Shop on Etsy (international) or Lynk.id (domestic Indonesia). Or visit us in Ruteng or Labuan Bajo.',
              'Belanja di Etsy (internasional) atau Lynk.id (Indonesia domestik). Atau kunjungi kami di Ruteng atau Labuan Bajo.',
              lang
            )}
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('shop')}
              style={{
                background: '#c08a3e',
                color: '#1b1611',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '14px 32px',
                borderRadius: '3px',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.target as HTMLElement).style.background = '#a07030'}
              onMouseLeave={e => (e.target as HTMLElement).style.background = '#c08a3e'}
            >
              {t('Shop Now', 'Belanja Sekarang', lang)}
            </button>
            <a
              href={waLink(WHATSAPP_LBJ, lang)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: '#f3ecdd',
                border: '1px solid rgba(243,236,221,0.3)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '14px 32px',
                borderRadius: '3px',
                textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
