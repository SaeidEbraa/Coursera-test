const API = 'https://app-candohouse-api-prod-g4a9bqehgehhcdhz.australiaeast-01.azurewebsites.net/Media/Uploads/';

export const SITE = {
  name: 'CanDo House',
  tagline: 'Canberra and Queanbeyan’s trusted renovation and building expert',
  phone: '+61 0491 718 414',
  phoneHref: 'tel:+610491718414',
  email: 'office@candohouse.com.au',
  emailHref: 'mailto:office@candohouse.com.au',
  address: '234 Beasley Street, Farrer ACT 2607',
  location: 'Canberra & Queanbeyan',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
  ],
  footerServices: [
    { label: 'Home Builders', href: '/services/home-builders' },
    { label: 'Kitchen Remodels', href: '/services/kitchen-remodels' },
    { label: 'Bathroom Renovations', href: '/services/bathroom-renovations' },
    { label: 'Custom Joinery', href: '/services/custom-joinery' },
    { label: 'Decking Builders', href: '/services/decking-builders' },
    { label: 'Pergolas Builders', href: '/services/pergola-builders' },
  ],
};

export const IMAGES = {
  hero: `${API}kitchen-renovation-canberra-modern-design-candohouse.jpg`,
  heroSecondary: `${API}kitchen-renovation-design-concept-canberra-candohouse.jpg`,
  about: `${API}ando-house-custom-home-taylor-canberra-living-room-interior.jpg`,
  aboutSecondary: `${API}30b182e2-6842-43be-992e-b7bd8b87692d.jpeg`,
  cta: `${API}img-1181.jpg`,
};

export type ServiceItem = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
};

