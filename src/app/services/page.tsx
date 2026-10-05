import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import MainServiceCards from '@/components/MainServiceCards';
import CTASection from '@/components/CTASection';
import { IMAGES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore our complete range of renovation and building services — home builders, kitchen remodels, bathroom renovations, custom joinery, decking and pergolas in Canberra.',
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Services"
          title="We are here to guide you from the beginning to the end of your project."
          description="Whether it's a complete renovation or a custom-built feature, our expert team is with you every step of the way."
          image={IMAGES.cta}
          alt="Renovation project by CanDo House"
          breadcrumb="Services"
        />
        <MainServiceCards />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
