'use client';

import { motion } from 'motion/react';
import { Image, Search, ExternalLink } from '@phosphor-icons/react';

const portfolioItems = [
  {
    id: 1,
    title: 'Kalender Dinding Corporate',
    category: 'Kalender',
    client: 'PT. Jaya Abadi Tbk',
    description: 'Kalender dinding 46×64 cm art paper 150gsm, full color 2 sisi, 5.000 pcs untuk promosi tahunan.',
    image: '/portfolio/kalender-corporate.jpg',
    tags: ['Offset Printing', 'Art Paper 150gsm', '5.000 pcs'],
  },
  {
    id: 2,
    title: 'Brosur Produk Kosmetik',
    category: 'Brosur',
    client: 'Glow Skin Indonesia',
    description: 'Brosur A4 lipat 3, art paper 120gsm, spot UV cover, 10.000 pcs untuk launching produk baru.',
    image: '/portfolio/brosur-kosmetik.jpg',
    tags: ['Digital Printing', 'Spot UV', '10.000 pcs'],
  },
  {
    id: 3,
    title: 'Banner Event Music Festival',
    category: 'Banner',
    client: 'Soundwave Festival',
    description: 'Flexi Korea 340gsm berbagai ukuran, roll banner 60×160cm, umbul-umbul untuk event outdoor 3 hari.',
    image: '/portfolio/banner-festival.jpg',
    tags: ['Flexi Korea 340gsm', 'Outdoor', 'Weatherproof'],
  },
  {
    id: 4,
    title: 'Stiker Label Minuman Botol',
    category: 'Stiker',
    client: 'Fresh Tea Co.',
    description: 'Stiker vinyl transparan waterproof untuk botol minuman 330ml, 50.000 pcs dengan finishing gloss.',
    image: '/portfolio/stiker-minuman.jpg',
    tags: ['Vinyl Transparan', 'Waterproof', '50.000 pcs'],
  },
  {
    id: 5,
    title: 'Kartu Nama Premium Executive',
    category: 'Kartu Nama',
    client: 'Law Firm Associates',
    description: 'Art carton 310gsm soft touch laminasi + spot UV logo, 2.000 set untuk 20 partner & associates.',
    image: '/portfolio/kartu-executive.jpg',
    tags: ['Soft Touch', 'Spot UV', 'Art Carton 310gsm'],
  },
  {
    id: 6,
    title: 'Paperbag Fashion Brand',
    category: 'Packaging',
    client: 'Urban Threads',
    description: 'Paperbag art paper 150gsm matt laminasi, tali kain custom, 3 ukuran, 15.000 pcs untuk retail.',
    image: '/portfolio/paperbag-fashion.jpg',
    tags: ['Matt Lamination', 'Custom Handle', '3 Sizes'],
  },
  {
    id: 7,
    title: 'Buku Yasin Khusus Acara',
    category: 'Buku',
    client: 'Masjid Al-Ikhlas',
    description: 'Buku Yasin hardcover custom cover kain, embossing logo masjid, 1.000 pcs untuk acara tahlilan.',
    image: '/portfolio/buku-yasin.jpg',
    tags: ['Hardcover Kain', 'Embossing', '1.000 pcs'],
  },
  {
    id: 8,
    title: 'Merchandise Startup Tech',
    category: 'Merchandise',
    client: 'TechFlow Startup',
    description: 'Kaos DTF, topi bordir, totebag, pin, gantungan kunci - paket merchandise lengkap 500 set.',
    image: '/portfolio/merch-tech.jpg',
    tags: ['DTF Print', 'Embroidery', '500 Sets'],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="section bg-[var(--surface)]">
      <div className="container">
        <motion.div
          className="section-head between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div>
            <span className="kicker">Proyek Terbaru</span>
            <h2>Karya yang kami banggakan</h2>
            <p className="max-w-xl">
              Ribuan proyek cetak telah kami selesaikan untuk UMKM, korporasi, instansi pendidikan,
              hingga organisasi keagamaan. Kualitas konsisten, tepat waktu.
            </p>
          </div>
          <a
            href="/portfolio"
            className="btn btn-ghost flex-shrink-0"
          >
            Lihat Semua Portfolio
            <ExternalLink size={16} className="ml-1" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.article
              key={item.id}
              className="group relative bg-[var(--bg)] border border-[var(--line)] rounded-2xl overflow-hidden hover:border-[var(--accent)] hover:shadow-[0_20px_40px_-10px_rgba(28,26,25,0.1)] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06 }}
            >
              <div className="aspect-video relative overflow-hidden bg-[var(--line)]">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[var(--yellow)]/10">
                  <Image size={48} className="text-[var(--ink-3)]" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex gap-2">
                  <button className="btn btn-light btn-sm px-4">
                    <Search size={16} />
                    Detail
                  </button>
                  <button className="btn btn-ghost btn-sm px-4 text-white border-white/50 hover:bg-white/10">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="tag-pill">{item.category}</span>
                  <span className="text-xs text-[var(--ink-3)]">· {item.client}</span>
                </div>
                <h3 className="text-lg font-extrabold text-[var(--ink)] mb-2 group-hover:text-[var(--accent)] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--ink-2)] mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs rounded-full bg-[var(--accent-soft)] text-[var(--accent)] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a href="/portfolio" className="btn btn-primary inline-flex">
            Lihat Semua Portfolio
            <ExternalLink size={16} className="ml-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}