export const SERVICES: ServiceItem[] = [
  {
    slug: 'home-builders',
    title: 'Home Builders',
    shortTitle: 'Home Builders',
    description: 'Build your dream home with trusted custom home builders in Canberra. We design and construct homes tailored to your lifestyle, budget, and vision.',
    longDescription:
      'Build your dream home with trusted custom home builders in Canberra. We design and construct homes tailored to your lifestyle, budget, and vision. Our experienced team handles every stage of the building process, from initial design and planning through to construction and final handover.\n\nWe take pride in delivering homes that are not only beautiful but also functional, durable, and built to last. Whether you are building a new family home, a downsizer, or an investment property, we work closely with you to bring your vision to life.\n\nOur Canberra home building team manages everything — site preparation, framing, fit-out, and finishing — ensuring quality workmanship and clear communication at every step.',
    features: [
      'Custom home design and construction',
      'Tailored to your lifestyle and budget',
      'Full project management from start to finish',
      'Quality workmanship and durable materials',
      'Clear communication throughout the build',
    ],
    image: `${API}30b182e2-6842-43be-992e-b7bd8b87692d.jpeg`,
  },
  {
    slug: 'kitchen-remodels',
    title: 'Kitchen Remodels',
    shortTitle: 'Kitchen Remodels',
    description: 'From layout to cabinetry, we craft kitchens tailored to your needs—blending smart design with lasting function and modern style.',
    longDescription:
      'Upgrade your home with expert kitchen renovations in Canberra. We specialise in custom kitchen remodels that blend modern style, smart storage, and functional layouts—perfect for families, entertainers, or anyone looking to transform their space. From contemporary kitchen makeovers to full kitchen refurbishments, we do it all.\n\nOur Canberra kitchen renovation team handles every stage—from initial design and demolition to cabinetry, tiling, plumbing, and electrical works. Whether you are after a complete kitchen transformation or a small layout upgrade, we bring years of experience and attention to detail to every project.\n\nWondering about kitchen renovation cost in Canberra? We provide upfront, competitive pricing to match your budget and needs. Our transparent approach means no hidden fees—just beautiful results. Whether you are looking for a budget-friendly kitchen refurbishment or a high-end kitchen remodel, we have got you covered.',
    features: [
      'Functional & Stylish Kitchen Designs',
      'Kitchen Remodels for All Budgets',
      'Best Kitchen Renovations in Canberra',
      'Complete Kitchen Makeovers & Refurbishments',
      'Custom cabinetry, tiling, plumbing and electrical',
    ],
    image: `${API}kitchen-renovation-canberra-modern-custom-kitchen-candohouse.jpg`,
  },
  {
    slug: 'bathroom-renovations',
    title: 'Bathroom Renovations',
    shortTitle: 'Bathroom Renovations',
    description: 'We design and build beautiful, functional bathrooms tailored to your style and space perfect for everyday comfort and lasting value.',
    longDescription:
      'We design and build beautiful, functional bathrooms tailored to your style and space—perfect for everyday comfort and lasting value. Our Canberra bathroom renovation team handles everything from design and demolition to tiling, plumbing, and fixture installation.\n\nWhether you are updating a small family bathroom or creating a luxurious master ensuite, we deliver quality workmanship and attention to detail. We use premium materials and proven techniques to ensure your new bathroom looks great and functions perfectly for years to come.\n\nFrom modern minimalist designs to classic styles, we work with you to create a bathroom that suits your home, lifestyle, and budget.',
    features: [
      'Complete bathroom design and construction',
      'Tiling, plumbing and fixture installation',
      'Modern and classic styles to suit any home',
      'Premium materials and quality workmanship',
      'Tailored to your style, space and budget',
    ],
    image: `${API}img-0406.jpg`,
  },
  {
    slug: 'custom-joinery',
    title: 'Custom Joinery',
    shortTitle: 'Custom Joinery',
    description: 'Built-in wardrobes, cabinets, vanities, and shelving—our custom joinery brings style and precision to every part of your home.',
    longDescription:
      'Built-in wardrobes, cabinets, vanities, and shelving—our custom joinery brings style and precision to every part of your home. Our skilled joiners craft bespoke woodwork tailored to your space, combining functionality with beautiful finishes.\n\nFrom custom kitchen cabinetry to fitted wardrobes, entertainment units, and display shelving, we deliver joinery that enhances your home and meets your exact specifications. Every piece is made with premium materials and attention to detail.\n\nOur Canberra joinery team works closely with you to understand your storage needs, style preferences, and space constraints—ensuring the finished product is both practical and beautiful.',
    features: [
      'Built-in wardrobes and cabinetry',
      'Custom vanities and shelving',
      'Entertainment units and storage solutions',
      'Premium materials and precision finishes',
      'Tailored to your space and style',
    ],
    image: `${API}img-9651.png`,
  },
  {
    slug: 'decking-builders',
    title: 'Decking Builders Canberra',
    shortTitle: 'Decking Builders',
    description: 'Add value and comfort to your home with timber or composite decking—ideal for outdoor entertaining in Canberra.',
    longDescription:
      'Add value and comfort to your home with timber or composite decking—ideal for outdoor entertaining in Canberra. Our decking builders design and construct decks that complement your home and lifestyle, using quality materials built to withstand the elements.\n\nWhether you want a small patio deck or a large entertaining area, we handle everything from design and framing to boarding and finishing. We work with both timber and composite materials to suit your preferences and budget.\n\nOur Canberra decking team ensures every deck is structurally sound, visually appealing, and built to last—giving you a beautiful outdoor space to enjoy for years to come.',
    features: [
      'Timber and composite decking',
      'Custom deck design and construction',
      'Outdoor entertaining areas',
      'Quality materials built to last',
      'Tailored to your home and lifestyle',
    ],
    image: `${API}composite-deck-canberra-whitlam.jpg`,
  },
  {
    slug: 'pergola-builders',
    title: 'Pergolas Builders Canberra',
    shortTitle: 'Pergolas Builders',
    description: 'Enhance your outdoor space with pergolas in Canberra—built to last and tailored to your style, space, and budget.',
    longDescription:
      'Enhance your outdoor space with pergolas in Canberra—built to last and tailored to your style, space, and budget. Our pergola builders design and construct pergolas that provide shade, shelter, and a beautiful extension of your living space.\n\nFrom timber to steel-framed designs, we create pergolas that complement your home architecture and outdoor area. Whether you want a freestanding pergola or one attached to your home, we handle the entire process from design to construction.\n\nOur Canberra pergola team ensures every structure is engineered for durability, built with quality materials, and finished to the highest standard.',
    features: [
      'Timber and steel-framed pergolas',
      'Freestanding and attached designs',
      'Customised to your style and space',
      'Quality materials and durable construction',
      'Shade and shelter for outdoor living',
    ],
    image: `${API}custom-timber-pergola-installation-taylor-canberra.jpg`,
  },
];

