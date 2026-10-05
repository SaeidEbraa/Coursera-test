import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { SERVICES, SITE } from '@/lib/data';

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: service.shortTitle,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar mt-20">
          <div className="container-content">
            <span className="breadcrumb-text">Home — {service.shortTitle}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-white section-padding">
          <div className="container-content">
            <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
              {/* Main content */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-10 bg-gold" />
                  <span className="label-eyebrow">Service</span>
                </div>
                <h1 className="heading-2 text-charcoal mb-6">{service.title}</h1>
                <p className="text-lg leading-relaxed text-charcoal/70 mb-10">{service.description}</p>
                <div className="overflow-hidden rounded-[3px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover"
                  />
                </div>
                <div className="mt-10 space-y-5 text-base leading-relaxed text-charcoal/70">
                  {service.longDescription.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-10">
                  <h3 className="font-heading text-lg font-bold text-charcoal mb-5">Key Features</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={2} />
                        <span className="text-base text-charcoal/75">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10">
                  <Link href="/contact" className="btn-primary">
                    Request A Quote
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-[3px] border border-charcoal/10 bg-cream/50 p-6">
                  <h3 className="font-heading text-base font-bold text-charcoal mb-4">All Services</h3>
                  <ul className="space-y-1">
                    {SERVICES.map((s) => (
                      <li key={s.slug} className="border-b border-charcoal/10 last:border-0">
                        <Link
                          href={`/services/${s.slug}`}
                          className={`flex items-center justify-between py-3 text-sm transition-colors hover:text-gold ${
                            s.slug === params.slug ? 'font-bold text-gold' : 'text-charcoal/60'
                          }`}
                        >
                          {s.shortTitle}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 rounded-[3px] bg-charcoal p-6">
                  <p className="text-sm text-white/60">Need help with your project?</p>
                  <a
                    href={SITE.phoneHref}
                    className="mt-3 block font-heading text-xl font-bold text-gold"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
