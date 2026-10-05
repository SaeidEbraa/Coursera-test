import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className="bg-white section-padding">
      <div className="container-content">
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <span className="label-eyebrow">Reviews</span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="heading-2 text-charcoal max-w-3xl mx-auto">
            What Canberra &amp; Queanbeyan Homeowners Say About Our Bathroom Renovations, Kitchens &amp; Joinery Services
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-[3px] border border-charcoal/10 bg-cream/40 p-7"
            >
              <div className="mb-4 flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="flex-1 text-base leading-relaxed text-charcoal/75">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-charcoal/10 pt-4">
                <div className="font-heading text-base font-bold text-charcoal">{testimonial.name}</div>
                <div className="mt-0.5 text-sm text-gold">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