export type PortfolioItem = {
  id: number;
  title: string;
  location: string;
  category: string;
  image: string;
  span: 'tall' | 'wide' | 'normal';
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, title: 'Bathroom Renovation', location: 'Isaacs, ACT', category: 'Bathroom', image: `${API}img-0406.jpg`, span: 'normal' },
  { id: 2, title: 'Decking', location: 'Whitlam, Canberra', category: 'Decking', image: `${API}composite-deck-canberra-whitlam.jpg`, span: 'wide' },
  { id: 3, title: 'New Home Build', location: 'Denman, Canberra', category: 'Home Build', image: `${API}30b182e2-6842-43be-992e-b7bd8b87692d.jpeg`, span: 'normal' },
  { id: 4, title: 'Composite Decking & Timber Pergola', location: 'Farrer, ACT', category: 'Decking', image: `${API}img-1181.jpg`, span: 'wide' },
  { id: 5, title: 'Kitchen Renovation', location: 'Red Hill, ACT', category: 'Kitchen', image: `${API}img-9651.png`, span: 'normal' },
  { id: 6, title: 'Pergola Installation', location: 'Taylor, Canberra', category: 'Pergola', image: `${API}custom-timber-pergola-installation-taylor-canberra.jpg`, span: 'tall' },
  { id: 7, title: 'Custom Home Build', location: 'Taylor, Canberra', category: 'Home Build', image: `${API}ando-house-custom-home-taylor-canberra-living-room-interior.jpg`, span: 'normal' },
  { id: 8, title: 'Kitchen Renovation', location: 'Whitlam, Canberra', category: 'Kitchen', image: `${API}print-042.jpg`, span: 'normal' },
];

