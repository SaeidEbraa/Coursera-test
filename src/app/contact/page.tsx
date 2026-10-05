import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import PageHero from '@/components/PageHero';
import { IMAGES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with RT Renovations for a free quote on your painting, decorating or renovation project in North Kent and London.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Get in Touch"
          title="Contact Us"
          description="Tell us about your project and we'll help you turn your ideas into reality."
          image={IMAGES.about}
          alt="Renovation project consultation"
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
