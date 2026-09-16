export const orderProducts = [
  { id: 'arabika', nameEn: 'Arabika', nameId: 'Arabika', price: 'Rp 85.000 / 100g' },
  { id: 'robusta', nameEn: 'Robusta', nameId: 'Robusta', price: 'Rp 85.000 / 100g' },
  { id: 'caturra', nameEn: 'Yellow Caturra', nameId: 'Yellow Caturra', price: 'Rp 105.000 / 100g' },
  { id: 'juria', nameEn: 'Juria', nameId: 'Juria', price: 'Rp 125.000 / 100g' },
  { id: 'exploration_kit', nameEn: 'Flores Exploration Kit', nameId: 'Kit Eksplorasi Flores', price: 'Rp 200.000 / 200g' },
] as const

export type OrderProductId = (typeof orderProducts)[number]['id']
export type Fulfillment = 'delivery' | 'pickup'

export type CreateOrderInput = {
  productId: OrderProductId
  quantity: number
  customerName: string
  email: string
  phone: string
  fulfillment: Fulfillment
  address: string
  notes: string
}

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')

export async function createOrder(input: CreateOrderInput): Promise<{ orderId: string }> {
  const response = await fetch(`${apiBaseUrl}/api/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  })

  const result = (await response.json()) as { orderId?: string; error?: string }
  if (!response.ok || !result.orderId) {
    throw new Error(result.error || 'Order belum dapat disimpan.')
  }

  return { orderId: result.orderId }
}