export const PORTFOLIO_CATEGORIES = ['All', 'Kitchen', 'Bathroom', 'Home Build', 'Decking', 'Pergola'];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'CanDo House transformed our outdated bathroom into a modern, functional space. Their bathroom renovation team in Canberra was professional, efficient, and attentive to every detail.',
    name: 'Jonathon Ronan',
    role: 'Homeowner, Canberra',
  },
  {
    quote: 'We hired CanDo House for a complete kitchen remodel in Queanbeyan. The custom cabinetry and layout they designed exceeded our expectations. Highly recommend their kitchen renovation services!',
    name: 'Angela Carter',
    role: 'Client, Queanbeyan',
  },
  {
    quote: 'The CanDo House team built our new pergola and upgraded our timber cladding. The result is both stunning and durable. Their craftsmanship truly stands out in Canberra!',
    name: 'Skyler White',
    role: 'Home Renovation Client',
  },
  {
    quote: 'We worked with CanDo House for a custom joinery project. They built us bespoke wardrobes and shelving that perfectly matched our interior design. Great work and top-quality finish.',
    name: 'Wade Thompson',
    role: 'Property Owner, Gungahlin',
  },
  {
    quote: 'From the initial consultation to the final touches on our laundry renovation, CanDo House delivered on time and with great communication. A reliable renovation company in Canberra.',
    name: 'Roberto D.',
    role: 'Client',
  },
  {
    quote: 'CanDo House helped us with wall cladding and a small extension. They are the most skilled and professional renovation team we have worked with in the ACT.',
    name: 'Ramon Singh',
    role: 'Homeowner',
  },
  {
    quote: 'Fantastic experience with CanDo House! The team did a full home extension and decking project. Their carpentry skills and attention to detail are unmatched in Canberra.',
    name: 'Nathaniel Brooks',
    role: 'Client, South Canberra',
  },
  {
    quote: 'We are thrilled with our new custom kitchen cabinets built by CanDo House. The finish is high-end, and everything was tailored to our space. Great joinery team in Queanbeyan!',
    name: 'Antonio Reyes',
    role: 'Client',
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
    slug: 'decking-builders-canberra',
    title: 'Canberra Decking Trends: Timber, Composite & Custom Outdoor Builds',
    category: 'Decking',
    excerpt: 'Explore the latest decking trends in Canberra — from timber and composite materials to custom outdoor builds designed for entertaining.',
    date: '23 Nov 2025',
    readTime: '5 min read',
    image: `${API}decking-builders-canberra.jpg`,
    content: [
      'Outdoor living is a cornerstone of the Canberra lifestyle, and decking plays a central role in creating functional, beautiful outdoor spaces. Whether you are building a new deck or upgrading an existing one, understanding the latest trends can help you make informed decisions.',
      'Timber decking remains a popular choice for its natural beauty and warmth. Hardwoods like spotted gum and merbau offer durability and a rich, organic finish that ages gracefully over time. With proper maintenance, a timber deck can last for decades.',
      'Composite decking has gained significant traction in recent years. Made from a blend of wood fibres and recycled plastics, composite decking offers the look of timber without the ongoing maintenance. It is resistant to rotting, warping, and insect damage, making it an excellent long-term investment.',
      'Custom outdoor builds are another growing trend. Rather than a simple flat deck, homeowners are opting for multi-level decks with integrated seating, planter boxes, and built-in lighting. These designs create a seamless transition between indoor and outdoor living.',
      'When planning your deck, consider factors like sun orientation, wind protection, and how you will use the space. A well-designed deck should complement your home architecture and enhance your outdoor lifestyle for years to come.',
    ],
  },
  {
    slug: 'small-bathroom-renovations-canberra',
    title: 'Small Bathroom Renovations in Canberra: Maximising Space Without Compromise',
    category: 'Bathroom',
    excerpt: 'Smart design choices that make small bathrooms feel spacious and luxurious — from layout to fixture selection.',
    date: '23 Nov 2025',
    readTime: '4 min read',
    image: `${API}small-bathroom-renovations-canberra.jpg`,
    content: [
      'A small bathroom does not have to feel cramped. With thoughtful design and the right fixture choices, even the most compact bathroom can feel spacious, luxurious, and highly functional.',
      'The key to maximising a small bathroom is layout. Wall-mounted vanities free up floor space and create a sense of openness. Walk-in showers with frameless glass screens eliminate visual barriers, making the room feel larger than it is.',
      'Light colours and reflective surfaces are your best friends in a small bathroom. Large-format tiles with minimal grout lines create a seamless look, while a well-placed mirror can double the perceived size of the space.',
      'Storage is often a concern in small bathrooms. Consider recessed shelving, mirrored cabinets, and custom joinery that makes use of every available centimetre. A skilled joiner can create built-in storage that looks like it was always part of the room.',
      'Finally, do not underestimate the impact of good lighting. Layered lighting — including task, ambient, and accent lighting — can transform a small bathroom from a functional space into a relaxing retreat.',
    ],
  },
  {
    slug: 'pergolas-canberra-outdoor-living',
    title: 'The Rise of Pergolas in Canberra: Outdoor Living with Style & Shade',
    category: 'Pergola',
    excerpt: 'Why pergolas are becoming a must-have feature in Canberra homes, and how to choose the right design for your space.',
    date: '23 Nov 2025',
    readTime: '5 min read',
    image: `${API}pergolas-canberra-outdoor-living.jpg`,
    content: [
      'Pergolas have become one of the most popular outdoor additions in Canberra, and it is easy to see why. They provide shade, shelter, and a beautiful extension of living space — perfect for entertaining or relaxing year-round.',
      'A well-designed pergola can transform an unused outdoor area into a functional living space. Whether attached to your home or freestanding, a pergola creates a defined outdoor room that bridges the gap between indoors and out.',
      'Timber pergolas offer a natural, warm aesthetic that complements both traditional and contemporary homes. Hardwood posts and beams provide strength and durability, while the natural grain adds character and charm.',
      'Steel-framed pergolas are gaining popularity for their sleek, modern look and low maintenance requirements. They can span larger areas without the need for multiple support posts, creating a more open feel.',
      'When planning a pergola, consider orientation, roofing options, and how the space will be used. Adding features like integrated lighting, ceiling fans, or outdoor heaters can extend the usability of your pergola throughout the year.',
    ],
  },
  {
    slug: 'budget-bathroom-renovations-canberra',
    title: 'Budget Bathroom Renovations in Canberra: Stylish Updates Without the Splurge',
    category: 'Bathroom',
    excerpt: 'Practical tips for achieving a beautiful bathroom renovation on a budget — without compromising on quality.',
    date: '23 Nov 2025',
    readTime: '4 min read',
    image: `${API}budget-bathroom-renovations-canberra.jpg`,
    content: [
      'A beautiful bathroom renovation does not have to break the bank. With smart planning and strategic choices, you can achieve a stylish, functional bathroom that fits your budget.',
      'Start by identifying what truly needs to change. If your existing layout works, keeping plumbing and electrical in place can save thousands. Focus your budget on high-impact updates like new tiles, a modern vanity, and quality fixtures.',
      'Tile selection is one of the biggest cost variables. Large-format porcelain tiles offer a premium look at a reasonable price, while keeping grout lines to a minimum. Consider tiling only the wet areas and using waterproof paint elsewhere.',
      'A new vanity can completely transform a bathroom. Ready-made vanities come in a wide range of styles and price points, and swapping an old vanity for a modern one is a relatively simple update that delivers big visual impact.',
      'Do not forget the finishing touches. New tapware, a stylish mirror, and quality lighting can elevate the entire space without a major investment. These small details often make the biggest difference in how a bathroom looks and feels.',
    ],
  },
  {
    slug: 'house-renovation-canberra-guide',
    title: 'Why House Renovations in Canberra Are More Than Just a Makeover',
    category: 'Renovation',
    excerpt: 'Discover how a well-planned renovation can transform your lifestyle and add lasting value to your home.',
    date: '23 Nov 2025',
    readTime: '6 min read',
    image: `${API}house-renovation-canberra-guide.jpg`,
    content: [
      'A house renovation is about far more than a fresh coat of paint or new flooring. It is an opportunity to reimagine how you live in your home, improving functionality, comfort, and value for years to come.',
      'The most successful renovations start with a clear understanding of how you use your space. Are you struggling with a cramped kitchen? Need an extra bedroom? Want better indoor-outdoor flow? Identifying your pain points helps prioritise where to invest.',
      'In Canberra, many homes were built decades ago and no longer meet the needs of modern families. Opening up living areas, adding storage, and improving energy efficiency are common renovation goals that deliver both lifestyle and financial returns.',
      'A well-executed renovation can also significantly increase your property value. Kitchen and bathroom updates consistently offer the best return on investment, while extensions and outdoor living areas add valuable square footage.',
      'The key to a successful renovation is working with experienced professionals who understand the local market, building codes, and design trends. A trusted renovation builder will guide you through every stage, from concept to completion.',
    ],
  },
  {
    slug: 'bathroom-renovation-company-canberra',
    title: 'Choosing the Right Bathroom Renovation Company in Canberra',
    category: 'Bathroom',
    excerpt: 'What to look for when selecting a bathroom renovation company — from experience and portfolio to communication.',
    date: '23 Nov 2025',
    readTime: '5 min read',
    image: `${API}bathroom-renovation-company-canberra.jpg`,
    content: [
      'Choosing the right bathroom renovation company is one of the most important decisions you will make during your renovation journey. The right team can make the process smooth, stress-free, and rewarding.',
      'Start by looking at their portfolio. A reputable company should have a gallery of completed projects that demonstrate their range and quality. Look for bathrooms that are similar in style and scope to what you are planning.',
      'Experience matters. A company that has been renovating bathrooms in Canberra for years will understand local building codes, common issues with Canberra homes, and the best suppliers and tradespeople in the area.',
      'Communication is critical. You want a company that listens to your needs, explains the process clearly, and keeps you informed at every stage. Ask about their project management approach and how they handle timelines and budgets.',
      'Finally, check reviews and references. Hearing from past clients gives you valuable insight into what it is like to work with the company. Look for consistent themes — both positive and negative — and ask direct questions before making your decision.',
    ],
  },
];

