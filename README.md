# Website Youmna Print — Percetakan Online (Versi Modern)

Website percetakan multi-halaman berbasis **HTML + CSS + JS murni** (tanpa build tool), terinspirasi model bikinkalender.com tetapi dengan desain yang lebih modern: motif CMYK khas percetakan, aksen magenta, tipografi Plus Jakarta Sans, dan CTA WhatsApp di setiap halaman.

## Cara Menjalankan

1. Buka folder ini, lalu klik ganda `index.html` — atau jalankan server lokal (disarankan, agar tidak ada masalah loading aset):
   - Windows PowerShell:
     ```powershell
     cd C:\Users\Ibnu\html
     python -m http.server 8000
     ```
   - Buka `http://localhost:8000` di browser.
2. Tanpa internet, teks dan layout tetap jalan; hanya ikon (Tabler via CDN) dan font (Google Fonts) yang butuh koneksi.

## Struktur Halaman

| File | Isi |
|---|---|
| `index.html` | Beranda: hero, produk unggulan, harga promo, keunggulan, proses, testimoni, FAQ, CTA |
| `kalender.html` | Cetak Kalender (halaman andalan: dinding, meja, poster, kerja + tabel harga) |
| `brosur.html` | Cetak Brosur & Flyer |
| `stiker.html` | Cetak Stiker & Label |
| `banner.html` | Cetak Banner, Spanduk & Roll Banner |
| `kartu-nama.html` | Kartu Nama, Undangan, Sertifikat, Kop Surat & Amplop |
| `buku-yasin.html` | Cetak Buku Yasin |
| `packaging.html` | Paperbag, Packaging & Merchandise |
| `harga.html` | Daftar harga lengkap semua produk |
| `cara-pesan.html` | Alur pemesanan + FAQ |
| `kontak.html` | Kontak + form yang membuka WhatsApp |
| `blog.html` | Blog: index artikel & panduan percetakan |
| `artikel/cetak-kalender-murah.html` | Artikel SEO "cetak kalender murah" (≥1000 kata) |
| `artikel/cetak-brosur-murah.html` | Artikel SEO "cetak brosur murah" (≥1000 kata) |
| `artikel/percetakan-online-murah.html` | Artikel SEO "percetakan online/percetakan murah" (≥1000 kata) |

Aset: `css/style.css` (design system), `js/main.js` (interaksi), `img/*.svg` (mockup produk), `data/harga.js` (harga terpusat).

## SISTEM HARGA TERPUSAT (penting)

Semua harga di seluruh halaman dibaca dari **satu file: `data/harga.js`**.

- Harga tampil lewat elemen `<span data-price="kunci">...` di HTML.
- Ubah nilainya hanya di `data/harga.js` → semua halaman otomatis ikut.
- `js/main.js` memuat file ini secara otomatis; jika file gagal dimuat, angka lama di HTML tetap tampil (fallback aman).
- Nilai saat ini adalah **estimasi pasar Surabaya** — ganti dengan daftar harga asli Youmna Print. Setelah mengganti, silakan hapus komentar estimasi di header file.

## PENTING — Yang Harus Anda Ganti

Semua isi di bawah ini **contoh/placeholder** dan wajib diganti dengan data asli sebelum dipakai live:

1. **Harga** — buka `data/harga.js`, ganti semua nilai dengan daftar harga asli Youmna Print. Cari marker `TODO` di HTML untuk melihat bagian yang masih contoh.
2. **Gambar produk** — `img/*.svg` adalah mockup ilustrasi. Ganti dengan **foto produk asli** (misal foto hasil cetak kalender/brosur yang sudah ada di Instagram @youmnaprint). Rekomendasi: 800×600 px per produk, format JPG/WebP, lalu ubah `src` di HTML. File SVG bisa dihapus setelah diganti.
3. **Testimoni** — di `index.html` ada 3 testimoni contoh (ditandai komentar TODO). Ganti dengan review pelanggan asli.
4. **Alamat lengkap** — footer/kontak baru menampilkan "Surabaya, Jawa Timur". Tambahkan alamat toko yang lengkap jika diperlukan.
5. **Jam operasional & info bank** — sesuaikan dengan yang sebenarnya.
6. **Nomor WhatsApp** — sudah terisi `6282110757247` (0821 1075 7247 dari Instagram publik). Jika ada nomor khusus yang lebih aktif, ganti di semua file (cari `wa.me/6282110757247`).

## SEO

- Meta title + description unik tiap halaman (description ≤ 155 karakter dengan CTA).
- Semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`).
- Schema `LocalBusiness` (JSON-LD) di `index.html` dan `BlogPosting` di tiap artikel.
- Open Graph untuk media sosial.
- Struktur heading berurutan: satu `h1` per halaman.
- Artikel ≥1000 kata dengan keyword utama di judul/H1/H2/intro, internal link silang antar halaman produk & blog (strategi content cluster untuk "cetak kalender murah", "cetak brosur murah", "percetakan murah").

## Deploy

Upload semua folder (`index.html`, `css/`, `js/`, `img/`) ke hosting statis mana pun:
- **Netlify / Vercel** — drag & drop folder ini, gratis.
- **Hosting cPanel** — upload ke folder `public_html`.
- Nama folder tidak harus `html`; sesuaikan dengan struktur hosting.

## Kustomisasi Cepat

- **Warna aksen:** ubah variabel `--accent` (dan `--accent-strong`) di bagian atas `css/style.css`. Palet CMYK motif ada di `--cyan` dan `--yellow`.
- **Kontak di semua halaman:** edit header/footer di setiap file HTML (atau nanti pindahkan ke template WordPress bila migrasi).
- **Pesan WhatsApp per produk:** setiap tombol WA memakai teks pra-terisi; ubah bagian `?text=...` pada `href` jika perlu.
