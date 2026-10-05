import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function ServicesOverview() {
  return (
    <section className="relative overflow-hidden bg-cream section-padding">
      {/* Abstract SVG decoration */}
      <svg
        className="pointer-events-none absolute -right-20 top-0 h-full w-1/2 opacity-40"
        viewBox="0 0 400 600"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M200 0C200 150 350 200 350 350C350 500 200 550 200 600"
          stroke="#D8B86A"
          strokeWidth="1.5"
          opacity="0.5"
        />
        <path
          d="M250 0C250 120 380 180 380 300C380 420 250 480 250 600"
          stroke="#D8B86A"
          strokeWidth="1"
          opacity="0.3"
        />
        <path
          d="M300 0C300 100 400 160 400 280C400 400 300 460 300 600"
          stroke="#D8B86A"
          strokeWidth="0.8"
          opacity="0.2"
        />
        <circle cx="350" cy="300" r="120" stroke="#D8B86A" strokeWidth="1" opacity="0.15" />
        <circle cx="350" cy="300" r="80" stroke="#D8B86A" strokeWidth="0.8" opacity="0.1" />
      </svg>

      <div className="container-content relative z-10">
        <SectionHeading
          eyebrow="What We Do"
          title="We Offer a Complete Range of Decorating & Renovation Services"
          description="All handled by qualified, experienced tradespeople."
          linkText="Explore Services"
          linkHref="/services"
        />
      </div>
    </section>
  );
}
