import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/lib/data';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[3px] border border-charcoal/10 bg-white transition-shadow hover:shadow-lg">
      <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3 text-xs">
          <span className="font-semibold uppercase tracking-wider text-gold">{post.category}</span>
          <span className="text-charcoal/30">&middot;</span>
          <span className="text-charcoal/40">{post.date}</span>
        </div>
        <h3 className="font-heading text-lg font-bold leading-tight text-charcoal">
          <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-gold">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/60">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold transition-colors hover:text-[#b89e4a]"
          >
            Read More <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <span className="text-xs text-charcoal/40">{post.readTime}</span>
        </div>
      </div>
    </article>
  );
}
