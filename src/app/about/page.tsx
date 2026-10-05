import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import AboutSection from '@/components/AboutSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import { IMAGES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'CanDo House is Canberra and Queanbeyan’s trusted renovation and building expert, delivering tailored solutions in kitchen remodels, bathroom renovations, custom joinery, and home extensions.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="About Us"
          title="We Build Bespoke Spaces That Blend Style and Function"
          description="Canberra and Queanbeyan's trusted renovation and building expert."
          image={IMAGES.about}
          alt="Custom home build by CanDo House"
          breadcrumb="About Us"
        />
        <AboutSection />
        <WhyChooseUs />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
