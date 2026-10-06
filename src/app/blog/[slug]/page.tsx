import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { BLOG_POSTS } from '@/lib/data';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Article Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== params.slug).slice(0, 2);

  return (
    <>
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar mt-20">
          <div className="container-content">
            <span className="breadcrumb-text">Home — Blog</span>
          </div>
        </div>

        {/* Hero image */}
        <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/60 to-ink/30" />
        </section>

        {/* Article content */}
        <article className="bg-ink">
          <div className="container-content -mt-24 relative z-10 max-w-3xl pb-20">
            <div className="rounded-[3px] border border-white/10 bg-ink-card p-8 shadow-xl md:p-12">
              <div className="mb-4 flex flex-wrap items-center gap-3 text-xs">
                <span className="font-semibold uppercase tracking-wider text-gold">{post.category}</span>
                <span className="text-white/20">&middot;</span>
                <span className="flex items-center gap-1.5 text-white/40">
                  <Calendar className="h-3.5 w-3.5" />
                  {post.date}
                </span>
                <span className="text-white/20">&middot;</span>
                <span className="flex items-center gap-1.5 text-white/40">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>
              <h1 className="font-heading text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
                {post.title}
              </h1>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-white/60">
                {post.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-10 border-t border-white/10 pt-6">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold transition-colors hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-ink pb-20">
            <div className="container-content">
              <h2 className="heading-3 text-white mb-8">Related Articles</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group flex gap-4 rounded-[3px] border border-white/10 bg-ink-card p-5 transition-all hover:border-gold/40"
                  >
                    <img
                      src={rp.image}
                      alt={rp.title}
                      loading="lazy"
                      className="h-20 w-20 shrink-0 rounded-[3px] object-cover"
                    />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gold">{rp.category}</span>
                      <h3 className="mt-1 font-heading text-base font-bold text-white group-hover:text-gold transition-colors">
                        {rp.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
