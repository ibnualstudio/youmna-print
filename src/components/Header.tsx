'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { MagnifyingGlass, Sun, Moon, Menu, X, Truck, ShieldCheck, Palette, MessageCircle } from '@phosphor-icons/react';
import { useTheme } from './providers';

const navItems = [
  { href: '/', label: 'Beranda' },
  { href: '/layanan', label: 'Layanan' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/harga', label: 'Harga' },
  { href: '/blog', label: 'Blog' },
  { href: '/tentang', label: 'Tentang' },
];

const trustItems = [
  { icon: Truck, label: 'Kirim Seluruh Indonesia' },
  { icon: ShieldCheck, label: 'Garansi Kualitas Cetak' },
  { icon: Palette, label: 'Desain Custom Gratis' },
  { icon: MessageCircle, label: 'Respon Cepat via WA' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { y } = useScroll();
  const reduce = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[var(--header-h)] transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-[var(--surface)]/80 backdrop-blur-md border-b border-[var(--line)] shadow-sm'
          : 'bg-transparent'
      }`}
      style={{ height: 'var(--header-h)' }}
    >
      <div className="container flex items-center justify-between h-full">
        <Link href="/" className="flex items-center gap-3" aria-label="YOUMNA.ID - Kembali ke beranda">
          <motion.svg
            className="w-9 h-9"
            viewBox="0 0 64 64"
            aria-hidden="true"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
          >
            <rect width="64" height="64" rx="14" fill="var(--ink)" />
            <circle cx="24" cy="24" r="8" fill="var(--cyan)" />
            <circle cx="40" cy="24" r="8" fill="var(--yellow)" />
            <circle cx="24" cy="40" r="8" fill="var(--accent)" />
            <circle cx="40" cy="40" r="8" fill="var(--white)" />
          </motion.svg>
          <span className="font-extrabold text-xl tracking-tight text-[var(--ink)]">
            YOUMNA<span className="text-[var(--accent)]">.ID</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Navigasi utama">
          {navItems.map((item, index) => (
            <motion.link
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-full text-sm font-semibold text-[var(--ink-2)] hover:text-[var(--ink)] hover:bg-[var(--line)] transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 + index * 0.04 }}
            >
              {item.label}
            </motion.link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <motion.button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink-2)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
            aria-label={`Ganti ke mode ${theme === 'light' ? 'gelap' : 'terang'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </motion.button>

          <Link
            href="https://wa.me/6282110757247?text=Halo%20YOUMNA.ID%2C%20saya%20ingin%20konsultasi%20soal%20kebutuhan%20cetak%20saya."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hidden sm:inline-flex"
          >
            <MessageCircle size={18} />
            Order via WhatsApp
          </Link>
        </div>

        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <motion.div
        id="mobile-menu"
        className="md:hidden overflow-hidden border-t border-[var(--line)] bg-[var(--surface)]"
        initial={false}
        animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="container py-6 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 rounded-lg text-base font-medium text-[var(--ink-2)] hover:text-[var(--accent)] hover:bg-[var(--line)] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-[var(--ink-2)] hover:text-[var(--accent)] hover:bg-[var(--line)] transition-colors w-full"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              <span>{theme === 'light' ? 'Mode Gelap' : 'Mode Terang'}</span>
            </button>
          </div>
          <Link
            href="https://wa.me/6282110757247?text=Halo%20YOUMNA.ID%2C%20saya%20ingin%20konsultasi%20soal%20kebutuhan%20cetak%20saya."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full justify-center"
          >
            <MessageCircle size={18} />
            Order via WhatsApp
          </Link>
        </div>
      </motion.div>
    </header>
  );
}