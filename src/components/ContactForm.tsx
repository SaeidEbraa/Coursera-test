'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

type Errors = Record<string, string>;

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
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
      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-[3px] border border-white/10 bg-ink-card p-8 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-ink-elevated">
          <Check className="h-7 w-7 text-gold" />
        </div>
        <h3 className="font-heading text-xl font-bold text-white">Thank You!</h3>
        <p className="mt-2 max-w-sm text-white/60">
          Your enquiry has been received. We&rsquo;ll be in touch within 24 hours to discuss your project.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: '', email: '', phone: '', message: '' });
          }}
          className="mt-6 text-sm font-semibold uppercase tracking-wider text-gold hover:text-white"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-[3px] border border-white/10 bg-ink-card p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gold">
            Your Name *
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            aria-invalid={!!errors.name}
            className={`w-full border-b bg-transparent px-0 py-3 text-sm text-white outline-none transition-colors focus:border-gold ${
              errors.name ? 'border-red-400' : 'border-white/20'
            }`}
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gold">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            aria-invalid={!!errors.email}
            className={`w-full border-b bg-transparent px-0 py-3 text-sm text-white outline-none transition-colors focus:border-gold ${
              errors.email ? 'border-red-400' : 'border-white/20'
            }`}
            placeholder="your@email.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gold">
            Phone No *
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            aria-invalid={!!errors.phone}
            className={`w-full border-b bg-transparent px-0 py-3 text-sm text-white outline-none transition-colors focus:border-gold ${
              errors.phone ? 'border-red-400' : 'border-white/20'
            }`}
            placeholder="Your phone number"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gold">
          Your Message Here *
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => handleChange('message', e.target.value)}
          aria-invalid={!!errors.message}
          className={`w-full resize-none border-b bg-transparent px-0 py-3 text-sm text-white outline-none transition-colors focus:border-gold ${
            errors.message ? 'border-red-400' : 'border-white/20'
          }`}
          placeholder="Write your message here..."
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>
      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        Send Message Now
      </button>
    </form>
  );
}
