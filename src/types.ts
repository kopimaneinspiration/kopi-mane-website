export type Page = 'home' | 'about' | 'products' | 'shop' | 'achievements' | 'contact'
export type Lang = 'en' | 'id'

export const t = (en: string, id: string, lang: Lang): string =>
  lang === 'en' ? en : id

export const WHATSAPP_RUTENG = '+6282157540804'
export const WHATSAPP_LBJ = '+6281315080648'
export const WHATSAPP_MSG_EN = 'Hello, I am interested in Kopi Mane Inspiration products!'
export const WHATSAPP_MSG_ID = 'Halo, saya tertarik dengan produk Kopi Mane Inspiration!'

export const waLink = (phone: string, lang: Lang) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(lang === 'en' ? WHATSAPP_MSG_EN : WHATSAPP_MSG_ID)}`
