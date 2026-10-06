import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '@/lib/data';

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Modern kitchen renovation in Canberra by CanDo House"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/20" />
      </div>

      {/* Content */}
      <div className="container-content relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <span className="label-eyebrow text-gold">Canberra &amp; Queanbeyan</span>
          </div>
          <h1 className="font-heading text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Comprehensive Renovations. From Foundations To The Roof.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70 md:text-xl">
            We transform homes through a seamless blend of custom joinery, skilled craftsmanship, and thoughtful design.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/portfolio" className="btn-primary">
              See Case Studies
            </Link>
            <Link href="/contact" className="btn-secondary">
              Request A Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
    </section>
  );
}
