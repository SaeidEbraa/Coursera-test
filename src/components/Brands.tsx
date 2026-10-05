import { BRANDS } from '@/lib/data';

export default function Brands() {
  return (
    <section className="bg-cream py-16">
      <div className="container-content">
        <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-6">
          {BRANDS.map((brand) => (
            <div key={brand.name} className="flex items-center justify-center">
              <img
                src={brand.image}
                alt={`${brand.name} — premium brand partner of CanDo House`}
                loading="lazy"
                className="max-h-16 w-auto object-contain opacity-70 transition-opacity hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
