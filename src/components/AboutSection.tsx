import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { IMAGES } from '@/lib/data';

export default function AboutSection() {
  const bullets = [
    'Custom Bathroom & Kitchen Renovations',
    'Expert Joinery & Carpentry Services',
    'Tailored Home Extensions & Additions',
    'Functional Design, High-Quality Workmanship',
  ];

  return (
    <section className="bg-ink-card section-padding">
      <div className="container-content">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-[3px]">
              <img
                src={IMAGES.hero}
                alt="Kitchen renovation by CanDo House"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[3px]">
              <img
                src={IMAGES.aboutSecondary}
                alt="Custom home build by CanDo House"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="label-eyebrow">About Us</span>
            </div>
            <h2 className="heading-2 text-white">
              Over 10 Years of Experience Gained
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/60">
              <p>
                CanDo House is Canberra and Queanbeyan&rsquo;s trusted renovation and building expert,
                specializing in custom joinery, bathroom renovations, kitchen remodels, and home
                extensions. Our skilled team of designers, builders, and carpenters work together to
                turn your renovation dreams into reality — with tailored solutions for every space and
                style.
              </p>
              <p>
                We&rsquo;re committed to delivering quality, value, and timeless craftsmanship, whether
                it&rsquo;s a full home makeover or a custom-built cabinet.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
                  <span className="text-sm font-medium text-white/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/about" className="btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
