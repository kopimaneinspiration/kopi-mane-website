import { createClient } from '@supabase/supabase-js'

const products = {
  arabika: { name: 'Arabika', unitPriceIdr: 85000 },
  robusta: { name: 'Robusta', unitPriceIdr: 85000 },
  caturra: { name: 'Yellow Caturra', unitPriceIdr: 105000 },
  juria: { name: 'Juria', unitPriceIdr: 125000 },
  exploration_kit: { name: 'Flores Exploration Kit', unitPriceIdr: 200000 },
} as const

type ProductId = keyof typeof products
type Fulfillment = 'delivery' | 'pickup'

export type OrderPayload = {
  productId: ProductId
  quantity: number
  customerName: string
  email: string
  phone: string
  fulfillment: Fulfillment
  address: string
  notes: string
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function stringValue(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

export function validateOrderPayload(value: unknown): OrderPayload | null {
  if (!isRecord(value)) return null

  const productId = stringValue(value.productId) as ProductId
  const quantity = value.quantity
  const fulfillment = stringValue(value.fulfillment) as Fulfillment
  const customerName = stringValue(value.customerName)
  const email = stringValue(value.email).toLowerCase()
  const phone = stringValue(value.phone)
  const address = stringValue(value.address)
  const notes = stringValue(value.notes)

  if (!(productId in products)) return null
  if (typeof quantity !== 'number' || !Number.isInteger(quantity) || quantity < 1 || quantity > 3) return null
  if (!['delivery', 'pickup'].includes(fulfillment)) return null
  if (customerName.length < 2 || customerName.length > 100) return null
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) return null
  if (phone.length < 8 || phone.length > 30) return null
  if (fulfillment === 'delivery' && (address.length < 10 || address.length > 500)) return null
  if (notes.length > 500) return null

  return { productId, quantity, customerName, email, phone, fulfillment, address, notes }
}

export async function saveOrder(payload: OrderPayload): Promise<string> {
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error('SUPABASE_NOT_CONFIGURED')
  }

  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
  const product = products[payload.productId]
  const { data, error } = await supabase
    .from('orders')
    .insert({
      product_id: payload.productId,
      product_name: product.name,
      quantity: payload.quantity,
      unit_price_idr: product.unitPriceIdr,
      total_price_idr: product.unitPriceIdr * payload.quantity,
      customer_name: payload.customerName,
      email: payload.email,
      phone: payload.phone,
      fulfillment: payload.fulfillment,
      address: payload.address || null,
      notes: payload.notes || null,
    })
    .select('id')
    .single()

  if (error) {
    console.error('Supabase order insert failed:', error.message)
    throw new Error('ORDER_SAVE_FAILED')
  }

  return data.id
}
