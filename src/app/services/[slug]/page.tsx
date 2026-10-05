import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';
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

  const currentIndex = SERVICES.findIndex((s) => s.slug === params.slug);
  const nextService = SERVICES[(currentIndex + 1) % SERVICES.length];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[55vh] items-center overflow-hidden pt-16">
          <div className="absolute inset-0">
            <img
              src={service.image}
              alt={service.title}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/30" />
          </div>
          <div className="container-content relative z-10 py-20">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />
                <span className="label-eyebrow text-white/90">Service</span>
              </div>
              <h1 className="font-heading text-3xl font-bold leading-[1.15] text-white md:text-4xl lg:text-5xl">
                {service.title}
              </h1>
              <p className="mt-5 max-w-xl text-lg text-white/75">{service.description}</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-canvas section-padding">
          <div className="container-content">
            <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-10 bg-gold" />
                  <span className="label-eyebrow">Overview</span>
                </div>
                <h2 className="heading-3 text-charcoal mb-6">What We Offer</h2>
                <p className="text-base leading-relaxed text-charcoal/70">{service.longDescription}</p>

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
                    Get a Free Quote
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-[3px] border border-charcoal/10 bg-white p-6">
                  <h3 className="font-heading text-base font-bold text-charcoal">Other Services</h3>
                  <ul className="mt-4 space-y-3">
                    {SERVICES.filter((s) => s.slug !== params.slug).slice(0, 5).map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="flex items-center justify-between py-2 text-sm text-charcoal/60 transition-colors hover:text-gold"
                        >
                          {s.shortTitle}
                          <ArrowRight className="h-4 w-4 opacity-0 transition-opacity" />
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

            {/* Next service link */}
            <div className="mt-16 border-t border-charcoal/10 pt-8">
              <Link
                href={`/services/${nextService.slug}`}
                className="group flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-charcoal/40">Next Service</span>
                  <p className="mt-1 font-heading text-lg font-bold text-charcoal group-hover:text-gold transition-colors">
                    {nextService.shortTitle}
                  </p>
                </div>
                <ArrowRight className="h-6 w-6 text-gold transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
