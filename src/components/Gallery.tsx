'use client';

import { useState, useCallback, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '@/lib/data';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredItems.length
    );
  }, [filteredItems.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
    );
  }, [filteredItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <section className="bg-canvas section-padding">
      <div className="container-content">
        {/* Filter buttons */}
        <div className="no-scrollbar mb-10 flex gap-2 overflow-x-auto pb-2 sm:justify-center sm:flex-wrap">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap rounded-[3px] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-gold text-white'
                  : 'border border-charcoal/15 text-charcoal/60 hover:border-gold hover:text-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative block w-full overflow-hidden rounded-[3px]"
            >
              <img
                src={item.image}
                alt={`${item.title} - ${item.location}`}
                loading="lazy"
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="font-heading text-base font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gold">{item.location}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio gallery"
        >
          <button
            className="absolute right-4 top-4 text-white/80 transition-colors hover:text-white"
            onClick={closeLightbox}
            aria-label="Close gallery"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 transition-colors hover:text-white"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 transition-colors hover:text-white"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next image"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          <figure className="max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredItems[lightboxIndex].image}
              alt={`${filteredItems[lightboxIndex].title} - ${filteredItems[lightboxIndex].location}`}
              className="max-h-[80vh] w-auto rounded-[3px] object-contain"
            />
            <figcaption className="mt-4 text-center">
              <p className="text-white">{filteredItems[lightboxIndex].title}</p>
              <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                {filteredItems[lightboxIndex].location}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
