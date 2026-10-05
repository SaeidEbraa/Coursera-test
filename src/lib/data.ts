export const SITE = {
  name: 'RT Renovations',
  tagline: 'Transforming Homes With Quality, Care and Craftsmanship',
  phone: '0800 043 6989',
  phoneHref: 'tel:08000436989',
  email: 'info@example.com',
  emailHref: 'mailto:info@example.com',
  location: 'North Kent, London & surrounding areas',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Our Work', href: '/our-work' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  footerServices: [
    { label: 'Painting', href: '/services/painting-decorating' },
    { label: 'Decorating', href: '/services/painting-decorating' },
    { label: 'Renovations', href: '/services/renovations' },
    { label: 'Plastering', href: '/services/plastering' },
    { label: 'Tiling', href: '/services/tiling' },
    { label: 'Carpentry', href: '/services/carpentry' },
    { label: 'Maintenance', href: '/services/property-maintenance' },
  ],
};

const U = 'https://images.unsplash.com/';

export const IMAGES = {
  hero: `${U}photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=1920&q=80`,
  residential: `${U}photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80`,
  commercial: `${U}photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80`,
  renovation: `${U}photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80`,
  about: `${U}photo-1503602642458-232111445657?auto=format&fit=crop&w=1000&q=80`,
  cta: `${U}photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=1920&q=80`,
};

export type ServiceItem = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
};

export const SERVICES: ServiceItem[] = [
  {
    slug: 'painting-decorating',
    title: 'Residential & Commercial Painting and Decorating',
    shortTitle: 'Painting & Decorating',
    icon: 'Paintbrush',
    description: 'High-quality painting, wallpapering and decorative finishes for homes and businesses.',
    longDescription:
      'Our team specialises in transforming homes and commercial spaces with high-quality painting, wallpapering and decorative finishes. We use premium materials and proven techniques to deliver flawless, long-lasting results.',
    features: [
      'Interior and exterior painting',
      'Wallpaper hanging and removal',
      'Specialist decorative finishes',
      'Surface preparation and repairs',
      'Colour consultation and advice',
    ],
    image: `${U}photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80`,
  },
  {
    slug: 'renovations',
    title: 'Home Renovations',
    shortTitle: 'Home Renovations',
    icon: 'Home',
    description: 'From small improvements to complete renovation projects, we deliver practical and beautiful results.',
    longDescription:
      'From small improvements to complete renovation projects, we deliver practical and beautiful results. Our experienced team manages every stage of your renovation, ensuring quality workmanship and a seamless experience from start to finish.',
    features: [
      'Full home renovations',
      'Room conversions and extensions',
      'Project management',
      'Design and planning support',
      'Quality tradesperson coordination',
    ],
    image: `${U}photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80`,
  },
  {
    slug: 'plastering',
    title: 'Plastering',
    shortTitle: 'Plastering',
    icon: 'Trowel',
    description: 'Full-room skimming, ceiling repairs and rendering for flawless surfaces.',
    longDescription:
      'Full-room skimming, ceiling repairs and rendering for flawless surfaces. Our plastering services create the perfect foundation for any decorating or renovation project, ensuring smooth, durable finishes that stand the test of time.',
    features: [
      'Full-room skimming',
      'Ceiling repairs and plastering',
      'External rendering',
      'Artex removal and smoothing',
      'Dry lining and boarding',
    ],
    image: `${U}photo-1505873242700-f289a29e1e0f?auto=format&fit=crop&w=1200&q=80`,
  },
  {
    slug: 'tiling',
    title: 'Tiling',
    shortTitle: 'Tiling',
    icon: 'Grid3x3',
    description: 'Kitchen splashbacks, bathroom walls and floor tiling in a variety of finishes.',
    longDescription:
      'Kitchen splashbacks, bathroom walls and floor tiling in a variety of finishes. We work with ceramic, porcelain, natural stone and mosaic tiles to create beautiful, waterproof surfaces that enhance any space.',
    features: [
      'Kitchen splashbacks',
      'Bathroom wall and floor tiling',
      'Natural stone and porcelain',
      'Mosaic and decorative tiling',
      'Underfloor heating installation',
    ],
    image: `${U}photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80`,
  },
  {
    slug: 'carpentry',
    title: 'Carpentry & Joinery',
    shortTitle: 'Carpentry & Joinery',
    icon: 'Ruler',
    description: 'Bespoke storage, shelving and cabinetry for style and practicality.',
    longDescription:
      'Bespoke storage, shelving and cabinetry for style and practicality. Our skilled carpenters and joiners craft custom woodwork tailored to your space, from fitted wardrobes to bespoke shelving and architectural joinery.',
    features: [
      'Bespoke shelving and storage',
      'Fitted wardrobes and cabinetry',
      'Skirting, architrave and doors',
      'Custom furniture making',
      'Wooden flooring installation',
    ],
    image: `${U}photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80`,
  },
  {
    slug: 'kitchen-bathroom',
    title: 'Kitchen & Bathroom',
    shortTitle: 'Kitchen & Bathroom',
    icon: 'DoorClosed',
    description: 'Beautiful upgrades and practical improvements designed around your home.',
    longDescription:
      'Beautiful upgrades and practical improvements designed around your home. From complete kitchen and bathroom installations to targeted upgrades, we deliver spaces that combine style, functionality and lasting quality.',
    features: [
      'Complete kitchen installations',
      'Bathroom fitting and upgrades',
      'Worktop and splashback fitting',
      'Sanitaryware and fixture installation',
      'Plumbing and electrical coordination',
    ],
    image: `${U}photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80`,
  },
  {
    slug: 'property-maintenance',
    title: 'Property Maintenance',
    shortTitle: 'Property Maintenance',
    icon: 'Hammer',
    description: 'Reliable maintenance and repair services for residential and commercial properties.',
    longDescription:
      'Reliable maintenance and repair services for residential and commercial properties. We provide ongoing maintenance support to keep your property in excellent condition, from minor repairs to comprehensive maintenance programmes.',
    features: [
      'General repairs and maintenance',
      'Preventative maintenance programmes',
      'Emergency call-out service',
      'Commercial property maintenance',
      'Periodic inspections and reporting',
    ],
    image: `${U}photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80`,
  },
];

