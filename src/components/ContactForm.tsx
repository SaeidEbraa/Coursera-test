'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Check } from 'lucide-react';
import { SITE } from '@/lib/data';

const PROJECT_TYPES = [
  'Painting & Decorating',
  'Renovation',
  'Kitchen',
  'Bathroom',
  'Plastering',
  'Tiling',
  'Carpentry',
  'Property Maintenance',
  'Commercial',
  'Other',
];

type Errors = Record<string, string>;

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) {
      e.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address';
    }
    if (!form.phone.trim()) {
      e.phone = 'Please enter your phone number';
    } else if (!/^[0-9+\s()-]{7,}$/.test(form.phone)) {
      e.phone = 'Please enter a valid phone number';
    }
    if (!form.projectType) e.projectType = 'Please select a project type';
    if (!form.message.trim()) e.message = 'Please enter a message';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-[3px] bg-cream p-8 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-white">
          <Check className="h-7 w-7 text-gold" />
        </div>
        <h3 className="font-heading text-xl font-bold text-charcoal">Thank You!</h3>
        <p className="mt-2 max-w-sm text-charcoal/65">
          Your enquiry has been received. We&apos;ll be in touch within 24 hours to discuss your project.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: '', email: '', phone: '', projectType: '', message: '' });
          }}
          className="mt-6 text-sm font-semibold uppercase tracking-wider text-gold hover:text-[#b89e4a]"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-[3px] bg-cream p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal">
            Name <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            aria-invalid={!!errors.name}
            className={`w-full rounded-[3px] border bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-gold ${
              errors.name ? 'border-red-400' : 'border-charcoal/15'
            }`}
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal">
            Email <span className="text-gold">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            aria-invalid={!!errors.email}
            className={`w-full rounded-[3px] border bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-gold ${
              errors.email ? 'border-red-400' : 'border-charcoal/15'
            }`}
            placeholder="your@email.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal">
            Phone <span className="text-gold">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            aria-invalid={!!errors.phone}
            className={`w-full rounded-[3px] border bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-gold ${
              errors.phone ? 'border-red-400' : 'border-charcoal/15'
            }`}
            placeholder="Your phone number"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="projectType" className="mb-1.5 block text-sm font-medium text-charcoal">
            Project Type <span className="text-gold">*</span>
          </label>
          <select
            id="projectType"
            value={form.projectType}
            onChange={(e) => handleChange('projectType', e.target.value)}
            aria-invalid={!!errors.projectType}
            className={`w-full rounded-[3px] border bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-gold ${
              errors.projectType ? 'border-red-400' : 'border-charcoal/15'
            }`}
          >
            <option value="">Select a project type</option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.projectType && <p className="mt-1 text-xs text-red-500">{errors.projectType}</p>}
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal">
          Message <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => handleChange('message', e.target.value)}
          aria-invalid={!!errors.message}
          className={`w-full resize-none rounded-[3px] border bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-gold ${
            errors.message ? 'border-red-400' : 'border-charcoal/15'
          }`}
          placeholder="Tell us about your project..."
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>
      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        Send Enquiry
      </button>
    </form>
  );
}

export function ContactInfo() {
  return (
    <div className="flex h-full flex-col justify-center p-6 md:p-8">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-10 bg-gold" />
        <span className="label-eyebrow text-gold">Get a Free Quote</span>
      </div>
      <h2 className="heading-2 text-white">Tell us about your project and we&apos;ll get back to you.</h2>
      <div className="mt-10 space-y-6">
        <a href={SITE.phoneHref} className="flex items-start gap-4 group">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[3px] border border-gold/30">
            <Phone className="h-5 w-5 text-gold" strokeWidth={1.5} />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-white/40">Phone</div>
            <div className="mt-0.5 text-lg text-white group-hover:text-gold transition-colors">{SITE.phone}</div>
          </div>
        </a>
        <a href={SITE.emailHref} className="flex items-start gap-4 group">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[3px] border border-gold/30">
            <Mail className="h-5 w-5 text-gold" strokeWidth={1.5} />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-white/40">Email</div>
            <div className="mt-0.5 text-lg text-white group-hover:text-gold transition-colors">{SITE.email}</div>
          </div>
        </a>
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[3px] border border-gold/30">
            <MapPin className="h-5 w-5 text-gold" strokeWidth={1.5} />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-white/40">Location</div>
            <div className="mt-0.5 text-lg text-white">{SITE.location}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
