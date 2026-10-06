import { Brush, Grid3x3, Ruler, DoorClosed, Hammer } from 'lucide-react';
import SectionHeading from './SectionHeading';

const SERVICES = [
  {
    title: 'Plastering',
    description: 'Full-room skimming, ceiling repairs and rendering for flawless surfaces.',
    icon: Brush,
  },
  {
    title: 'Tiling',
    description: 'Kitchen splashbacks, bathroom walls and floor tiling in a variety of finishes.',
    icon: Grid3x3,
  },
  {
    title: 'Carpentry & Joinery',
    description: 'Bespoke storage, shelving and cabinetry for style and practicality.',
    icon: Ruler,
  },
  {
    title: 'Kitchen & Bathroom',
    description: 'Beautiful upgrades and practical improvements designed around your home.',
    icon: DoorClosed,
  },
  {
    title: 'Property Maintenance',
    description: 'Reliable maintenance and repair services for residential and commercial properties.',
    icon: Hammer,
  },
];

export default function AdditionalServices() {
  return (
    <section className="bg-ink-card section-padding">
      <div className="container-content">
        <SectionHeading
          eyebrow="More Services"
          title="Additional Repairs, Renovations & More"
          description="Every service is delivered with the same commitment to precision, professionalism and quality."
          light
          align="center"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-[3px] border border-white/10 bg-ink-elevated p-7 transition-colors hover:border-gold/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[3px] border border-gold/30">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-lg font-bold uppercase text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{service.description}</p>
              </div>
            );
          })}
          {/* Filler card for grid alignment */}
          <div className="hidden rounded-[3px] border border-white/5 bg-ink-elevated/50 p-7 lg:flex lg:items-end">
            <p className="text-sm text-white/40">
              Need something else? <span className="text-gold">Get in touch</span> — we cover it all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
