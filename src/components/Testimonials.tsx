'use client';

import { useState, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';

export default function Testimonials() {
  const perView = 3;
  const maxIndex = Math.max(0, TESTIMONIALS.length - perView);
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

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

        <div className="relative">
          {/* Slider viewport */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * (100 / perView)}%)` }}
            >
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="w-1/3 flex-shrink-0 px-3"
                >
                  <div className="flex h-full flex-col rounded-[3px] border border-charcoal/10 bg-cream/40 p-7">
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
                </div>
              ))}
            </div>
          </div>

          {/* Arrow buttons */}
          <button
            onClick={prev}
            aria-label="Previous reviews"
            className="absolute -left-5 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 bg-white text-charcoal shadow-sm transition-all hover:border-gold hover:bg-gold hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next reviews"
            className="absolute -right-5 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 bg-white text-charcoal shadow-sm transition-all hover:border-gold hover:bg-gold hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to review group ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                current === i ? 'w-8 bg-gold' : 'w-2 bg-charcoal/20 hover:bg-charcoal/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
