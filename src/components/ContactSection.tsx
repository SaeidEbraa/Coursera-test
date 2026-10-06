import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';
import { SITE } from '@/lib/data';

export default function ContactSection() {
  return (
    <section className="bg-ink section-padding">
      <div className="container-content">
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <span className="label-eyebrow">Contact</span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="heading-2 text-white">Contact Us Anytime, We Are Always There For You</h2>
        </div>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Form */}
          <ContactForm />
          {/* Contact info */}
          <div className="flex flex-col justify-center gap-8">
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold">Address</h3>
              <p className="text-base text-white/70">{SITE.address}</p>
            </div>
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold">Contact</h3>
              <div className="space-y-2">
                <a href={SITE.emailHref} className="flex items-center gap-3 text-base text-white/70 transition-colors hover:text-gold">
                  <Mail className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  {SITE.email}
                </a>
                <a href={SITE.phoneHref} className="flex items-center gap-3 text-base text-white/70 transition-colors hover:text-gold">
                  <Phone className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  {SITE.phone}
                </a>
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold">Location</h3>
              <div className="flex items-center gap-3 text-base text-white/70">
                <MapPin className="h-5 w-5 text-gold" strokeWidth={1.5} />
                {SITE.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
