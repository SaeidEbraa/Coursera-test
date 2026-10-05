import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rtrenovations.example.com'),
  title: {
    default: 'RT Renovations | Painting, Decorating & Renovation Specialists',
    template: '%s | RT Renovations',
  },
  description:
    'Professional painting, decorating, renovation and property maintenance services across North Kent and London.',
  keywords: [
    'painting and decorating',
    'home renovations',
    'plastering',
    'tiling',
    'carpentry',
    'property maintenance',
    'North Kent',
    'London',
  ],
  openGraph: {
    title: 'RT Renovations | Painting, Decorating & Renovation Specialists',
    description:
      'Professional painting, decorating, renovation and property maintenance services across North Kent and London.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'RT Renovations',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'RT Renovations',
    description:
      'Professional painting, decorating, renovation and property maintenance services across North Kent and London.',
    telephone: '0800 043 6989',
    areaServed: 'North Kent, London & surrounding areas',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Kent',
      addressCountry: 'GB',
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
