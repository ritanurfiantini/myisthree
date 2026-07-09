# myisthree - Platform B2B E-Commerce

## Deskripsi Proyek

myisthree adalah platform e-commerce B2B yang dikembangkan oleh **PT Dinamis Agro Priangan** untuk meningkatkan pelayanan bisnis perdagangan umum dan ekspor-impor.

### Visi & Misi
**Tagline:** Sarana kita tumbuh bersama

Platform ini memfasilitasi:
- Kemitraan bisnis B2B yang berkelanjutan
- Transparansi transaksi real-time
- Kolaborasi dengan UKM, IKM, Koperasi, dan BumDes
- Rantai pasok yang efisien dan terpercaya

## Fitur Utama

### 1. Halaman Publik (Homepage)
- **Navigation Menu:**
  - Login Intranet (Internal Manajemen)
  - Login B2B
  - About Us
  - Produk
  
- **Konten Utama:**
  - Logo 3D "myisthree"
  - Tagline: "Growing Together"
  - Deskripsi perusahaan
  - Alamat lengkap kantor
  - Background berkaitan dengan alam Indonesia dan produknya

### 2. Login Intranet
- Akses khusus untuk manajemen internal
- Work From Anywhere (WFA) system
- Integrasi Google Drive
- File management terpusat
- Entry user dilakukan oleh manajemen

### 3. Portal B2B
- Registrasi untuk:
  - Koperasi
  - BumDes
  - Buyer/Pembeli Korporat
  - UKM/IKM
- Dashboard untuk upload produk
- Menu "Produk & Order"
- Real-time stock management
- Sistem pembayaran terintegrasi

### 4. About Us
**PT Dinamis Agro Priangan**
- Berdiri sejak tahun 2016
- Bidang: Perdagangan Umum & Ekspor-Impor
- 10+ tahun pengalaman
- Fokus: Produk pertanian & komoditas lainnya

**Informasi Kontak:**
- Alamat: Jl. Raya Tanjung Mulya No. 361 RT: 002 RW: 009, Kecamatan Panumbangan, Kabupaten Ciamis
- Telepon: 082317226505, 081522807479
- Email: pt.dinamis.agro.priangan@gmail.com

## Struktur Direktori

```
myisthree/
├── index.html              # Halaman utama
├── css/
│   ├── style.css          # Styling halaman utama
│   └── login.css          # Styling login pages
├── js/
│   ├── script.js          # JavaScript untuk homepage
│   └── login.js           # JavaScript untuk login pages
├── pages/
│   ├── login-intranet.html   # Login internal manajemen
│   └── login-b2b.html        # Login & registrasi B2B
├── images/                # Folder untuk images
│   ├── logo-myisthree.png
│   └── hero-background.jpg
└── README.md
```

## Catatan Implementasi

### Keamanan & Privasi
1. **Harga Disembunyikan di Public App** - Harga hanya tampil untuk mitra B2B yang sudah login
2. **Checkout Konversi** - Sistem checkout dialihkan ke form registrasi corporate B2B
3. **Real-time Tracking** - Transaksi, pembayaran, dan pengiriman dapat dipantau setiap saat

### Referensi Desain
- Inspirasi tampilan: b2b.indocement.co.id
- Color scheme: Green theme (sesuai tema pertanian/alam)
- Background: Alam Indonesia dan produk-produknya

## Teknologi yang Digunakan

- **Frontend:**
  - HTML5
  - CSS3 (dengan responsive design)
  - Vanilla JavaScript
  - Font Awesome (icons)

- **Backend:** (Akan dikembangkan)
  - Node.js / Python / Java
  - Database: PostgreSQL / MySQL
  - Authentication: JWT / OAuth

- **Integrasi:**
  - Google Drive API (untuk file management)
  - Payment Gateway (untuk B2B transactions)

## Development Roadmap

### Phase 1: Frontend Setup ✓
- [x] Halaman utama dengan design responsive
- [x] Login pages (Intranet & B2B)
- [x] Navigation & basic styling

### Phase 2: Backend Development
- [ ] Database design
- [ ] Authentication system
- [ ] User management
- [ ] Product management system

### Phase 3: Features Integration
- [ ] B2B Dashboard
- [ ] Product upload & management
- [ ] Order system
- [ ] Payment integration
- [ ] Real-time tracking

### Phase 4: Deployment & Testing
- [ ] Testing & QA
- [ ] Deployment
- [ ] Monitoring & optimization

## Kontak & Support

Untuk pertanyaan dan support:
- Email: pt.dinamis.agro.priangan@gmail.com
- Telepon: 082317226505 / 081522807479
- Lokasi: Jl. Raya Tanjung Mulya No. 361 RT: 002 RW: 009, Kecamatan Panumbangan, Kabupaten Ciamis

---

**Created with ❤️ for sustainable B2B commerce**

*Last Updated: 2026*