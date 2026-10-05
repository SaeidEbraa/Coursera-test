import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function ServicesOverview() {
  return (
    <section className="relative overflow-hidden bg-cream section-padding">
      <div className="container-content relative z-10">
        <SectionHeading
          eyebrow="Services"
          title="We are here to guide you from the first sketch to the final screw"
          description="Whether it's a complete renovation or a custom-built feature, our expert team is with you every step of the way."
          linkText="View All Services"
          linkHref="/services"
        />
      </div>
    </section>
  );
}
