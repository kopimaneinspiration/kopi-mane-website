# Kopi Mane Website — QA Checklist untuk Figma Agent

Sumber: review source code dari 2 file export ("Complete Functional Website"). Semua temuan di bawah sudah diverifikasi langsung di kode, bukan tebakan.

---

## ✅ SUDAH BERES (konfirmasi saja)
- `src/pages/Products.tsx` sekarang sudah ada di export kedua. Sebelumnya `App.tsx` dan `Header.tsx` sudah memanggil halaman "Products" padahal filenya tidak ada — ini akan bikin build crash. Sudah tidak masalah lagi di versi terbaru.

---

## 🔴 PRIORITAS TINGGI — wajib diperbaiki sebelum live

### 1. Testimoni customer yang tidak nyata
**File:** `src/pages/Achievements.tsx`
Ada ±7 testimoni dengan nama, negara asal, kutipan, dan rating bintang 5 yang mengatasnamakan Google Business & TripAdvisor (contoh: "Zyeni – South Korea", "Markus B. – Germany", "Hideki T. – Japan", dll) — ditulis seolah nyata, TIDAK ditandai sebagai contoh/placeholder.
Anehnya, di file yang sama ada bagian lain yang secara eksplisit ditandai:
> "✦ PLACEHOLDER — Add your real 15 Google Business / TripAdvisor reviews here manually."

Ini artinya batch testimoni pertama kemungkinan besar hasil generate AI yang lolos tanpa ditandai. **Menampilkan review palsu yang mengatasnamakan platform review asli berisiko hukum/reputasi** (bisa dianggap ulasan palsu). Perlu diganti dengan review asli, atau dihapus sampai ada review asli untuk dipasang.

### 2. Metode proses kopi salah — ke-4 varietas ditulis "Natural Wash"
**File:** `src/pages/Products.tsx`
Semua 4 varietas (Arabika, Robusta, Yellow Caturra, Juria) ditulis "Natural Wash" di field `originEn`/`originId`.

**Yang benar (sudah terverifikasi dari kemasan/sticker resmi):**
| Varietas | Metode proses yang benar |
|---|---|
| Juria | Full Washed |
| Yellow Caturra | Full Washed |
| Arabika | Full Washed |
| Robusta | Natural Process |

(Catatan: ini pernah salah sebelumnya di arah sebaliknya — semua ditulis "Full Wash" karena error template sticker. Sekarang salah lagi, arahnya kebalik jadi "Natural" semua. Tolong pastikan hanya Robusta yang Natural.)

### 3. Harga & ukuran kemasan tidak sama dengan harga resmi yang sudah dikunci
**File:** `src/pages/Products.tsx` (tab Physical Coffee) dan `src/pages/Shop.tsx` (channel Etsy)

**Harga & ukuran resmi (locked):**
| Varian | Harga resmi (100g) | Catatan ukuran resmi |
|---|---|---|
| Arabika Manggarai | $19 | 100g minimum, tanpa varian ukuran lain |
| Robusta Manggarai | $19 | 100g minimum, tanpa varian ukuran lain |
| Yellow Caturra | $22 | 100g minimum, tanpa varian ukuran lain |
| Juria | $25 | 100g minimum, tanpa varian ukuran lain |
| Flores Exploration Kit | $45 | 4×50g sampler (total 200g) |

**Yang ada di web sekarang:**
| Varian | 100g di web | 250g di web | 500g di web |
|---|---|---|---|
| Arabika | $15 | $34 | $60 |
| Robusta | $15 | $34 | $60 |
| Yellow Caturra | $19 | $44 | $76 |
| Juria | $23 | $53 | $92 |

Masalah ganda di sini:
- Harga 100g semuanya lebih rendah dari harga resmi yang sudah dikunci.
- Varian ukuran 250g/500g sendiri tidak sesuai rencana resmi — produk individual (bukan Exploration Kit) seharusnya **hanya 100g**, dengan batas kuantitas maksimal 3 per pesanan (supaya tetap di bawah bracket berat pengiriman 0,5kg) — bukan menjual ukuran lebih besar.

### 4. Klaim usia pohon Juria yang seharusnya dihindari
**File:** `src/pages/Products.tsx` dan `src/pages/Home.tsx`
Tertulis: *"Ancient Typica Arabica from heritage trees 50+ years old"* / *"50+ year heritage trees"*.

Sesuai kebijakan pesan resmi: **hindari klaim usia pohon spesifik** (karena pohon kemungkinan sudah pernah diremajakan/replanted). Gunakan kalimat: *"grown from heritage seeds first introduced in 1937"* — tanpa menyebut usia pohon.

---

## 🟡 PRIORITAS SEDANG

### 5. Catatan rasa (tasting notes) Juria melenceng dari sumber resmi
**File:** `src/pages/Products.tsx`
Tertulis: *"Floral · Chocolate · Tobacco · Nutty · Herbs"*
Sumber resmi (dari sticker kemasan fisik — source of truth): **Floral, Chocolate, Tobacco, Spicy**. "Nutty" dan "Herbs" tidak ada di daftar resmi — mohon dihapus/diganti "Spicy".

### 6. URL Etsy masih placeholder
**File:** `src/pages/Shop.tsx`
`url: '#REPLACE-WITH-ETSY-URL'` — perlu diganti ke URL toko Etsy yang sudah live (etsy.com/shop/FloresKomodoStore).

### 7. Nama pendiri belum konsisten di seluruh dokumen
**File:** `src/pages/About.tsx` menyebut *"founded by Bony Oldham Romas"*, sementara `src/pages/Products.tsx` (rencana ebook) memisahkan dua figur: *"Kopi & Bony: The Story of Kopi Mane"* (founder legacy) dan *"Mompreneurship: Wenti and The World of Coffee"* (owner legacy) — seolah dua peran berbeda.
Perlu dikonfirmasi ke pemilik brand: siapa yang berperan sebagai founder vs owner/operator, lalu disamakan penulisannya (nama lengkap + ejaan yang benar — "Oldham" vs "Oldam") di semua halaman.

### 8. Nomor WhatsApp perlu dikonfirmasi masih aktif
**File:** `src/pages/Contact.tsx`, `src/types.ts`
- Ruteng: +62 821 5754 0804
- Labuan Bajo: +62 813 1508 0648
Mohon dikonfirmasi kedua nomor ini masih aktif dan benar sebelum publish (belum pernah diverifikasi di catatan sebelumnya).

---

## ✅ SUDAH DICEK DAN COCOK (tidak perlu diubah)
- Alamat Ruteng "Jl. Yos Sudarso No. 12" — cocok dengan data yang sudah ada.
- Klaim penghargaan (AVPA Paris 2018, GI Certificate Arabika 2018 & Robusta 2019, G20 Official Coffee Labuan Bajo 2022, World Economic Forum Davos 2020) — semua sudah sesuai, tidak ada yang salah kutip (termasuk tidak ada klaim salah soal ASEAN Summit).
- Exploration Kit ditulis "200g" di channel Etsy — ini sudah benar (4×50g = 200g).

---

**Catatan:** Belum ada perubahan yang saya lakukan langsung ke file — daftar ini disiapkan untuk dikirim ke agent Figma agar diperbaiki di sana. Setelah direvisi, upload lagi hasil export-nya ke sini untuk saya cek ulang.