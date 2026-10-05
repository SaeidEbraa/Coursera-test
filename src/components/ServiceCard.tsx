import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Props = {
  title: string;
  description: string;
  image: string;
  href: string;
  alt: string;
};

export default function ServiceCard({ title, description, image, href, alt }: Props) {
  return (
    <Link
      href={href}
      className="group relative block aspect-[3/4] overflow-hidden rounded-[3px]"
    >
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
        <div className="h-px w-10 bg-gold transition-all duration-500 group-hover:w-16" />
        <h3 className="mt-4 font-heading text-xl font-bold text-white md:text-2xl">
          {title}
        </h3>
        <p className="mt-2 max-h-0 overflow-hidden text-sm text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          Learn More <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
