import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { blogPosts } from './posts';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Photography tips, session inspiration, and behind-the-scenes stories from Tiffany Jarosz — lifestyle photographer in Spring Lake, NC.',
  alternates: { canonical: 'https://photobytiff.com/blog' },
  openGraph: {
    title: 'Photography Blog | Lifestyle Photography by Tiffany',
    description:
      'Tips, session stories, and lifestyle photography inspiration from Spring Lake, NC photographer Tiffany Jarosz.',
    images: [{ url: '/images/real/family-lifestyle-portrait-spring-lake-nc.jpg', alt: 'Photography Blog - Lifestyle Photography by Tiffany' }],
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/hero-4.jpg"
          alt="Blog"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center">
          <h1 className="text-hero font-bold text-white">BLOG</h1>
          <p className="text-white/70 text-sm uppercase tracking-widest mt-4">
            Stories, tips &amp; behind the scenes
          </p>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="space-y-0">
          {blogPosts.map((post, index) => {
            const isEven = index % 2 === 0;

            return (
              <ScrollReveal key={post.slug} delay={index * 0.1}>
                <div className="grid md:grid-cols-2 gap-0 border-b border-gray-100 min-h-[300px]">
                  {/* Image Side */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className={`relative aspect-[4/3] md:aspect-auto overflow-hidden group ${
                      !isEven ? 'md:order-2' : ''
                    }`}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </Link>

                  {/* Text Side */}
                  <div
                    className={`p-8 md:p-12 flex flex-col justify-center ${
                      !isEven ? 'md:order-1' : ''
                    }`}
                  >
                    <span className="uppercase tracking-widest text-xs text-brand-pink font-medium mb-3">
                      {post.category}
                    </span>
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-2xl font-bold mb-3 hover:text-brand-pink transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    <span className="text-xs text-brand-gray mb-4">
                      {post.date}
                    </span>
                    <p className="text-sm text-brand-gray leading-relaxed mb-6 line-clamp-4">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="uppercase tracking-widest text-xs font-medium text-brand-dark hover:text-brand-pink transition-colors"
                    >
                      READ MORE →
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 text-center bg-brand-light">
        <ScrollReveal>
          <h2 className="text-editorial font-bold mb-4">Stay in the loop</h2>
          <p className="text-brand-gray mb-8">
            Get photography tips, session announcements, and behind-the-scenes
            content.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 border border-gray-300 text-sm focus:outline-none focus:border-brand-pink"
            />
            <button className="bg-brand-dark text-white px-8 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-brand-pink transition">
              Subscribe
            </button>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
