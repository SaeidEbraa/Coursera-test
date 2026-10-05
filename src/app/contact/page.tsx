import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import PageHero from '@/components/PageHero';
import { IMAGES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with CanDo House for a free quote on your renovation, kitchen remodel, bathroom renovation, or custom joinery project in Canberra and Queanbeyan.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Contact Us Anytime, We Are Always There For You"
          description="Tell us about your project and we'll help you turn your ideas into reality."
          image={IMAGES.heroSecondary}
          alt="Contact CanDo House"
          breadcrumb="Contact Us"
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
