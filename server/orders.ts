import { createServer, type IncomingMessage, type ServerResponse } from 'node:http'
import { saveOrder, validateOrderPayload } from './orderService'

const port = Number(process.env.API_PORT || 8787)
const maxBodyBytes = 32_768

function setCorsHeaders(res: ServerResponse) {
  const configuredOrigin = process.env.CORS_ORIGIN || '*'
  res.setHeader('Access-Control-Allow-Origin', configuredOrigin)
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
}

function sendJson(res: ServerResponse, status: number, body: unknown) {
  setCorsHeaders(res)
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end(JSON.stringify(body))
}

function readBody(req: IncomingMessage): Promise<string> {
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
    const payload = validateOrderPayload(JSON.parse(rawBody))
    if (!payload) {
      sendJson(res, 400, { error: 'Data order belum lengkap atau tidak valid.' })
      return
    }

    const orderId = await saveOrder(payload)
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
