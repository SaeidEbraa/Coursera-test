import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import AboutSection from '@/components/AboutSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTASection from '@/components/CTASection';
import { IMAGES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about RT Renovations — professional painting, decorating, renovation and maintenance specialists serving North Kent and London.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="About Us"
          title="Professional Work. Personal Service."
          description="Transforming homes with quality, care and craftsmanship across North Kent and London."
          image={IMAGES.about}
          alt="Professional renovation work in progress"
        />
        <AboutSection />
        <WhyChooseUs />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
