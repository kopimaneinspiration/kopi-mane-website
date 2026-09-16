import { saveOrder, validateOrderPayload } from '../../server/orderService'

const maxBodyBytes = 32_768

function corsHeaders(): HeadersInit {
  return {
    'Access-Control-Allow-Origin': process.env.CORS_ORIGIN || '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  }
}

function jsonResponse(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(), 'Content-Type': 'application/json; charset=utf-8' },
  })
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders() })
  }

  if (request.method !== 'POST') {
    return jsonResponse(404, { error: 'Not found' })
  }

  try {
    const rawBody = await request.text()
    if (new TextEncoder().encode(rawBody).byteLength > maxBodyBytes) {
      return jsonResponse(413, { error: 'Data order terlalu besar.' })
    }

    const payload = validateOrderPayload(JSON.parse(rawBody))
    if (!payload) {
      return jsonResponse(400, { error: 'Data order belum lengkap atau tidak valid.' })
    }

    const orderId = await saveOrder(payload)
    return jsonResponse(201, { orderId })
  } catch (error) {
    if (error instanceof SyntaxError) {
      return jsonResponse(400, { error: 'Format data order tidak valid.' })
    }

    if (error instanceof Error && error.message === 'SUPABASE_NOT_CONFIGURED') {
      return jsonResponse(503, { error: 'Layanan order belum dikonfigurasi.' })
    }

    return jsonResponse(500, { error: 'Order belum dapat disimpan. Silakan coba lagi.' })
  }
}
