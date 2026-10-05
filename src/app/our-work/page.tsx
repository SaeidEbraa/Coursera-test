import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Gallery from '@/components/Gallery';
import CTASection from '@/components/CTASection';
import { IMAGES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'Browse our portfolio of recent painting, decorating and renovation projects across North Kent and London.',
};

export default function OurWorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Portfolio"
          title="See Our Work"
          description="Take a look at some of our recent painting, decorating and renovation projects."
          image={IMAGES.hero}
          alt="Beautifully renovated interior space"
        />
        <Gallery />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
