import type { Metadata } from 'next';
import { Syne, Figtree } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'block', // Obligatorio según requisitos
});

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-figtree',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Crisva Design Lab — Product Design & Branding Agency',
  description: 'Agencia de Product Design y Branding en Lima, Perú. Diseñamos productos digitales que trascienden con un proceso humano y senior.',
  openGraph: {
    title: 'Crisva Design Lab',
    description: 'Diseñamos productos digitales que trascienden.',
    url: 'https://crisva.com',
    siteName: 'Crisva Design Lab',
    locale: 'es_PE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${syne.variable} ${figtree.variable}`}>
      <head>
        {/* Plausible Analytics */}
        <script defer data-domain="crisva.com" src="https://plausible.io/js/script.js"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
