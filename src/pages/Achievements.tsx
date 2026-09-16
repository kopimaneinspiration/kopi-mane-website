import type { Page, Lang } from '../types'
import { t } from '../types'

interface Props {
  navigate: (p: Page) => void
  lang: Lang
}

const timeline = [
  {
    year: '2015',
    place: 'Banyuwangi, Indonesia',
    eventEn: 'Best 1st Robusta',
    eventId: 'Robusta Terbaik ke-1',
    descEn: 'Indonesian Specialty Coffee Contest 7th edition (with ICCRI). Our Robusta claimed first place in the national competition.',
    descId: 'Kontes Kopi Spesialti Indonesia edisi ke-7 (bersama ICCRI). Robusta kami meraih tempat pertama dalam kompetisi nasional.',
    color: '#c9743a',
    flag: '🏆',
  },
  {
    year: '2018',
    place: 'Paris, France',
    eventEn: 'AVPA Medal',
    eventId: 'Medali AVPA',
    descEn: '4th International Contest of Origin-Roasted Coffees by the AVPA (Agence pour la Valorisation des Produits Agricoles), Paris.',
    descId: 'Kontes Internasional Kopi Panggang Asal ke-4 oleh AVPA (Agence pour la Valorisation des Produits Agricoles), Paris.',
    color: '#c08a3e',
    flag: '🥇',
  },
  {
    year: '2018',
    place: 'Kuala Lumpur, Malaysia',
    eventEn: 'Archexpo Partnership',
    eventId: 'Kemitraan Archexpo',
    descEn: 'Strategic synergy with Bank BNI at Archexpo Kuala Lumpur — expanding our international market reach.',
    descId: 'Sinergi strategis dengan Bank BNI di Archexpo Kuala Lumpur — memperluas jangkauan pasar internasional kami.',
    color: '#2e6e68',
    flag: '🤝',
  },
  {
    year: '2018',
    place: 'Manggarai, Indonesia',
    eventEn: 'GI Certificate — Arabika',
    eventId: 'Sertifikat GI — Arabika',
    descEn: 'Official Geographical Indication certification for Manggarai Arabica coffee, issued by the Ministry of Law & Human Rights of Indonesia.',
    descId: 'Sertifikasi Indikasi Geografis resmi untuk kopi Arabika Manggarai, dikeluarkan oleh Kementerian Hukum & HAM Indonesia.',
    color: '#4f2036',
    flag: '📜',
  },
  {
    year: '2019',
    place: 'Solo, Indonesia',
    eventEn: 'BEKRAF Festival',
    eventId: 'Festival BEKRAF',
    descEn: 'Featured at the BEKRAF (Creative Economy Agency of Indonesia) Festival — showcasing Flores coffee to the national creative economy.',
    descId: 'Ditampilkan di Festival BEKRAF (Badan Ekonomi Kreatif Indonesia) — memperkenalkan kopi Flores ke ekonomi kreatif nasional.',
    color: '#c4452e',
    flag: '🎪',
  },
  {
    year: '2019',
    place: 'Gunung Sitoli, Nias',
    eventEn: 'SAIL NIAS Coffee Festival',
    eventId: 'Festival Kopi SAIL NIAS',
    descEn: 'Participated in the Coffee Festival within SAIL NIAS — Indonesia\'s prestigious annual maritime and cultural event.',
    descId: 'Berpartisipasi dalam Festival Kopi SAIL NIAS — acara maritim dan budaya tahunan bergengsi Indonesia.',
    color: '#3a5a3e',
    flag: '⚓',
  },
  {
    year: '2019',
    place: 'Manggarai, Indonesia',
    eventEn: 'GI Certificate — Robusta',
    eventId: 'Sertifikat GI — Robusta',
    descEn: 'Geographical Indication certification extended to our Robusta varietal — making us one of the first dual GI-certified coffee producers in Indonesia.',
    descId: 'Sertifikasi Indikasi Geografis diperluas ke varietas Robusta kami — menjadikan kami salah satu produsen kopi bersertifikat GI ganda pertama di Indonesia.',
    color: '#4f2036',
    flag: '📜',
  },
  {
    year: '2019',
    place: 'Labuan Bajo, Indonesia',
    eventEn: "Presidential Entourage Visit",
    eventId: 'Kunjungan Rombongan Presiden',
    descEn: "Kopi Mane Inspiration hosted Indonesia's Presidential entourage — a landmark moment cementing our reputation as a national showcase of Flores excellence.",
    descId: 'Kopi Mane Inspiration menjamu rombongan Presiden Indonesia — momen bersejarah yang memperkuat reputasi kami sebagai etalase nasional keunggulan Flores.',
    color: '#c08a3e',
    flag: '🎖️',
  },
  {
    year: '2019–20',
    place: 'Spain',
    eventEn: 'Coffee Expo Spain',
    eventId: 'Coffee Expo Spanyol',
    descEn: 'Participated in Coffee Expo Spain — representing Flores specialty coffee on the European stage.',
    descId: 'Berpartisipasi dalam Coffee Expo Spanyol — mewakili kopi spesialti Flores di panggung Eropa.',
    color: '#c9743a',
    flag: '🇪🇸',
  },
  {
    year: '2019–20',
    place: 'New Zealand',
    eventEn: 'Coffee Expo & Investor Discussions',
    eventId: 'Coffee Expo & Diskusi Investor',
    descEn: 'Invited to Coffee Expo New Zealand with investor discussions — growing our international network in the specialty coffee sector.',
    descId: 'Diundang ke Coffee Expo Selandia Baru dengan diskusi investor — memperluas jaringan internasional kami di sektor kopi spesialti.',
    color: '#2e6e68',
    flag: '🥝',
  },
  {
    year: '2020',
    place: 'Davos, Switzerland',
    eventEn: 'World Economic Forum',
    eventId: 'Forum Ekonomi Dunia',
    descEn: 'Guest hospitality at the World Economic Forum in Davos — Kopi Mane served as part of Indonesian cultural representation at the world\'s premier economic gathering.',
    descId: 'Perjamuan tamu di World Economic Forum di Davos — Kopi Mane disajikan sebagai bagian dari representasi budaya Indonesia di pertemuan ekonomi utama dunia.',
    color: '#c08a3e',
    flag: '🌍',
  },
  {
    year: '2022',
    place: 'Labuan Bajo, Indonesia',
    eventEn: 'G20 Official Coffee',
    eventId: 'Kopi Resmi G20',
    descEn: 'Named Official Coffee of the G20 Labuan Bajo Summit — served to heads of state and delegates from the world\'s 20 largest economies. The highest recognition in Kopi Mane\'s history.',
    descId: 'Dinobatkan sebagai Kopi Resmi KTT G20 Labuan Bajo — disajikan kepada kepala negara dan delegasi dari 20 ekonomi terbesar dunia. Pengakuan tertinggi dalam sejarah Kopi Mane.',
    color: '#c08a3e',
    flag: '🌐',
  },
]

