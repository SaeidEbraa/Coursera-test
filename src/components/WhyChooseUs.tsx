import { Layers, HeartHandshake, Award, CalendarCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';

const BENEFITS = [
  {
    title: 'Comprehensive Expertise',
    description: 'From custom joinery and carpentry to full home extensions, all work is handled in one place.',
    icon: Layers,
  },
  {
    title: 'Tailored Approach',
    description: 'We listen to your needs and adapt our work around your home, budget and lifestyle.',
    icon: HeartHandshake,
  },
  {
    title: 'Quality Craftsmanship',
    description: 'Professional workmanship with attention to detail in every project we undertake.',
    icon: Award,
  },
  {
    title: 'Reliable Service',
    description: 'Clear communication, dependable scheduling and a professional finish every time.',
    icon: CalendarCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-ink section-padding">
      <div className="container-content">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Choose CanDo House?"
          align="center"
          light
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-ink-card">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-lg font-bold uppercase text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
