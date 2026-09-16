import type { Page, Lang } from '../types'
import { t } from '../types'

interface Props {
  navigate: (p: Page) => void
  lang: Lang
}

export default function About({ navigate, lang }: Props) {
  return (
    <div>
      {/* ── PAGE HERO ────────────────────────────────────── */}
      <section style={{ backgroundColor: '#1b1611', padding: '5rem 1.5rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?w=1920&h=600&fit=crop&auto=format"
          alt={t('Coffee plantation in Flores', 'Perkebunan kopi di Flores', lang)}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }}
        />
        <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            {t('About · Tentang Kami', 'Tentang · About Us', lang)}
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', color: '#f3ecdd', fontSize: 'clamp(2.2rem, 6vw, 4rem)', fontWeight: 700, lineHeight: 1.1, maxWidth: '700px' }}>
            {t('The House of Flores Coffee', 'Rumah Kopi Flores', lang)}
          </h1>
          <p style={{ color: '#b7ad9c', marginTop: '1rem', fontSize: '1rem', maxWidth: '560px', lineHeight: 1.7, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300 }}>
            {t(
              'A story rooted in the highlands of Manggarai — built by farmers, earned through craft, recognised by the world.',
              'Sebuah kisah yang berakar di dataran tinggi Manggarai — dibangun oleh petani, diraih melalui keahlian, diakui oleh dunia.',
              lang
            )}
          </p>
        </div>
      </section>

      {/* ── FOUNDING STORY ───────────────────────────────── */}
      <section style={{ backgroundColor: '#f3ecdd', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          {/* Image placeholder */}
          <div style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', aspectRatio: '4/5' }}>
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=1000&fit=crop&auto=format"
              alt={t('Kopi Mane café interior', 'Interior kafe Kopi Mane', lang)}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', top: '12px', right: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: '#fff', background: 'rgba(0,0,0,0.55)', padding: '3px 8px', borderRadius: '2px', letterSpacing: '0.08em' }}>
              PLACEHOLDER — REPLACE WITH YOUR PHOTO
            </div>
            {/* Decorative gold frame */}
            <div style={{ position: 'absolute', inset: '12px', border: '1px solid rgba(192,138,62,0.4)', borderRadius: '2px', pointerEvents: 'none' }} />
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              {t('Our Founding Story', 'Kisah Pendirian Kami', lang)}
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: '#1b1611', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: '1.5rem' }}>
              {t('Born in Ruteng,', 'Lahir di Ruteng,', lang)}{' '}
              <span style={{ color: '#4f2036', fontStyle: 'italic' }}>{t('2014', '2014', lang)}</span>
            </h2>
            <div style={{ color: '#4a4038', lineHeight: 1.8, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>
                {t(
                  'Kopi Mane Inspiration was founded by Bony Oldham Romas in Ruteng, Manggarai — the heart of Flores coffee country. What began as a roastery in the highlands soon grew into a café and a movement to connect Manggarai\'s smallholder farmers directly to coffee lovers around the world.',
                  'Kopi Mane Inspiration didirikan oleh Bony Oldham Romas di Ruteng, Manggarai — jantung daerah kopi Flores. Yang dimulai sebagai roasteri di dataran tinggi segera berkembang menjadi kafe dan gerakan untuk menghubungkan petani kecil Manggarai langsung ke pecinta kopi di seluruh dunia.',
                  lang
                )}
              </p>
              <p>
                {t(
                  'In November 2015, we opened our Labuan Bajo location — now operated by Yuliana Wenti Permata Romas — welcoming international tourists and travellers visiting the Komodo National Park gateway.',
                  'Pada November 2015, kami membuka lokasi Labuan Bajo — kini dioperasikan oleh Yuliana Wenti Permata Romas — menyambut wisatawan internasional dan pelancong yang mengunjungi gerbang Taman Nasional Komodo.',
                  lang
                )}
              </p>
              <p>
                {t(
                  'Both locations carry the same promise: every cup is traceable to the Colol Highlands, processed naturally at 1,200 metres above sea level, roasted in Ruteng, and delivered with the story of the farmer who grew it.',
                  'Kedua lokasi membawa janji yang sama: setiap cangkir dapat ditelusuri ke Dataran Tinggi Colol, diproses secara alami pada ketinggian 1.200 meter di atas permukaan laut, disangrai di Ruteng, dan dikirimkan bersama kisah petani yang menanamnya.',
                  lang
                )}
              </p>
            </div>

            {/* Founders */}
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              {[
                { name: 'Bony Oldham Romas', role: t('Founder · Ruteng', 'Pendiri · Ruteng', lang) },
                { name: 'Yuliana Wenti Permata Romas', role: t('Owner · Labuan Bajo', 'Pemilik · Labuan Bajo', lang) },
              ].map(p => (
                <div key={p.name} style={{ borderLeft: '2px solid #c08a3e', paddingLeft: '12px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', color: '#1b1611', fontSize: '0.9rem', fontWeight: 600 }}>{p.name}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.58rem', letterSpacing: '0.1em', marginTop: '2px' }}>{p.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ASNIKOM SOURCING ─────────────────────────────── */}
      <section style={{ backgroundColor: '#241d17', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              {t('From Farmer to Cup', 'Dari Petani ke Cangkir', lang)}
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: '#f3ecdd', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: '1.5rem' }}>
              {t('ASNIKOM — The Farmers Behind Every Cup', 'ASNIKOM — Petani di Balik Setiap Cangkir', lang)}
            </h2>
            <div style={{ color: '#b7ad9c', lineHeight: 1.8, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>
                {t(
                  'Our coffee is sourced exclusively through ASNIKOM — the Manggarai Coffee Farmers Association. This partnership ensures that every varietal you taste is traceable to a specific community of smallholder farmers in the Colol Highlands.',
                  'Kopi kami bersumber secara eksklusif melalui ASNIKOM — Asosiasi Petani Kopi Manggarai. Kemitraan ini memastikan bahwa setiap varietas yang Anda cicipi dapat ditelusuri ke komunitas petani kecil tertentu di Dataran Tinggi Colol.',
                  lang
                )}
              </p>
              <p>
                {t(
                  'The Colol Highlands sit at 1,200 metres above sea level. This elevation, combined with the equatorial climate and rich volcanic soil of Flores, produces coffees of exceptional clarity and character. All processing uses the Natural Wash method — preserving the terroir in every sip.',
                  'Dataran Tinggi Colol berada pada ketinggian 1.200 meter di atas permukaan laut. Ketinggian ini, dikombinasikan dengan iklim ekuatorial dan tanah vulkanik Flores yang kaya, menghasilkan kopi dengan kejernihan dan karakter yang luar biasa. Semua pemrosesan menggunakan metode Natural Wash — menjaga terroir di setiap tegukan.',
                  lang
                )}
              </p>
            </div>

            {/* Specs */}
            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { label: t('Origin', 'Asal', lang), val: t('Colol Highlands, Manggarai', 'Dataran Tinggi Colol, Manggarai', lang) },
                { label: t('Altitude', 'Ketinggian', lang), val: '1,200 MASL' },
                { label: t('Process', 'Proses', lang), val: t('Natural Wash', 'Natural Wash', lang) },
                { label: t('Partner', 'Mitra', lang), val: 'ASNIKOM' },
              ].map(s => (
                <div key={s.label} style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '3px', padding: '1rem' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>{s.label}</div>
                  <div style={{ fontFamily: 'var(--font-body)', color: '#f3ecdd', fontSize: '0.82rem', fontWeight: 500 }}>{s.val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div style={{ borderRadius: '4px', overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1504916010003-df0f1b9cb044?w=800&h=600&fit=crop&auto=format"
              alt={t('Coffee farmers in the highlands', 'Petani kopi di dataran tinggi', lang)}
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.75 }}
            />
            <div style={{ position: 'absolute', top: '12px', right: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: '#fff', background: 'rgba(0,0,0,0.55)', padding: '3px 8px', borderRadius: '2px', letterSpacing: '0.08em' }}>
              PLACEHOLDER — REPLACE WITH YOUR FARM PHOTO
            </div>
          </div>
        </div>
      </section>

      {/* ── GI CERTIFICATIONS ────────────────────────────── */}
      <section style={{ backgroundColor: '#f3ecdd', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              {t('Certified Excellence', 'Keunggulan Bersertifikat', lang)}
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: '#1b1611', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700 }}>
              {t('Geographical Indication Certified', 'Bersertifikat Indikasi Geografis', lang)}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                year: '2018',
                type: 'Arabika',
                color: '#c9743a',
                descEn: 'Our Arabika received official Geographical Indication certification from the Ministry of Law & Human Rights of Indonesia — confirming the protected origin status of Manggarai Arabica coffee.',
                descId: 'Arabika kami mendapat sertifikasi Indikasi Geografis resmi dari Kementerian Hukum & HAM Indonesia — mengkonfirmasi status asal terlindungi kopi Arabika Manggarai.',
              },
              {
                year: '2019',
                type: 'Robusta',
                color: '#2e6e68',
                descEn: 'Following Arabika\'s recognition, our Robusta varietal was also certified under the GI framework — making Kopi Mane one of a select few producers in Indonesia with dual GI certification.',
                descId: 'Mengikuti pengakuan Arabika, varietas Robusta kami juga mendapat sertifikasi di bawah kerangka GI — menjadikan Kopi Mane salah satu dari sedikit produsen di Indonesia dengan sertifikasi GI ganda.',
              },
              {
                year: '2015–2022',
                type: t('Int\'l Competitions', 'Kompetisi Internasional', lang),
                color: '#4f2036',
                descEn: 'AVPA Medal (Paris, 2018), Best Robusta at Indonesia Specialty Coffee Contest (2015), G20 Official Coffee (2022), and guest hospitality at the World Economic Forum in Davos (2020).',
                descId: 'Medali AVPA (Paris, 2018), Robusta Terbaik di Kontes Kopi Spesialti Indonesia (2015), Kopi Resmi G20 (2022), dan perjamuan tamu di World Economic Forum di Davos (2020).',
              },
            ].map(cert => (
              <div key={cert.type} style={{
                border: `1px solid ${cert.color}40`,
                borderTop: `3px solid ${cert.color}`,
                borderRadius: '4px',
                padding: '2rem',
                backgroundColor: '#fff',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', color: cert.color, fontSize: '2rem', fontWeight: 700, marginBottom: '4px' }}>{cert.year}</div>
                <div style={{ fontFamily: 'var(--font-mono)', color: '#8a8072', fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  {t('GI Certified', 'Bersertifikat GI', lang)} — {cert.type}
                </div>
                <p style={{ color: '#4a4038', fontSize: '0.85rem', lineHeight: 1.75 }}>
                  {t(cert.descEn, cert.descId, lang)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────────── */}
      <section style={{ backgroundColor: '#4f2036', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-display)', color: '#c08a3e', fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.6, marginBottom: '2rem' }}>
            {t(
              '"We do not just sell coffee. We sell a place, a people, and a process — all of which exist only here, in Manggarai."',
              '"Kami tidak hanya menjual kopi. Kami menjual sebuah tempat, sebuah komunitas, dan sebuah proses — yang semuanya hanya ada di sini, di Manggarai."',
              lang
            )}
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', color: 'rgba(243,236,221,0.5)', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            — Bony Oldham Romas, {t('Founder', 'Pendiri', lang)}
          </div>
          <div style={{ marginTop: '3rem' }}>
            <button
              onClick={() => navigate('products')}
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
                padding: '13px 30px',
                borderRadius: '3px',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.target as HTMLElement).style.background = '#a07030'}
              onMouseLeave={e => (e.target as HTMLElement).style.background = '#c08a3e'}
            >
              {t('Discover Our Varietals', 'Temukan Varietas Kami', lang)}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
