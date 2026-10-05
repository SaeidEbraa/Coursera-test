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
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-content relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Canberra and Queanbeyan&rsquo;s trusted renovation and building expert
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85 md:text-xl">
            We transform homes through a seamless blend of custom joinery, skilled craftsmanship, and thoughtful design.
          </p>
          <div className="mt-10">
            <Link href="/portfolio" className="btn-primary">
              See Case Studies
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-canvas to-transparent" />
    </section>
  );
}
