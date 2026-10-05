import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/lib/data';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-[3px] border border-charcoal/10 bg-white transition-all hover:shadow-md"
    >
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-[3px] bg-white px-3 py-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold">{post.date}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-gold">{post.category}</span>
        <h3 className="mt-2 font-heading text-lg font-bold leading-tight text-charcoal group-hover:text-gold transition-colors">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/60">{post.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
          Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
