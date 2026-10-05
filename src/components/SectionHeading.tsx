import { ArrowRight } from 'lucide-react';

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  linkText?: string;
  linkHref?: string;
  align?: 'left' | 'center';
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  linkText,
  linkHref,
  align = 'left',
  light = false,
}: Props) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <div className={`mb-4 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="h-px w-10 bg-gold" />
          <span className={`label-eyebrow ${light ? 'text-gold' : ''}`}>{eyebrow}</span>
        </div>
      )}
      <h2 className={`heading-2 ${light ? 'text-white' : 'text-charcoal'}`}>{title}</h2>
      {description && (
        <p className={`mt-5 text-lg ${light ? 'text-white/70' : 'text-charcoal/65'}`}>
          {description}
        </p>
      )}
      {linkText && linkHref && (
        <a
          href={linkHref}
          className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition-colors ${
            light ? 'text-gold hover:text-[#e8c87a]' : 'text-gold hover:text-[#9a7460]'
          }`}
        >
          {linkText}
          <ArrowRight className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}
