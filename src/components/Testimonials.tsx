'use client';

import { useState, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  const active = TESTIMONIALS[current];
  const initials = active.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <section className="section-padding bg-charcoal">
      <div className="container-content">
        {/* Heading */}
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <span className="label-eyebrow text-gold">Reviews</span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="heading-2 text-white max-w-3xl mx-auto">
            What Canberra &amp; Queanbeyan Homeowners Say
          </h2>
        </div>

        {/* Slider */}
        <div className="relative mx-auto max-w-3xl">
          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Previous review"
            className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-gold hover:bg-gold hover:text-charcoal sm:-left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Slide content */}
          <div className="px-12 py-8 text-center sm:px-16">
            {/* Circular avatar */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold bg-charcoal/40 font-heading text-2xl font-bold text-gold">
              {initials}
            </div>

            {/* Stars */}
            <div className="mb-5 flex justify-center gap-1" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>

            {/* Quote icon */}
            <Quote className="mx-auto mb-4 h-8 w-8 text-gold/40" />

            {/* Quote text */}
            <blockquote className="mb-6 text-lg leading-relaxed text-white/80 sm:text-xl">
              {active.quote}
            </blockquote>

            {/* Name and role */}
            <div className="font-heading text-lg font-bold text-white">{active.name}</div>
            <div className="mt-1 text-sm uppercase tracking-wider text-gold">{active.role}</div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Next review"
            className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-gold hover:bg-gold hover:text-charcoal sm:-right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dot pagination */}
        <div className="mt-8 flex justify-center gap-2.5">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                current === i ? 'w-8 bg-gold' : 'w-2.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