export type GalleryItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  span: 'tall' | 'wide' | 'normal';
};

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, title: 'Modern Kitchen Renovation', category: 'Kitchens', image: `${U}photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80`, span: 'wide' },
  { id: 2, title: 'Living Room Painting', category: 'Painting', image: `${U}photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80`, span: 'tall' },
  { id: 3, title: 'Bathroom Refit', category: 'Bathrooms', image: `${U}photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80`, span: 'normal' },
  { id: 4, title: 'Office Decoration', category: 'Commercial', image: `${U}photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80`, span: 'wide' },
  { id: 5, title: 'Feature Wall Wallpapering', category: 'Decorating', image: `${U}photo-1522444195799-478538b28823?auto=format&fit=crop&w=600&q=80`, span: 'tall' },
  { id: 6, title: 'Open-Plan Renovation', category: 'Renovation', image: `${U}photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=800&q=80`, span: 'wide' },
  { id: 7, title: 'Kitchen Splashback Tiling', category: 'Renovation', image: `${U}photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80`, span: 'normal' },
  { id: 8, title: 'Hallway Painting', category: 'Painting', image: `${U}photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80`, span: 'tall' },
  { id: 9, title: 'Retail Space Decorating', category: 'Commercial', image: `${U}photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80`, span: 'wide' },
  { id: 10, title: 'Bathroom Tiling', category: 'Bathrooms', image: `${U}photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80`, span: 'normal' },
  { id: 11, title: 'Living Room Renovation', category: 'Renovation', image: `${U}photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=600&q=80`, span: 'tall' },
  { id: 12, title: 'Bedroom Decorating', category: 'Decorating', image: `${U}photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=600&q=80`, span: 'normal' },
];

export const GALLERY_CATEGORIES = ['All', 'Painting', 'Decorating', 'Renovation', 'Kitchens', 'Bathrooms', 'Commercial'];

