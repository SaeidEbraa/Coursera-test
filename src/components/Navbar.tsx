'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { SITE } from '@/lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink/95 shadow-lg shadow-black/30 backdrop-blur-md'
          : 'bg-ink'
      }`}
    >
      <nav className="container-content flex h-20 items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center gap-0.5" aria-label="CanDo House home">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-[3px] bg-gold text-ink font-heading text-sm font-bold">
              CD
            </span>
            <span className="font-heading text-base font-bold uppercase tracking-[0.1em] text-white">
              CanDo House
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {SITE.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium uppercase tracking-wider text-white/70 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4" />
            {SITE.phone}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-ink lg:hidden">
          <div className="container-content flex flex-col gap-2 py-8">
            {SITE.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-white/10 py-4 text-lg font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-gold"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={SITE.phoneHref}
              className="mt-4 flex items-center gap-2 text-base font-semibold text-gold"
            >
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
