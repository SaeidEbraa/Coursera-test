import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/data';

export default function MainServiceCards() {
  return (
    <section className="bg-ink-card section-padding">
      <div className="container-content">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-[3px] border border-white/10 bg-ink-elevated p-7 transition-all hover:border-gold/40 hover:shadow-lg hover:shadow-black/20"
            >
              <h3 className="font-heading text-lg font-bold uppercase text-white">{service.shortTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">{service.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
                Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
