import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '@/lib/data';

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Modern renovated living room with large windows and natural light"
          className="h-full w-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-charcoal/20" />
      </div>

      {/* Content */}
      <div className="container-content relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <span className="label-eyebrow text-white/90">RT Renovations</span>
          </div>
          <h1 className="font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Expert Painting &amp; Decorating in North Kent
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85 md:text-xl">
            Transforming homes with quality, care and craftsmanship.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/services" className="btn-primary">
              Our Services
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-canvas to-transparent" />
    </section>
  );
}
