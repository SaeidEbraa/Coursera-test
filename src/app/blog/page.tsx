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
    'Expert tips, guides and inspiration for painting, decorating and home renovation from RT Renovations.',
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Insights & Guides"
          title="Blog"
          description="Expert tips, guides and inspiration for your next painting, decorating or renovation project."
          image={IMAGES.cta}
          alt="Painted interior wall with professional finish"
        />
        <section className="bg-canvas section-padding">
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
