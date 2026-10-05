import Link from 'next/link';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { SITE } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-content py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-[3px] bg-green text-white font-heading text-sm font-bold">
                CD
              </span>
              <span className="font-heading text-sm font-bold uppercase tracking-[0.1em] text-white">
                CanDo House
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Canberra and Queanbeyan&rsquo;s trusted renovation and building expert, specialising in
              custom joinery, bathroom renovations, kitchen remodels, and home extensions.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-[3px] border border-white/15 transition-colors hover:border-gold hover:text-gold"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-[3px] border border-white/15 transition-colors hover:border-gold hover:text-gold"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {SITE.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/50 transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-3">
              {SITE.footerServices.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-white/50 transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href={SITE.phoneHref} className="flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-gold">
                  <Phone className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={SITE.emailHref} className="flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-gold">
                  <Mail className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <MapPin className="h-4 w-4 text-gold" strokeWidth={1.5} />
                {SITE.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">&copy; CanDo House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
