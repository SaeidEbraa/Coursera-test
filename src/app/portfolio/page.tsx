import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Gallery from '@/components/Gallery';
import CTASection from '@/components/CTASection';
import { IMAGES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Browse our portfolio of recent renovation, building, and custom joinery projects across Canberra and Queanbeyan.',
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Portfolio"
          title="Selected Projects That We Really Want To Show You"
          description="Take a look at some of our recent renovation, building, and custom joinery projects."
          image={IMAGES.about}
          alt="Custom home build by CanDo House"
          breadcrumb="Portfolio"
        />
        <Gallery />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
