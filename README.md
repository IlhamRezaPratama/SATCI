# SATCI — Company Profile

Website company profile untuk **PT Satu Teknologi Cipta (SATCI)**, sebuah bisnis yang menyediakan produk casing smartphone custom. Website ini dibuat sebagai tugas mata kuliah **Bisnis Informatika** untuk memperkenalkan profil perusahaan, layanan, produk, struktur organisasi, dan mitra bisnis secara digital.

## Deskripsi Singkat

SATCI menggabungkan kreativitas dan teknologi untuk menyediakan casing HP yang dapat dipersonalisasi. Pengunjung dapat melihat informasi perusahaan, mempelajari layanan yang tersedia, memilih spesifikasi casing, mengunggah desain, dan mengirim detail pesanan langsung ke admin melalui WhatsApp.

## Fitur Website

- Landing page dengan slogan dan identitas visual SATCI.
- Halaman tentang perusahaan, visi, dan misi.
- Katalog custom case dengan pilihan:
  - Merek smartphone.
  - Tipe atau model smartphone.
  - Jenis case dan harga.
  - Upload desain JPG/PNG dengan batas ukuran 5 MB.
  - Jumlah pesanan dan catatan tambahan.
- Ringkasan pesanan dan perhitungan total harga secara otomatis.
- Checkout melalui WhatsApp dengan format pesan yang sudah disiapkan.
- Section layanan dan keunggulan produk.
- Struktur organisasi interaktif; klik kartu anggota untuk melihat kompetensinya.
- Informasi mitra dan kolaborator.
- Navigasi responsif untuk perangkat desktop dan mobile.
- Animasi reveal saat konten masuk ke area tampilan.
- Tombol kembali ke bagian paling atas halaman.
- Informasi kontak, alamat kantor, dan peta Google Maps.

## Teknologi yang Digunakan

- **HTML5** — struktur dan konten halaman.
- **CSS3** — layout, responsive design, warna, animasi, dan tampilan komponen.
- **JavaScript Vanilla** — navigasi, customizer produk, validasi upload, kalkulasi harga, dan pembuatan link WhatsApp.
- **Google Fonts** — font Plus Jakarta Sans dan Space Grotesk.
- **Vercel** — konfigurasi deployment dan caching aset statis.

Website ini tidak membutuhkan framework maupun instalasi package manager karena seluruh fungsionalitas dijalankan menggunakan HTML, CSS, dan JavaScript murni.

## Struktur Folder

```text
SATCI/
├── index.html                      # Halaman utama website
├── style.css                       # Style dan responsive layout
├── app.js                          # Logika interaktif website
├── vercel.json                     # Konfigurasi deployment Vercel
├── logo-satci.svg                  # Logo SATCI
├── logosatcifontputihremovebg.png  # Logo untuk hero section
├── casehpcontoh.png                # Gambar contoh produk
├── vektorcasehp.png                # Ilustrasi produk
├── foto-*.png                      # Foto anggota struktur organisasi
├── samsung.webp                    # Logo mitra Samsung
├── erafone.webp                    # Logo mitra Erafone
├── infinix.webp                    # Logo mitra Infinix
├── oppo.webp                       # Logo mitra Oppo
├── vivo.webp                       # Logo mitra Vivo
└── README.md                       # Dokumentasi proyek
```

## Cara Menjalankan Secara Lokal

Karena proyek ini adalah website statis, halaman dapat dibuka langsung melalui browser:

1. Buka folder proyek.
2. Klik dua kali file `index.html`.

Untuk pengalaman yang lebih baik, gunakan local server. Contoh menggunakan extension **Live Server** di Visual Studio Code:

1. Buka folder proyek di Visual Studio Code.
2. Install extension **Live Server**.
3. Klik kanan file `index.html`.
4. Pilih **Open with Live Server**.

## Konfigurasi Checkout WhatsApp

Nomor WhatsApp tujuan checkout diatur pada file [`app.js`](./app.js), di bagian konfigurasi:

```javascript
var WA_NUMBER = '6289677855195';
```

Gunakan format nomor internasional tanpa tanda `+` atau spasi. Contoh:

```javascript
var WA_NUMBER = '6281234567890';
```

Data merek, tipe HP, jenis case, dan harga juga dapat diubah pada objek `DATA` di file [`app.js`](./app.js).

## Alur Pemesanan

1. Pengunjung memilih merek HP.
2. Pengunjung memilih tipe HP.
3. Pengunjung memilih jenis case.
4. Pengunjung mengunggah desain atau memilih opsi polos.
5. Pengunjung mengisi nama, jumlah pesanan, dan catatan tambahan.
6. Website menampilkan ringkasan serta total harga.
7. Tombol checkout membuka WhatsApp dengan detail pesanan yang telah dibuat otomatis.

File desain tidak dikirim ke server. Website hanya membaca nama file untuk dimasukkan ke pesan WhatsApp. Pelanggan perlu mengirimkan ulang file desain melalui chat WhatsApp.

## Deployment ke Vercel

### Menggunakan Vercel Dashboard

1. Login ke [Vercel](https://vercel.com/).
2. Import repository atau upload folder proyek.
3. Pilih project sebagai website statis.
4. Karena tidak ada proses build, kosongkan **Build Command**.
5. Deploy project.

### Menggunakan Vercel CLI

Jika Vercel CLI sudah terpasang, jalankan dari folder proyek:

```bash
vercel
```

Konfigurasi pada [`vercel.json`](./vercel.json) mengatur clean URL dan cache untuk aset gambar, CSS, serta JavaScript.

## Catatan Pengembangan

- Link media sosial pada footer masih menggunakan `#` dan dapat diganti dengan URL akun media sosial yang sebenarnya.
- Informasi kontak, alamat, dan mitra dapat diperbarui langsung pada [`index.html`](./index.html).
- Pastikan nomor WhatsApp pada `app.js` sesuai dengan nomor admin sebelum website dipublikasikan.
- Semua aset lokal harus tetap berada di folder proyek agar gambar dan logo dapat ditampilkan dengan benar.

## Tujuan Bisnis

Website ini mendukung kebutuhan bisnis SATCI dengan cara:

- Meningkatkan kredibilitas perusahaan melalui company profile yang profesional.
- Menjelaskan nilai bisnis, layanan, dan keunggulan produk kepada calon pelanggan.
- Mempermudah pelanggan dalam melakukan pemesanan produk custom.
- Membuka peluang pemesanan individu, komunitas, dan merchandise korporat.
- Memanfaatkan teknologi digital untuk mendukung proses pemasaran dan penjualan.

## Identitas Proyek

- **Nama perusahaan:** PT Satu Teknologi Cipta (SATCI)
- **Jenis website:** Company profile dan katalog produk
- **Produk utama:** Custom case smartphone
- **Slogan:** Solusi produk custom berkualitas
- **Mata kuliah:** Bisnis Informatika
