import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import BlogCard from '@/components/BlogCard';
import CTASection from '@/components/CTASection';
import { BLOG_POSTS, IMAGES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Expert tips, guides and inspiration for renovation, kitchen remodels, bathroom renovations, and custom joinery from CanDo House.',
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Articles"
          title="Read Our Latest Blog To Stay Updated Always"
          description="Expert tips, guides and inspiration for your next renovation or building project."
          image={IMAGES.cta}
          alt="Renovation project by CanDo House"
          breadcrumb="Blog"
        />
        <section className="bg-ink-card section-padding">
          <div className="container-content">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {BLOG_POSTS.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
