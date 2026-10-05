import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import AdditionalServices from '@/components/AdditionalServices';
import CTASection from '@/components/CTASection';
import MainServiceCards from '@/components/MainServiceCards';
import { SERVICES, IMAGES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore our complete range of painting, decorating, renovation, plastering, tiling, carpentry and maintenance services.',
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="What We Do"
          title="Our Services"
          description="A complete range of decorating and renovation services, all handled by qualified, experienced tradespeople."
          image={IMAGES.renovation}
          alt="Renovated modern kitchen"
        />
        <MainServiceCards />
        <AdditionalServices />

        {/* Full services list */}
        <section className="bg-canvas section-padding">
          <div className="container-content">
            <div className="mb-12 text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-gold" />
                <span className="label-eyebrow">All Services</span>
                <span className="h-px w-10 bg-gold" />
              </div>
              <h2 className="heading-2 text-charcoal">Complete Service List</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex items-center justify-between rounded-[3px] border border-charcoal/10 bg-white p-5 transition-all hover:border-gold/40 hover:shadow-md"
                >
                  <div>
                    <h3 className="font-heading text-base font-bold text-charcoal">{service.shortTitle}</h3>
                    <p className="mt-1 text-sm text-charcoal/55">{service.description}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-gold opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