// ⚠️  SEMUA REVIEW DI BAWAH ADALAH PLACEHOLDER — GANTI DENGAN REVIEW ASLI DARI GOOGLE BUSINESS / TRIPADVISOR
// Paste teks asli reviewer, nama asli, asal, dan platform sebelum website live.
const reviews: { name: string; origin: string; platform: string; stars: number; textEn: string; textId: string }[] = [
  {
    name: '[NAMA REVIEWER 1]',
    origin: '[Negara/Kota]',
    platform: 'Google Business',
    stars: 5,
    textEn: '[PASTE TEKS REVIEW ASLI DI SINI — dari Google Business Profile Labuan Bajo]',
    textId: '[PASTE TEKS REVIEW ASLI DI SINI — dari Google Business Profile Labuan Bajo]',
  },
  {
    name: '[NAMA REVIEWER 2]',
    origin: '[Negara/Kota]',
    platform: 'Google Business',
    stars: 5,
    textEn: '[PASTE TEKS REVIEW ASLI DI SINI]',
    textId: '[PASTE TEKS REVIEW ASLI DI SINI]',
  },
  {
    name: '[NAMA REVIEWER 3]',
    origin: '[Negara/Kota]',
    platform: 'TripAdvisor',
    stars: 5,
    textEn: '[PASTE TEKS REVIEW ASLI DI SINI]',
    textId: '[PASTE TEKS REVIEW ASLI DI SINI]',
  },
  {
    name: '[NAMA REVIEWER 4]',
    origin: '[Negara/Kota]',
    platform: 'Google Business',
    stars: 5,
    textEn: '[PASTE TEKS REVIEW ASLI DI SINI]',
    textId: '[PASTE TEKS REVIEW ASLI DI SINI]',
  },
  {
    name: '[NAMA REVIEWER 5]',
    origin: '[Negara/Kota]',
    platform: 'TripAdvisor',
    stars: 5,
    textEn: '[PASTE TEKS REVIEW ASLI DI SINI]',
    textId: '[PASTE TEKS REVIEW ASLI DI SINI]',
  },
  {
    name: '[NAMA REVIEWER 6]',
    origin: '[Negara/Kota]',
    platform: 'Google Business',
    stars: 5,
    textEn: '[PASTE TEKS REVIEW ASLI DI SINI]',
    textId: '[PASTE TEKS REVIEW ASLI DI SINI]',
  },
  {
    name: '[NAMA REVIEWER 7]',
    origin: '[Negara/Kota]',
    platform: 'Google Business',
    stars: 5,
    textEn: '[PASTE TEKS REVIEW ASLI DI SINI]',
    textId: '[PASTE TEKS REVIEW ASLI DI SINI]',
  },
]

