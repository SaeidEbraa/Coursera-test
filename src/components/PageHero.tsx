import Link from 'next/link';

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  alt: string;
};

export default function PageHero({ eyebrow, title, description, image, alt }: Props) {
  return (
    <section className="relative flex min-h-[50vh] items-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
      </div>
      <div className="container-content relative z-10 py-20">
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <span className="label-eyebrow text-white/90">{eyebrow}</span>
          </div>
          <h1 className="font-heading text-3xl font-bold leading-[1.15] text-white md:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-lg text-white/75">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