export type Testimonial = {
  quote: string;
  name: string;
  project: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'RT Renovations completely transformed our living space. The attention to detail was outstanding and the team was professional from start to finish. We could not be happier with the results.',
    name: 'Sarah Mitchell',
    project: 'Living Room Renovation',
  },
  {
    quote: 'From the initial quote to the final coat of paint, everything was handled with care and precision. The team was punctual, tidy and genuinely skilled at what they do.',
    name: 'James Carter',
    project: 'Full House Decorating',
  },
  {
    quote: 'Our new kitchen is everything we hoped for and more. RT Renovations managed the entire project seamlessly, keeping us informed at every stage. Highly recommended.',
    name: 'Emma Roberts',
    project: 'Kitchen Renovation',
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'prepare-home-professional-paint-job',
    title: 'How to Prepare Your Home for a Professional Paint Job',
    category: 'Painting Tips',
    excerpt: 'Proper preparation is the key to a flawless finish. Here is everything you need to do before the painters arrive.',
    date: '15 September 2026',
    readTime: '5 min read',
    image: `${U}photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80`,
    content: [
      'A professional paint job starts long before the first brush touches the wall. Proper preparation ensures a smooth, durable finish that will look great for years to come.',
      'The first step is clearing the space. Remove furniture where possible, or move it to the centre of the room and cover it with dust sheets. Take down curtains, blinds, pictures and fixtures from the walls.',
      'Next, clean the surfaces thoroughly. Dust, grease and grime will prevent paint from adhering properly. Wash walls with a mild detergent solution and allow them to dry completely.',
      'Fill any cracks, holes or imperfections with a quality filler. Once dry, sand the filled areas smooth. This is also the time to address any damp issues or structural problems.',
      'Finally, protect floors, skirting boards and fixtures with quality masking tape and dust sheets. Professional painters will handle this, but knowing what to expect helps you plan your time around the work.',
    ],
  },
  {
    slug: '5-things-consider-before-renovating-kitchen',
    title: '5 Things to Consider Before Renovating Your Kitchen',
    category: 'Renovation Guide',
    excerpt: 'Thinking about a new kitchen? These five considerations will help you plan a renovation that delivers on style and practicality.',
    date: '8 September 2026',
    readTime: '6 min read',
    image: `${U}photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80`,
    content: [
      'A kitchen renovation is one of the most rewarding investments you can make in your home. But before you start, careful planning will save you time, money and stress.',
      '1. Set a realistic budget. Kitchens can vary enormously in cost. Decide what matters most to you — worktops, appliances, cabinetry — and allocate your budget accordingly.',
      '2. Think about how you use the space. Do you cook daily? Entertain often? Need space for a growing family? Your kitchen should be designed around your lifestyle, not just aesthetics.',
      '3. Consider the work triangle. The relationship between the sink, hob and fridge is fundamental to a functional kitchen. Keep these elements close but not cramped.',
      '4. Do not underestimate lighting. Layer task, ambient and accent lighting to create a space that is both practical and inviting.',
      '5. Choose quality tradespeople. A beautiful design is only as good as its installation. Work with experienced professionals who understand every stage of the process.',
    ],
  },
  {
    slug: 'painting-trends-modern-homes',
    title: 'Painting Trends for Modern Homes',
    category: 'Design Trends',
    excerpt: 'From earthy neutrals to bold accent walls, explore the painting trends shaping contemporary interiors this year.',
    date: '1 September 2026',
    readTime: '4 min read',
    image: `${U}photo-1522444195799-478538b28823?auto=format&fit=crop&w=800&q=80`,
    content: [
      'Paint trends evolve year by year, reflecting broader shifts in design, lifestyle and culture. Here are the directions shaping modern homes right now.',
      'Earthy, grounding neutrals continue to dominate. Think warm terracottas, soft clays and muted greens that bring a sense of calm and connection to nature.',
      'Deep, moody accent walls remain popular for adding drama and depth. Charcoal, navy and forest green create striking focal points in living rooms and bedrooms.',
      'Two-tone walls are gaining traction, with a darker shade below and a lighter one above, often divided by a chair rail or wood panelling.',
      'Matte and low-sheen finishes are preferred over high-gloss for a sophisticated, contemporary look that hides imperfections and feels premium.',
      'Ultimately, the best trend is the one that suits your home and lifestyle. A professional decorator can help you choose colours and finishes that will stand the test of time.',
    ],
  },
  {
    slug: 'choose-right-finish-walls',
    title: 'How to Choose the Right Finish for Your Walls',
    category: 'Painting Tips',
    excerpt: 'Matte, eggshell, satin or gloss? Understanding paint finishes will help you make the right choice for every room.',
    date: '22 August 2026',
    readTime: '5 min read',
    image: `${U}photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=800&q=80`,
    content: [
      'Choosing the right paint finish is just as important as choosing the right colour. The finish affects not only the look but also the durability and maintenance of your walls.',
      'Matte finish offers a flat, non-reflective surface that hides imperfections beautifully. It is ideal for ceilings and low-traffic areas like bedrooms and dining rooms.',
      'Eggshell has a subtle sheen that is slightly more durable than matte. It is a versatile choice for living rooms, hallways and most interior walls.',
      'Satin finish provides a soft, velvety sheen that is easy to clean. It works well in kitchens, bathrooms and children\'s rooms where walls need regular wiping.',
      'Semi-gloss and gloss finishes are highly reflective and very durable. They are best suited to trim, doors, skirting boards and cabinetry rather than large wall areas.',
      'When in doubt, consult a professional. The right finish depends on the room, the surface condition, lighting and your lifestyle.',
    ],
  },
];

export const STATS = [
  { value: '10+', label: 'Years Experience' },
  { value: '100+', label: 'Projects Completed' },
  { value: '5★', label: 'Customer Service' },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Comprehensive Expertise',
    description: 'From plastering and flooring to full renovations, all work is handled in one place.',
    icon: 'Layers',
  },
  {
    title: 'Tailored Approach',
    description: 'We listen to your needs and adapt our work around your home, budget and lifestyle.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Quality Craftsmanship',
    description: 'Professional workmanship with attention to detail in every project we undertake.',
    icon: 'Award',
  },
  {
    title: 'Reliable Service',
    description: 'Clear communication, dependable scheduling and a professional finish every time.',
    icon: 'CalendarCheck',
  },
];
