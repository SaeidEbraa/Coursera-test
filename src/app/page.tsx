import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesOverview from '@/components/ServicesOverview';
import MainServiceCards from '@/components/MainServiceCards';
import Brands from '@/components/Brands';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesOverview />
        <MainServiceCards />
        <Brands />
        <section className="bg-canvas section-padding">
          <div className="container-content">
            <SectionHeading
              eyebrow="Projects"
              title="Recent Renovation Projects Across Canberra & Queanbeyan"
              align="center"
            />
          </div>
        </section>
        <Gallery />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
