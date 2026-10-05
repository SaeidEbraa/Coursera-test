import ServiceCard from './ServiceCard';
import { IMAGES } from '@/lib/data';

export default function MainServiceCards() {
  const cards = [
    {
      title: 'Residential Painting & Decorating',
      description:
        'Our residential team specialises in transforming homes with high-quality painting, wallpapering and decorative finishes.',
      image: IMAGES.residential,
      href: '/services/painting-decorating',
      alt: 'Beautifully decorated residential living room',
    },
    {
      title: 'Commercial Painting & Decorating',
      description:
        'We provide reliable decorating services for offices, retail spaces, schools and property developments.',
      image: IMAGES.commercial,
      href: '/services/painting-decorating',
      alt: 'Professionally decorated commercial office space',
    },
    {
      title: 'Home Renovations',
      description:
        'From small improvements to complete renovation projects, we deliver practical and beautiful results.',
      image: IMAGES.renovation,
      href: '/services/renovations',
      alt: 'Newly renovated modern kitchen',
    },
  ];

  return (
    <section className="bg-canvas section-padding">
      <div className="container-content">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <ServiceCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
