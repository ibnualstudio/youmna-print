'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Calendar, FileText, Image, Sticker, IdCard, Box, BookOpen, ShoppingBag, Palette, Truck, ShieldCheck, MessageCircle } from '@phosphor-icons/react';

const services = [
  {
    id: 'kalender',
    name: 'Kalender',
    description: 'Dinding, meja, poster, dan kalender kerja custom. Media promosi terpajang 365 hari.',
    startPrice: 'Rp 18.500/pcs',
    icon: Calendar,
    href: '/layanan/kalender',
    variants: ['Dinding 46×64 cm', 'Meja 21×15 cm', 'Poster A2/A3', 'Kalender Kerja'],
  },
  {
    id: 'brosur',
    name: 'Brosur & Flyer',
    description: 'A4/A5, lipat 2–3, art paper berbagai gramatur. Cocok untuk promosi produk & event.',
    startPrice: 'Rp 95rb/1000',
    icon: FileText,
    href: '/layanan/brosur',
    variants: ['A4 Lipat 2', 'A5 Lipat 3', 'Flyer Satu Muka', 'Brosur Custom'],
  },
  {
    id: 'banner',
    name: 'Banner & Spanduk',
    description: 'Flexi, warner, roll banner, umbul-umbul, event desk. Tahan cuaca outdoor.',
    startPrice: 'Rp 25rb/m²',
    icon: Image,
    href: '/layanan/banner',
    variants: ['Flexi China 280gsm', 'Flexi Korea 340gsm', 'Roll Banner', 'Umbul-umbul'],
  },
  {
    id: 'stiker',
    name: 'Stiker & Label',
    description: 'Vinyl, transparan, hologram, cutting presisi. Untuk kemasan, branding, & label.',
    startPrice: 'Rp 45rb/lembar',
    icon: Sticker,
    href: '/layanan/stiker',
    variants: ['Vinyl Putih/Transparan', 'Hologram', 'Stiker Cutting', 'Label Botol'],
  },
  {
    id: 'kartu-nama',
    name: 'Kartu Nama & Undangan',
    description: 'Satu/dua muka, pilihan bahan premium, cepat. Undangan nikahan, khitanan, ulang tahun.',
    startPrice: 'Rp 35rb/100',
    icon: IdCard,
    href: '/layanan/kartu-nama',
    variants: ['Art Carton 310gsm', 'Matt/Laminasi', 'Soft Touch', 'Spot UV'],
  },
  {
    id: 'packaging',
    name: 'Paperbag & Merchandise',
    description: 'Paperbag, packaging, mug, pin, gantungan kunci. Custom branding untuk bisnis.',
    startPrice: 'Rp 6.500/pcs',
    icon: ShoppingBag,
    href: '/layanan/packaging',
    variants: ['Paperbag Kraft', 'Paperbag Art Paper', 'Mug Keramik', 'Pin & Gantungan Kunci'],
  },
  {
    id: 'buku',
    name: 'Buku Yasin & Custom',
    description: 'Soft/hard cover, jilid rapi, desain gratis. Buku yasin, buku kenangan, majalah.',
    startPrice: 'Rp 28rb/pcs',
    icon: BookOpen,
    href: '/layanan/buku',
    variants: ['Buku Yasin Softcover', 'Buku Yasin Hardcover', 'Buku Kenangan', 'Majalah/Katalog'],
  },
  {
    id: 'merchandise',
    name: 'Merchandise Lainnya',
    description: 'Kaos, topi, tas, tumbler, payung. Semua custom dengan logo & desain Anda.',
    startPrice: 'Kontak Kami',
    icon: Box,
    href: '/layanan/merchandise',
    variants: ['Kaos Sablon/DTF', 'Topi Bordir', 'Tas Kain/Spinner', 'Tumbler & Payung'],
  },
];

const features = [
  { icon: Palette, title: 'Desain Custom Gratis', desc: 'Tim desainer kami bantu buat dari nol, revisi tanpa batas sampai puas.' },
  { icon: Truck, title: 'Kirim Seluruh Indonesia', desc: 'JNE, J&T, SiCepat, AnterAja. Gratis ongkir untuk area Jawa Timur & Kalimantan.' },
  { icon: ShieldCheck, title: 'Garansi Kualitas Cetak', desc: 'Warna akurat, potongan presisi, bahan sesuai spesifikasi. Ganti rugi jika cacat produksi.' },
  { icon: MessageCircle, title: 'Konsultasi via WhatsApp', desc: 'Respon cepat < 5 menit jam kerja. Hitung harga, cek desain, tracking pesanan via WA.' },
];

export function Services() {
  return (
    <section id="layanan" className="section bg-[var(--bg)]">
      <div className="container">
        <motion.div
          className="section-head center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="kicker">Layanan Percetakan</span>
          <h2>Semua kebutuhan cetak bisnis Anda, satu tempat</h2>
          <p className="max-w-2xl mx-auto">
            Dari kebutuhan satuan hingga ribuan eksemplar, semua produk dikerjakan dengan
            standar kualitas cetak yang sama. Digital & offset printing dengan akurasi warna konsisten.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              className="group relative bg-[var(--surface)] border border-[var(--line)] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_20px_40px_-10px_rgba(28,26,25,0.12)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06 }}
            >
              <Link
                href={service.href}
                className="block p-6 h-full flex flex-col"
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-extrabold text-[var(--ink)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {service.name}
                </h3>
                <p className="text-[var(--ink-2)] text-sm mb-4 flex-1 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2 mb-5 border-t border-[var(--line)] pt-4">
                  {service.variants.slice(0, 3).map((variant) => (
                    <div key={variant} className="flex items-center gap-2 text-xs text-[var(--ink-3)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--line)]" />
                      {variant}
                    </div>
                  ))}
                  {service.variants.length > 3 && (
                    <div className="text-xs text-[var(--accent)] font-medium">
                      +{service.variants.length - 3} varian lain
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--line)]">
                  <span className="text-lg font-extrabold text-[var(--accent)]">
                    {service.startPrice}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                    Detail
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-16 grid md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-6 text-center hover:border-[var(--accent)] transition-colors"
              transition={{ delay: index * 0.06 }}
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center mx-auto mb-4">
                <feature.icon size={24} />
              </div>
              <h4 className="text-lg font-bold text-[var(--ink)] mb-2">{feature.title}</h4>
              <p className="text-sm text-[var(--ink-2)]">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link href="/layanan" className="btn btn-dark inline-flex">
            Lihat Semua Layanan & Spesifikasi
            <ArrowRight size={18} className="ml-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}