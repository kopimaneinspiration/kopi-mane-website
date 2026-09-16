import { createServer } from 'node:http'
import { createClient } from '@supabase/supabase-js'

const port = Number(process.env.API_PORT || 8787)
const maxBodyBytes = 32_768

const products = {
  arabika: { name: 'Arabika', unitPriceIdr: 85000 },
  robusta: { name: 'Robusta', unitPriceIdr: 85000 },
  caturra: { name: 'Yellow Caturra', unitPriceIdr: 105000 },
  juria: { name: 'Juria', unitPriceIdr: 125000 },
  exploration_kit: { name: 'Flores Exploration Kit', unitPriceIdr: 200000 },
} as const

type ProductId = keyof typeof products
type Fulfillment = 'delivery' | 'pickup'

type OrderPayload = {
  productId: ProductId
  quantity: number
  customerName: string
  email: string
  phone: string
  fulfillment: Fulfillment
  address: string
  notes: string
}

const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const supabase = supabaseUrl && supabaseServiceRoleKey
  ? createClient(supabaseUrl, supabaseServiceRoleKey, { auth: { persistSession: false, autoRefreshToken: false } })
  : null

function setCorsHeaders(res: import('node:http').ServerResponse) {
  const configuredOrigin = process.env.CORS_ORIGIN || '*'
  res.setHeader('Access-Control-Allow-Origin', configuredOrigin)
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
}

function sendJson(res: import('node:http').ServerResponse, status: number, body: unknown) {
  setCorsHeaders(res)
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end(JSON.stringify(body))
}

function readBody(req: import('node:http').IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let body = ''
    req.setEncoding('utf8')
    req.on('data', chunk => {
      body += chunk
      if (Buffer.byteLength(body) > maxBodyBytes) {
        reject(new Error('PAYLOAD_TOO_LARGE'))
        req.destroy()
      }
    })
    req.on('end', () => resolve(body))
    req.on('error', reject)
  })
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function stringValue(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

function validatePayload(value: unknown): OrderPayload | null {
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

async function createOrder(payload: OrderPayload) {
  if (!supabase) throw new Error('SUPABASE_NOT_CONFIGURED')

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

const server = createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    setCorsHeaders(res)
    res.statusCode = 204
    res.end()
    return
  }

  if (req.method !== 'POST' || req.url?.split('?')[0] !== '/api/orders') {
    sendJson(res, 404, { error: 'Not found' })
    return
  }

  try {
    const rawBody = await readBody(req)
    const payload = validatePayload(JSON.parse(rawBody))
    if (!payload) {
      sendJson(res, 400, { error: 'Data order belum lengkap atau tidak valid.' })
      return
    }

    const orderId = await createOrder(payload)
    sendJson(res, 201, { orderId })
  } catch (error) {
    if (error instanceof Error && error.message === 'PAYLOAD_TOO_LARGE') {
      sendJson(res, 413, { error: 'Data order terlalu besar.' })
      return
    }

    if (error instanceof SyntaxError) {
      sendJson(res, 400, { error: 'Format data order tidak valid.' })
      return
    }

    if (error instanceof Error && error.message === 'SUPABASE_NOT_CONFIGURED') {
      sendJson(res, 503, { error: 'Layanan order belum dikonfigurasi.' })
      return
    }

    sendJson(res, 500, { error: 'Order belum dapat disimpan. Silakan coba lagi.' })
  }
})

server.listen(port, () => {
  console.log(`Order API listening on port ${port}`)
})