export default function Achievements({ navigate: _navigate, lang }: Props) {
  return (
    <div>
      {/* ── PAGE HERO ────────────────────────────────────── */}
      <section style={{ backgroundColor: '#1b1611', padding: '5rem 1.5rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(192,138,62,0.08) 0%, transparent 70%)' }} />
        <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            {t('Awards & Reviews · Penghargaan & Ulasan', 'Penghargaan & Ulasan · Awards & Reviews', lang)}
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', color: '#f3ecdd', fontSize: 'clamp(2.2rem, 6vw, 4rem)', fontWeight: 700, lineHeight: 1.1, maxWidth: '700px', marginBottom: '1rem' }}>
            {t('A Decade of Recognition', 'Satu Dekade Pengakuan', lang)}
          </h1>
          <p style={{ color: '#b7ad9c', fontSize: '0.95rem', maxWidth: '540px', lineHeight: 1.7, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300 }}>
            {t(
              'From a highland roastery in Ruteng to the G20 Summit table — twelve milestones across three continents.',
              'Dari roasteri dataran tinggi di Ruteng hingga meja KTT G20 — dua belas tonggak pencapaian di tiga benua.',
              lang
            )}
          </p>
          {/* Stats */}
          <div style={{ display: 'flex', gap: '2.5rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            {[
              { num: '12', labelEn: 'Milestones', labelId: 'Pencapaian' },
              { num: '3', labelEn: 'Continents', labelId: 'Benua' },
              { num: '10', labelEn: 'Years', labelId: 'Tahun' },
              { num: 'GI×2', labelEn: 'Certified', labelId: 'Bersertifikat' },
            ].map(s => (
              <div key={s.num}>
                <div style={{ fontFamily: 'var(--font-display)', color: '#c08a3e', fontSize: '1.8rem', fontWeight: 700, lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '2px' }}>{t(s.labelEn, s.labelId, lang)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────── */}
      <section style={{ backgroundColor: '#f3ecdd', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '3rem' }}>
            {t('Achievement Timeline', 'Linimasa Pencapaian', lang)}
          </div>

          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: '80px', top: 0, bottom: 0, width: '1px', background: 'linear-gradient(to bottom, rgba(192,138,62,0.5) 0%, rgba(192,138,62,0.1) 100%)' }} className="hidden md:block" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {timeline.map((item, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '2rem', alignItems: 'flex-start' }} className="grid-cols-1 md:grid-cols-[100px_1fr]">
                  {/* Year + dot */}
                  <div style={{ textAlign: 'right', paddingTop: '1.25rem', position: 'relative' }}>
                    <div style={{ fontFamily: 'var(--font-display)', color: item.color, fontSize: '1rem', fontWeight: 700 }}>{item.year}</div>
                    {/* Dot on timeline */}
                    <div style={{
                      position: 'absolute',
                      right: '-18px',
                      top: '1.45rem',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: item.color,
                      border: '2px solid #f3ecdd',
                      boxShadow: `0 0 0 3px ${item.color}30`,
                    }} className="hidden md:block" />
                  </div>

                  {/* Content card */}
                  <div style={{
                    backgroundColor: '#fff',
                    border: '1px solid rgba(27,22,17,0.06)',
                    borderLeft: `3px solid ${item.color}`,
                    borderRadius: '4px',
                    padding: '1.5rem',
                    transition: 'box-shadow 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(27,22,17,0.1)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = 'none'}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px', flexWrap: 'wrap', gap: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '1.1rem' }}>{item.flag}</span>
                        <h3 style={{ fontFamily: 'var(--font-display)', color: '#1b1611', fontSize: '1.05rem', fontWeight: 700 }}>
                          {t(item.eventEn, item.eventId, lang)}
                        </h3>
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        {item.place}
                      </div>
                    </div>
                    <p style={{ color: '#6a5e52', fontSize: '0.82rem', lineHeight: 1.7 }}>
                      {t(item.descEn, item.descId, lang)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PASSPORT STAMPS ──────────────────────────────── */}
      <section style={{ backgroundColor: '#241d17', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              {t('Passport of Excellence', 'Paspor Keunggulan', lang)}
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: '#f3ecdd', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 700 }}>
              {t('Stamped by the World', 'Dicap oleh Dunia', lang)}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '1rem' }}>
            {[
              { city: 'Banyuwangi', year: '2015', label: t('Best Robusta', 'Robusta Terbaik', lang), color: '#c9743a' },
              { city: 'Paris', year: '2018', label: 'AVPA Medal', color: '#c08a3e' },
              { city: 'Kuala Lumpur', year: '2018', label: t('Archexpo', 'Archexpo', lang), color: '#2e6e68' },
              { city: 'Manggarai', year: '2018', label: 'GI Arabika', color: '#4f2036' },
              { city: 'Solo', year: '2019', label: 'BEKRAF', color: '#c4452e' },
              { city: 'Nias', year: '2019', label: 'SAIL NIAS', color: '#3a5a3e' },
              { city: 'Manggarai', year: '2019', label: 'GI Robusta', color: '#4f2036' },
              { city: 'Labuan Bajo', year: '2019', label: t('Presidential', 'Presiden', lang), color: '#c08a3e' },
              { city: 'Spain', year: '2019', label: 'Coffee Expo', color: '#c9743a' },
              { city: 'New Zealand', year: '2020', label: 'Coffee Expo', color: '#2e6e68' },
              { city: 'Davos', year: '2020', label: 'WEF', color: '#c08a3e' },
              { city: 'G20 Summit', year: '2022', label: t('Official Coffee', 'Kopi Resmi', lang), color: '#c08a3e' },
            ].map((stamp, i) => (
              <div key={i} style={{
                border: `1px dashed ${stamp.color}50`,
                borderRadius: '4px',
                padding: '1.25rem',
                textAlign: 'center',
                transform: `rotate(${i % 3 === 0 ? '-1.5' : i % 3 === 1 ? '1' : '-0.5'}deg)`,
                backgroundColor: 'rgba(255,255,255,0.03)',
                transition: 'transform 0.2s, background 0.2s',
                cursor: 'default',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'rotate(0deg) scale(1.05)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = `rotate(${i % 3 === 0 ? '-1.5' : i % 3 === 1 ? '1' : '-0.5'}deg)`; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)' }}
              >
                <div style={{ fontFamily: 'var(--font-display)', color: stamp.color, fontSize: '1.2rem', fontWeight: 700 }}>{stamp.year}</div>
                <div style={{ fontFamily: 'var(--font-mono)', color: '#f3ecdd', fontSize: '0.6rem', letterSpacing: '0.1em', margin: '4px 0 2px', textTransform: 'uppercase' }}>{stamp.city}</div>
                <div style={{ fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.55rem', letterSpacing: '0.08em' }}>{stamp.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────── */}
      <section style={{ backgroundColor: '#e8e0cd', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              {t('Guest Reviews', 'Ulasan Tamu', lang)}
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: '#1b1611', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, marginBottom: '0.5rem' }}>
              {t('What the World Says', 'Apa Kata Dunia', lang)}
            </h2>
            <p style={{ color: '#8a8072', fontSize: '0.82rem' }}>
              {t('Collected from Google Business Profile & TripAdvisor — Labuan Bajo', 'Dikumpulkan dari Google Profil Bisnis & TripAdvisor — Labuan Bajo', lang)}
            </p>
          </div>

          {/* Featured reviews */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
            {reviews.slice(0, 2).map((r, i) => (
              <div key={i} style={{
                backgroundColor: '#f3ecdd',
                border: '1px solid rgba(27,22,17,0.07)',
                borderRadius: '4px',
                padding: '2rem',
                position: 'relative',
                transition: 'box-shadow 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(27,22,17,0.1)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = 'none'}
              >
                <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.55rem', letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid rgba(27,22,17,0.1)', padding: '2px 6px', borderRadius: '2px' }}>
                  {r.platform}
                </div>
                <div style={{ color: '#c08a3e', fontSize: '1rem', marginBottom: '12px', letterSpacing: '2px' }}>
                  {'★'.repeat(r.stars)}
                </div>
                <p style={{ color: '#1b1611', fontSize: '0.88rem', lineHeight: 1.75, marginBottom: '1.5rem', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300 }}>
                  "{t(r.textEn, r.textId, lang)}"
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(27,22,17,0.08)', paddingTop: '10px' }}>
                  <div style={{ fontFamily: 'var(--font-body)', color: '#1b1611', fontSize: '0.82rem', fontWeight: 600 }}>{r.name}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.6rem', letterSpacing: '0.08em' }}>{r.origin}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Mini reviews grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {reviews.slice(2).map((r, i) => (
              <div key={i} style={{
                backgroundColor: '#f3ecdd',
                border: '1px solid rgba(27,22,17,0.07)',
                borderRadius: '4px',
                padding: '1.5rem',
                transition: 'box-shadow 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 18px rgba(27,22,17,0.1)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = 'none'}
              >
                <div style={{ color: '#c08a3e', fontSize: '0.8rem', marginBottom: '10px', letterSpacing: '1px' }}>
                  {'★'.repeat(r.stars)}
                </div>
                <p style={{ color: '#1b1611', fontSize: '0.82rem', lineHeight: 1.7, marginBottom: '1rem', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300 }}>
                  "{t(r.textEn, r.textId, lang)}"
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(27,22,17,0.07)', paddingTop: '8px' }}>
                  <div style={{ fontFamily: 'var(--font-body)', color: '#1b1611', fontSize: '0.75rem', fontWeight: 600 }}>{r.name}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.58rem' }}>{r.origin}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Placeholder note */}
          <div style={{ marginTop: '2rem', textAlign: 'center', fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.62rem', letterSpacing: '0.08em', border: '1px dashed rgba(27,22,17,0.2)', borderRadius: '4px', padding: '1rem' }}>
            {t(
              '✦ PLACEHOLDER — Add your real 15 Google Business / TripAdvisor reviews here manually.',
              '✦ PLACEHOLDER — Tambahkan 15 ulasan Google Bisnis / TripAdvisor asli Anda di sini secara manual.',
              lang
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
