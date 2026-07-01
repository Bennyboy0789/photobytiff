import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ScrollReveal from '@/components/ScrollReveal';
import { blogPosts, getPostBySlug } from '../posts';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt.slice(0, 155),
    alternates: { canonical: `https://photobytiff.com/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | Lifestyle Photography by Tiffany`,
      description: post.excerpt.slice(0, 200),
      images: [{ url: post.image, alt: post.title }],
    },
  };
}

const SITE_URL = 'https://photobytiff.com';

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const publishedISO = new Date(post.date).toISOString();
  const bodyText = (post.content ?? post.excerpt).replace(/<[^>]+>/g, ' ');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${SITE_URL}/blog/${post.slug}/#article`,
        headline: post.title,
        description: post.excerpt.slice(0, 200),
        image: `${SITE_URL}${post.image}`,
        datePublished: publishedISO,
        dateModified: publishedISO,
        articleSection: post.category,
        wordCount: bodyText.trim().split(/\s+/).length,
        author: { '@id': `${SITE_URL}/#person` },
        publisher: { '@id': `${SITE_URL}/#business` },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${post.slug}` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto w-full px-6 pb-12 text-white">
          <span className="uppercase tracking-widest text-xs text-white/80 font-medium">
            {post.category}
          </span>
          <h1 className="font-serif italic text-[clamp(2rem,5vw,3.5rem)] leading-tight mt-3">
            {post.title}
          </h1>
          <span className="text-xs text-white/70 mt-4 block">{post.date}</span>
        </div>
      </section>

      {/* Body */}
      <ScrollReveal>
        <article className="py-20 px-6 max-w-2xl mx-auto">
          {post.content ? (
            <div
              className="prose prose-lg max-w-none [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-3 [&>p]:text-brand-gray [&>p]:leading-loose [&>p]:text-[17px] [&>p]:mb-5"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <p className="text-brand-gray leading-loose text-[17px] whitespace-pre-line">
              {post.excerpt}
            </p>
          )}

          {post.relatedLinks && post.relatedLinks.length > 0 && (
            <div className="mt-14 bg-brand-light rounded-sm p-8">
              <h2 className="text-sm font-bold uppercase tracking-widest text-brand-dark mb-4">
                Related Sessions
              </h2>
              <ul className="space-y-2">
                {post.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-brand-gray hover:text-brand-pink transition-colors"
                    >
                      {link.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-16 pt-10 border-t border-gray-100 flex items-center justify-between">
            <Link
              href="/blog"
              className="uppercase tracking-widest text-xs font-medium text-brand-dark hover:text-brand-pink transition-colors"
            >
              ← Back to Blog
            </Link>
            <Link
              href="/contact"
              className="uppercase tracking-widest text-xs font-medium text-brand-pink hover:text-brand-dark transition-colors"
            >
              Book a Session →
            </Link>
          </div>
        </article>
      </ScrollReveal>
    </main>
  );
}
