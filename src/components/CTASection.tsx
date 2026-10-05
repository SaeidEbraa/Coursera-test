import Link from 'next/link';
import { Phone } from 'lucide-react';
import { SITE } from '@/lib/data';

export default function CTASection() {
  return (
    <section className="bg-charcoal py-20 md:py-28">
      <div className="container-content text-center">
        <div className="mx-auto mb-5 h-px w-12 bg-gold" />
        <h2 className="heading-2 text-white">Ready to Transform Your Space?</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
          Tell us what you&rsquo;re planning and we&rsquo;ll help you turn your ideas into reality.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact" className="btn-primary">
            Request A Quote
          </Link>
          <a href={SITE.phoneHref} className="btn-secondary">
            <Phone className="mr-2 h-4 w-4" />
            Call {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
