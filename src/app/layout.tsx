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
  metadataBase: new URL('https://candohouse.com.au'),
  title: {
    default: 'CanDo House | Canberra & Queanbeyan Renovation and Building Experts',
    template: '%s | CanDo House',
  },
  description:
    'CanDo House is Canberra and Queanbeyan’s trusted renovation and building expert, specialising in custom joinery, bathroom renovations, kitchen remodels, and home extensions.',
  keywords: [
    'kitchen renovation Canberra',
    'bathroom renovation Canberra',
    'custom joinery Canberra',
    'home builders Canberra',
    'decking builders Canberra',
    'pergola builders Canberra',
    'home extensions Queanbeyan',
  ],
  openGraph: {
    title: 'CanDo House | Canberra & Queanbeyan Renovation and Building Experts',
    description:
      'CanDo House is Canberra and Queanbeyan’s trusted renovation and building expert, specialising in custom joinery, bathroom renovations, kitchen remodels, and home extensions.',
    type: 'website',
    locale: 'en_AU',
    siteName: 'CanDo House',
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
    name: 'CanDo House',
    description:
      'Canberra and Queanbeyan’s trusted renovation and building expert, specialising in custom joinery, bathroom renovations, kitchen remodels, and home extensions.',
    telephone: '+61 0491 718 414',
    email: 'office@candohouse.com.au',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '234 Beasley Street, Farrer',
      addressRegion: 'ACT',
      addressCountry: 'AU',
      postalCode: '2607',
    },
    areaServed: 'Canberra, Queanbeyan & surrounding areas',
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
