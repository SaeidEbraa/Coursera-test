import { IMAGES, STATS } from '@/lib/data';

export default function AboutSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-content">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[3px]">
              <img
                src={IMAGES.about}
                alt="Professional painter at work on a renovation project"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-[3px] border border-gold/30 bg-canvas p-6 shadow-lg md:block lg:-right-6">
              <div className="flex items-center gap-6">
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-heading text-3xl font-bold text-charcoal">{stat.value}</div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wider text-charcoal/50">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="label-eyebrow">About RT Renovations</span>
            </div>
            <h2 className="heading-2 text-charcoal">Professional Work. Personal Service.</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal/70">
              <p>
                RT Renovations provides professional painting, decorating, renovation and maintenance
                services across North Kent and London. With over a decade of experience, we have built
                a reputation for quality workmanship and genuine customer care.
              </p>
              <p>
                Every project, large or small, receives the same attention to detail. We take pride in
                clean, efficient work and clear communication from the first quote to the final finish.
                Our team of qualified tradespeople covers every aspect of home improvement under one roof.
              </p>
              <p>
                We believe that a beautiful home should be accessible and stress-free to achieve. That is
                why we work closely with you at every stage, ensuring the result matches your vision and
                stands the test of time.
              </p>
            </div>

            {/* Stats for mobile */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-charcoal/10 pt-8 md:hidden">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading text-2xl font-bold text-charcoal">{stat.value}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-charcoal/50">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