export const STATS = [
  { value: '10+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction' },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Custom Bathroom & Kitchen Renovations',
    description: 'Tailored solutions for every space and style, designed around your needs.',
    icon: 'Layers',
  },
  {
    title: 'Expert Joinery & Carpentry Services',
    description: 'Skilled craftsmen delivering precision and quality in every detail.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Tailored Home Extensions & Additions',
    description: 'Client-centric approach to expanding your living space seamlessly.',
    icon: 'Award',
  },
  {
    title: 'Functional Design, Quality Workmanship',
    description: 'We blend beauty with practicality for lasting results.',
    icon: 'CalendarCheck',
  },
];

export const BRANDS = [
  { name: 'Smeg', image: `${API}smeg-premium-kitchen-appliances-canberra-candohouse.png` },
  { name: 'Polytec', image: `${API}polytec-custom-joinery-materials-canberra-candohouse.png` },
  { name: 'Miele', image: `${API}miele-premium-kitchen-appliances-canberra-candohouse.png` },
  { name: 'Laminex', image: `${API}laminex-kitchen-bathroom-materials-canberra-candohouse-png.png` },
  { name: 'Caroma', image: `${API}caroma-bathroom-fixtures-tapware-canberra-candohouse.png` },
  { name: 'Bosch', image: `${API}bosch-kitchen-appliances-canberra-candohouse.png` },
];
