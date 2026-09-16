import { useState, type FormEvent } from 'react'
import { t, type Lang } from '../types'
import { createOrder, orderProducts, type Fulfillment, type OrderProductId } from '../lib/orderApi'

interface Props {
  lang: Lang
}

type OrderFormState = {
  productId: OrderProductId
  quantity: string
  customerName: string
  email: string
  phone: string
  fulfillment: Fulfillment
  address: string
  notes: string
}

const initialForm: OrderFormState = {
  productId: 'arabika',
  quantity: '1',
  customerName: '',
  email: '',
  phone: '',
  fulfillment: 'delivery',
  address: '',
  notes: '',
}

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: '3px',
  border: '1px solid rgba(27,22,17,0.15)',
  fontFamily: 'var(--font-body)',
  fontSize: '0.85rem',
  color: '#1b1611',
  backgroundColor: '#faf7f2',
  outline: 'none',
}

export default function OrderForm({ lang }: Props) {
  const [form, setForm] = useState<OrderFormState>(initialForm)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const updateField = (field: keyof OrderFormState, value: string) => {
    setForm(current => ({ ...current, [field]: value }))
    if (status !== 'idle') {
      setStatus('idle')
      setMessage('')
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitting')
    setMessage('')

    try {
      const result = await createOrder({ ...form, quantity: Number(form.quantity) })
      setStatus('success')
      setMessage(result.orderId)
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : t('Please try again.', 'Silakan coba lagi.', lang))
    }
  }

  if (status === 'success') {
    return (
      <section style={{ backgroundColor: '#241d17', borderRadius: '4px', padding: '2.5rem', marginBottom: '3rem', textAlign: 'center', border: '1px solid rgba(192,138,62,0.2)' }} aria-live="polite">
        <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>☕</div>
        <h2 style={{ fontFamily: 'var(--font-display)', color: '#f3ecdd', fontSize: '1.6rem', marginBottom: '0.75rem' }}>
          {t('Order received', 'Pesanan diterima', lang)}
        </h2>
        <p style={{ color: '#b7ad9c', fontSize: '0.85rem', lineHeight: 1.7 }}>
          {t('Thank you. Our team will contact you shortly to confirm shipping and payment.', 'Terima kasih. Tim kami akan segera menghubungi Anda untuk mengonfirmasi pengiriman dan pembayaran.', lang)}
        </p>
        <p style={{ color: '#c08a3e', fontFamily: 'var(--font-mono)', fontSize: '0.62rem', marginTop: '1rem', wordBreak: 'break-all' }}>
          {t('Order reference', 'Referensi pesanan', lang)}: {message}
        </p>
        <button
          type="button"
          onClick={() => { setForm(initialForm); setStatus('idle'); setMessage('') }}
          style={{ marginTop: '1.5rem', background: '#c08a3e', color: '#1b1611', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '11px 20px', borderRadius: '3px' }}
        >
          {t('Place another order', 'Buat pesanan lain', lang)}
        </button>
      </section>
    )
  }

  return (
    <section style={{ backgroundColor: '#241d17', borderRadius: '4px', padding: '2.5rem', marginBottom: '3rem', border: '1px solid rgba(192,138,62,0.2)' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--font-mono)', color: '#c08a3e', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          {t('Direct order form', 'Formulir pesanan langsung', lang)}
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', color: '#f3ecdd', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', marginBottom: '0.75rem' }}>
          {t('Order from Kopi Mane', 'Pesan dari Kopi Mane', lang)}
        </h2>
        <p style={{ color: '#b7ad9c', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
          {t('Submit your order here. We will contact you to confirm delivery cost and payment.', 'Kirim pesanan Anda di sini. Kami akan menghubungi Anda untuk mengonfirmasi biaya pengiriman dan pembayaran.', lang)}
        </p>

        {status === 'error' && (
          <div role="alert" style={{ color: '#f3ecdd', backgroundColor: 'rgba(196,69,46,0.22)', border: '1px solid rgba(196,69,46,0.5)', borderRadius: '3px', padding: '10px 12px', marginBottom: '1rem', fontSize: '0.8rem' }}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <label style={{ color: '#f3ecdd', fontSize: '0.78rem', fontWeight: 600 }}>
              {t('Product', 'Produk', lang)} <span style={{ color: '#c4452e' }}>*</span>
              <select value={form.productId} onChange={event => updateField('productId', event.target.value)} style={{ ...inputStyle, marginTop: '6px' }}>
                {orderProducts.map(product => (
                  <option key={product.id} value={product.id}>
                    {t(product.nameEn, product.nameId, lang)} — {product.price}
                  </option>
                ))}
              </select>
            </label>
            <label style={{ color: '#f3ecdd', fontSize: '0.78rem', fontWeight: 600 }}>
              {t('Quantity (max 3)', 'Jumlah (maks. 3)', lang)} <span style={{ color: '#c4452e' }}>*</span>
              <input type="number" min="1" max="3" required value={form.quantity} onChange={event => updateField('quantity', event.target.value)} style={{ ...inputStyle, marginTop: '6px' }} />
            </label>
            <label style={{ color: '#f3ecdd', fontSize: '0.78rem', fontWeight: 600 }}>
              {t('Full name', 'Nama lengkap', lang)} <span style={{ color: '#c4452e' }}>*</span>
              <input type="text" minLength={2} maxLength={100} required value={form.customerName} onChange={event => updateField('customerName', event.target.value)} style={{ ...inputStyle, marginTop: '6px' }} />
            </label>
            <label style={{ color: '#f3ecdd', fontSize: '0.78rem', fontWeight: 600 }}>
              Email <span style={{ color: '#c4452e' }}>*</span>
              <input type="email" maxLength={254} required value={form.email} onChange={event => updateField('email', event.target.value)} style={{ ...inputStyle, marginTop: '6px' }} />
            </label>
            <label style={{ color: '#f3ecdd', fontSize: '0.78rem', fontWeight: 600 }}>
              {t('Phone / WhatsApp', 'Telepon / WhatsApp', lang)} <span style={{ color: '#c4452e' }}>*</span>
              <input type="tel" minLength={8} maxLength={30} required value={form.phone} onChange={event => updateField('phone', event.target.value)} style={{ ...inputStyle, marginTop: '6px' }} />
            </label>
            <label style={{ color: '#f3ecdd', fontSize: '0.78rem', fontWeight: 600 }}>
              {t('Fulfillment', 'Cara menerima', lang)} <span style={{ color: '#c4452e' }}>*</span>
              <select value={form.fulfillment} onChange={event => updateField('fulfillment', event.target.value)} style={{ ...inputStyle, marginTop: '6px' }}>
                <option value="delivery">{t('Delivery', 'Dikirim', lang)}</option>
                <option value="pickup">{t('Pickup in Labuan Bajo', 'Ambil di Labuan Bajo', lang)}</option>
              </select>
            </label>
          </div>

          {form.fulfillment === 'delivery' && (
            <label style={{ display: 'block', color: '#f3ecdd', fontSize: '0.78rem', fontWeight: 600, marginTop: '1rem' }}>
              {t('Delivery address', 'Alamat pengiriman', lang)} <span style={{ color: '#c4452e' }}>*</span>
              <textarea required minLength={10} maxLength={500} rows={3} value={form.address} onChange={event => updateField('address', event.target.value)} style={{ ...inputStyle, marginTop: '6px', resize: 'vertical' }} />
            </label>
          )}

          <label style={{ display: 'block', color: '#f3ecdd', fontSize: '0.78rem', fontWeight: 600, marginTop: '1rem' }}>
            {t('Notes (optional)', 'Catatan (opsional)', lang)}
            <textarea maxLength={500} rows={3} value={form.notes} onChange={event => updateField('notes', event.target.value)} placeholder={t('Grind preference or other requests', 'Pilihan gilingan atau permintaan lain', lang)} style={{ ...inputStyle, marginTop: '6px', resize: 'vertical' }} />
          </label>

          <button type="submit" disabled={status === 'submitting'} style={{ width: '100%', marginTop: '1.5rem', background: status === 'submitting' ? '#8a8072' : '#c08a3e', color: '#1b1611', border: 'none', cursor: status === 'submitting' ? 'wait' : 'pointer', fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '13px', borderRadius: '3px' }}>
            {status === 'submitting' ? t('Saving order...', 'Menyimpan pesanan...', lang) : t('Submit order', 'Kirim pesanan', lang)}
          </button>
        </form>
      </div>
    </section>
  )
}
