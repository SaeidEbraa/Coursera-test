import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import MainServiceCards from '@/components/MainServiceCards';
import AdditionalServices from '@/components/AdditionalServices';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTASection from '@/components/CTASection';
import Gallery from '@/components/Gallery';
import AboutSection from '@/components/AboutSection';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesOverview />
        <MainServiceCards />
        <AdditionalServices />
        <WhyChooseUs />
        <CTASection />
        <Gallery />
        <AboutSection />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
