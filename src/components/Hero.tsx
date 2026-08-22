'use client';

import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Truck, Tag, Sparkles, Check } from '@phosphor-icons/react';
import Link from 'next/link';

const services = [
  { name: 'Kalender', startPrice: 'Rp 18.500/pcs', icon: '📅' },
  { name: 'Brosur & Flyer', startPrice: 'Rp 95rb/1000', icon: '📄' },
  { name: 'Banner & Spanduk', startPrice: 'Rp 25rb/m²', icon: '🏷️' },
  { name: 'Stiker & Label', startPrice: 'Rp 45rb/lembar', icon: '✨' },
  { name: 'Kartu Nama', startPrice: 'Rp 35rb/100', icon: '💼' },
  { name: 'Packaging & Merch', startPrice: 'Rp 6.500/pcs', icon: '🎁' },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-[var(--header-h)] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 right-1/5 w-[400px] h-[400px] rounded-full bg-[var(--accent)]/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/5 w-[300px] h-[300px] rounded-full bg-[var(--cyan)]/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full bg-[var(--yellow)]/10 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              className="kicker inline-flex"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: reduce ? 0 : 0.2 }}
            >
              Percetakan Modern Indonesia
            </motion.span>

            <motion.h1
              className="mt-4 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter leading-[1.02] text-[var(--ink)] max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.3, duration: 0.7 }}
            >
              Cetak <span className="text-[var(--accent)]">Premium</span>{' '}
              <br />
              Harga <span className="text-[var(--accent)]">Transparan</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-[var(--ink-2)] max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.4 }}
            >
              Dari kalender, brosur, banner, stiker hingga packaging custom.
              Kualitas cetak kelas atas dengan harga langsung dari produksi.
              Pengiriman ke seluruh Indonesia.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.5 }}
            >
              <Link
                href="https://wa.me/6282110757247?text=Halo%20YOUMNA.ID%2C%20saya%20ingin%20konsultasi%20soal%20kebutuhan%20cetak%20saya."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary group"
              >
                <Sparkles size={18} className="mr-1" />
                Konsultasi & Order via WhatsApp
                <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/layanan" className="btn btn-ghost">
                Lihat Semua Layanan
                <ArrowRight size={18} className="ml-1" />
              </Link>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-6 text-sm text-[var(--ink-3)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.6 }}
            >
              <div className="flex items-center gap-2">
                <Truck size={18} className="text-[var(--accent)]" />
                <span>Gratis Ongkir <span className="text-[var(--ink-2)] font-medium">Jawa Timur & Kalimantan</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={18} className="text-[var(--accent)]" />
                <span>Harga Mulai <span className="text-[var(--ink-2)] font-medium">Rp 6.500</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={18} className="text-[var(--accent)]" />
                <span>Desain Custom <span className="text-[var(--ink-2)] font-medium">Gratis Revisi</span></span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduce ? 0 : 0.4, duration: 0.8 }}
          >
            <div className="relative aspect-[4/3] max-w-lg mx-auto">
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--accent)]/20 via-[var(--cyan)]/10 to-[var(--yellow)]/20 blur-2xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="relative rounded-2xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(28,26,25,0.18)] bg-[var(--surface)] border border-[var(--line)]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--accent)_0%,var(--cyan)_50%,var(--yellow)_100%)] opacity-5" />
                <div className="relative p-8 md:p-12 flex flex-col items-center justify-center min-h-[400px]">
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: reduce ? 0 : 0.6, type: 'spring', stiffness: 100, damping: 15 }}
                  >
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)] mb-6">
                      <Sparkles size={40} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--ink)] mb-3">
                      Produk Unggulan
                    </h3>
                    <p className="text-[var(--ink-2)] mb-8 max-w-sm mx-auto">
                      Pilih dari 100+ varian produk cetak premium dengan spesifikasi lengkap
                    </p>
                    <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-xs mx-auto">
                      {services.slice(0, 6).map((service, index) => (
                        <motion.div
                          key={service.name}
                          className="p-3 md:p-4 rounded-xl bg-[var(--bg)] border border-[var(--line)] text-center hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] transition-all group cursor-pointer"
                          whileHover={{ scale: 1.03, y: -2 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: reduce ? 0 : 0.7 + index * 0.05 }}
                        >
                          <div className="text-3xl md:text-4xl mb-2">{service.icon}</div>
                          <div className="text-xs md:text-sm font-semibold text-[var(--ink)]">{service.name}</div>
                          <div className="text-xs text-[var(--accent)] font-bold mt-1">{service.startPrice}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -bottom-6 -left-6 md:-left-10 bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-4 md:p-6 shadow-[0_20px_40px_-10px_rgba(28,26,25,0.15)] flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.8 }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center flex-shrink-0">
                <Tag size={28} />
              </div>
              <div>
                <p className="text-xs text-[var(--ink-3)] uppercase tracking-wide">Promo Bulan Ini</p>
                <p className="text-xl font-extrabold text-[var(--ink)]">Kalender 2025</p>
                <p className="text-sm font-bold text-[var(--accent)]">Mulai Rp 18.500/pcs</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-6 -right-6 md:-right-10 bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-4 md:p-6 shadow-[0_20px_40px_-10px_rgba(28,26,25,0.15)] flex items-center gap-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.9 }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center flex-shrink-0">
                <Truck size={28} />
              </div>
              <div>
                <p className="text-xs text-[var(--ink-3)] uppercase tracking-wide">Pengiriman</p>
                <p className="text-xl font-extrabold text-[var(--ink)]">Ke Seluruh Indonesia</p>
                <p className="text-sm text-[var(--ink-2)]">JNE, J&T, SiCepat, AnterAja</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduce ? 0 : 1.2, duration: 1 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-[var(--line)] rounded-full flex justify-center pt-2"
          aria-hidden="true"
        >
          <motion.div
            className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}