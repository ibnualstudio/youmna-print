'use client';

import { motion } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from '@phosphor-icons/react';

const testimonials = [
  {
    id: 1,
    name: 'Rina Kusuma',
    role: 'Owner, Kafe Kopi Seduh',
    avatar: 'RK',
    rating: 5,
    content: 'Kalender promosi kafe saya jadi incaran pengunjung. Warna cetaknya tajam banget dan harganya jauh lebih hemat dibanding percetakan sebelumnya. Prosesnya cepat, desain dibantu timnya, revisi tanpa ribet. Sudah 3x order di sini dan puas banget.',
    project: 'Kalender Dinding 2.000 pcs',
  },
  {
    id: 2,
    name: 'Budi Santoso',
    role: 'Staff Marketing, PT Jaya Abadi',
    content: 'Order brosur 5.000 pcs untuk pameran, selesai tepat waktu dan rapi. Komunikasi via WhatsApp-nya cepat dan jelas. File dicek dulu sebelum dicetak, jadi aman. Harga kompetitif untuk volume besar. Bakal order lagi untuk event tahun depan.',
    role: 'Staff Marketing, PT Jaya Abadi',
    avatar: 'BS',
    rating: 5,
    project: 'Brosur A4 Lipat 3, 5.000 pcs',
  },
  {
    id: 3,
    name: 'Laila Fitri',
    role: 'Pengurus, Masjid Baiturrahman',
    content: 'Cetak buku yasin untuk acara tahlilan keluarga, hasilnya rapi dan desainnya dibantu timnya. Jilidnya kuat, harganya bersahabat. Prosesnya cepat, cuma 4 hari jadi. Pengiriman ke masjid juga diantarkan timnya. Terima kasih YOUMNA.ID!',
    role: 'Pengurus, Masjid Baiturrahman',
    avatar: 'LF',
    rating: 5,
    project: 'Buku Yasin Hardcover 500 pcs',
  },
  {
    id: 4,
    name: 'Andi Wijaya',
    role: 'Founder, Urban Threads',
    content: 'Paperbag custom untuk brand fashion kami, kualitas tasnya bagus banget, tali kainnya kuat, print logonya tajam. Order 10.000 pcs 3 ukuran selesai 1 minggu. Harga grosirannya fair. Customer service-nya ramah dan responsif.',
    role: 'Founder, Urban Threads',
    avatar: 'AW',
    rating: 5,
    project: 'Paperbag 3 Ukuran 10.000 pcs',
  },
  {
    id: 5,
    name: 'Dewi Sartika',
    role: 'Marketing Manager, Glow Skin',
    content: 'Brosur launching produk skincare, pakai spot UV biar premium. Hasilnya melebihi ekspektasi, warnanya match dengan brand guideline. Tim desain bantu adjust file biar pas. Kirim ke 3 cabang sekaligus, packing rapi.',
    role: 'Marketing Manager, Glow Skin',
    avatar: 'DS',
    rating: 5,
    project: 'Brosur Spot UV 15.000 pcs',
  },
  {
    id: 6,
    name: 'Hendra Gunawan',
    role: 'Owner, Fresh Tea Co.',
    content: 'Stiker label botol 50rb pcs, vinyl transparan waterproof. Test dicuci air tetap nempel dan warnanya gak pudar. Cutting-nya presisi, gak ada yang kelupas sendiri. Proses produksi cepat, cuma 3 hari kerja. Recommended!',
    role: 'Owner, Fresh Tea Co.',
    avatar: 'HG',
    rating: 5,
    project: 'Stiker Vinyl Transparan 50.000 pcs',
  },
];

export function Testimonials() {
  return (
    <section id="testimoni" className="section bg-[var(--bg)]">
      <div className="container">
        <motion.div
          className="section-head center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="kicker">Kata Pelanggan</span>
          <h2>Dipercaya bisnis, sekolah, dan instansi di seluruh Indonesia</h2>
          <p className="max-w-2xl mx-auto">
            Lebih dari 5.000+ pelanggan puas. Baca pengalaman mereka kerja sama dengan kami.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex gap-6" style={{ width: `${testimonials.length * 100}%` }}>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="w-[calc(100%/3)] min-w-0 px-3 md:px-4 flex-shrink-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <article className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-6 md:p-8 h-full flex flex-col hover:border-[var(--accent)] transition-colors duration-300">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" className="text-[var(--yellow)]" />
                      ))}
                    </div>
                    <div className="relative mb-6 flex-1">
                      <Quote size={32} className="absolute -top-2 -left-2 text-[var(--accent)]/20" aria-hidden="true" />
                      <blockquote className="relative text-[var(--ink-2)] leading-relaxed text-base md:text-lg">
                        "{testimonial.content}"
                      </blockquote>
                    </div>
                    <div className="flex items-center gap-4 pt-4 border-t border-[var(--line)]">
                      <div className="w-12 h-12 rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center font-extrabold text-lg flex-shrink-0">
                        {testimonial.avatar}
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-[var(--ink)] truncate">{testimonial.name}</p>
                        <p className="text-sm text-[var(--ink-3)] truncate">{testimonial.role}</p>
                        <p className="text-xs text-[var(--accent)] font-medium mt-1">{testimonial.project}</p>
                      </div>
                    </div>
                  </article>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === 0 ? 'bg-[var(--accent)] w-8' : 'bg-[var(--line)] hover:bg-[var(--ink-3)]'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-8">
            <div className="text-4xl md:text-5xl font-extrabold text-[var(--accent)] mb-2">5.000+</div>
            <div className="text-[var(--ink-2)]">Pelanggan Puas</div>
          </div>
          <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-8">
            <div className="text-4xl md:text-5xl font-extrabold text-[var(--accent)] mb-2">10.000+</div>
            <div className="text-[var(--ink-2)]">Proyek Selesai</div>
          </div>
          <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-8">
            <div className="text-4xl md:text-5xl font-extrabold text-[var(--accent)] mb-2">98%</div>
            <div className="text-[var(--ink-2)]">Repeat Order</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}