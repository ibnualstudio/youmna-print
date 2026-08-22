import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: {
    default: 'YOUMNA.ID — Percetakan Modern, Kualitas Premium',
    template: '%s | YOUMNA.ID',
  },
  description: 'Percetakan online modern dengan kualitas cetak premium. Kalender, brosur, banner, stiker, packaging, dan merchandise custom. Harga transparan, pengiriman ke seluruh Indonesia.',
  keywords: ['percetakan', 'cetak kalender', 'brosur', 'banner', 'stiker', 'packaging', 'merchandise', 'Surabaya', 'Indonesia'],
  authors: [{ name: 'YOUMNA.ID' }],
  creator: 'YOUMNA.ID',
  publisher: 'YOUMNA.ID',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://youmna.id',
    siteName: 'YOUMNA.ID',
    title: 'YOUMNA.ID — Percetakan Modern, Kualitas Premium',
    description: 'Percetakan online modern dengan kualitas cetak premium. Harga transparan, pengiriman ke seluruh Indonesia.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'YOUMNA.ID - Percetakan Modern',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YOUMNA.ID — Percetakan Modern',
    description: 'Percetakan online modern dengan kualitas cetak premium.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FBFBFA' },
    { media: '(prefers-color-scheme: dark)', color: '#0E1116' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}