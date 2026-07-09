import type { Metadata } from 'next';
import { Syne, Figtree } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'block',
});

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-figtree',
  display: 'swap',
});

const BASE_URL = 'https://crisva.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Crisva Design Lab — Product Design & Branding End to End',
    template: '%s | Crisva Design Lab',
  },

  description:
    'Laboratorio de diseño end to end en Lima, Perú. Desde branding y design strategy hasta product design, growth y desarrollo web y app. Diseñamos productos digitales que trascienden.',

  keywords: [
    'product design Lima',
    'estudio de diseño Lima',
    'branding Lima Peru',
    'agencia diseño producto LATAM',
    'UX UI Lima',
    'diseño de producto startups',
    'design strategy LATAM',
    'desarrollo web diseño Lima',
    'branding startups Peru',
    'Crisva Design Lab',
  ],

  authors: [{ name: 'Crisva Design Lab', url: BASE_URL }],
  creator: 'Crisva Design Lab',
  publisher: 'Crisva Design Lab',

  alternates: {
    canonical: BASE_URL,
    languages: { 'es-PE': BASE_URL },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },

  openGraph: {
    title: 'Crisva Design Lab — Product Design & Branding End to End',
    description:
      'Laboratorio de diseño end to end. Branding, design strategy, product design, growth y desarrollo web y app. Diseñamos productos que trascienden.',
    url: BASE_URL,
    siteName: 'Crisva Design Lab',
    locale: 'es_PE',
    type: 'website',
    images: [
      {
        url: '/ogcrisva.png',
        width: 1200,
        height: 630,
        alt: 'Crisva Design Lab — Trasciende hasta 10x a través del diseño',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Crisva Design Lab — Product Design & Branding End to End',
    description:
      'Laboratorio de diseño end to end. Branding, design strategy, product design, growth y desarrollo web y app.',
    images: ['/ogcrisva.png'],
    creator: '@crisvadesign',
    site: '@crisvadesign',
  },

  category: 'design',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Crisva Design Lab',
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.svg`,
  description:
    'Laboratorio de diseño end to end en Lima, Perú. Branding, design strategy, product design, growth y desarrollo web y app.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lima',
    addressCountry: 'PE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'c@crisva.com',
    contactType: 'customer service',
    availableLanguage: ['Spanish', 'English'],
  },
  sameAs: [
    'https://www.instagram.com/crisvadesign',
    'https://www.linkedin.com/company/crisva',
  ],
  founder: {
    '@type': 'Person',
    name: 'Cristhian Valle',
    jobTitle: 'CEO & Founder',
    url: BASE_URL,
  },
  areaServed: ['PE', 'CL', 'CO', 'MX', 'AR'],
  knowsAbout: [
    'Product Design',
    'UX Design',
    'Branding',
    'Design Strategy',
    'Web Development',
    'Growth Design',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${syne.variable} ${figtree.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          defer
          data-domain="crisva.com"
          src="https://plausible.io/js/script.js"
        />
        <meta name="theme-color" content="#0C0C0C" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body>{children}</body>
    </html>
  );
}