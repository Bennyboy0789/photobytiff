'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

const blogPosts = [
  {
    title: "Children's Milestone Photography",
    date: 'May 29, 2023',
    category: 'Tips',
    image: '/images/services/children.jpg',
    excerpt:
      "Milestone photography captures the precious stages of your child's growth. From their first smile to their first steps, these fleeting moments deserve to be preserved in beautiful, timeless images that you'll look back on for years to come.",
  },
  {
    title: 'Photographer: Behind-the-Scenes',
    date: 'January 30, 2023',
    category: 'Behind the Scenes',
    image: '/images/services/families.jpg',
    excerpt:
      "Ever wondered what goes on behind the camera during a photo session? From setting up the perfect lighting to coaxing genuine smiles, here's a peek into my process and what makes each session uniquely special.",
  },
  {
    title: 'Is Hiring a Professional Photographer Worth It?',
    date: 'January 16, 2023',
    category: 'Advice',
    image: '/images/services/maternity.jpg',
    excerpt:
      "In an age of smartphone cameras, you might wonder if hiring a professional photographer is worth the investment. The short answer: absolutely. Here's why professional photography creates value that lasts a lifetime.",
  },
  {
    title: 'How to Prepare for a Photoshoot',
    date: 'January 2, 2023',
    category: 'Tips',
    image: '/images/services/newborn.jpg',
    excerpt:
      'A little preparation goes a long way in ensuring your photo session is stress-free and produces stunning results. From outfit coordination to timing your session right, here are my top tips.',
  },
  {
    title: 'Sunflower Field Mini Session',
    date: 'July 17, 2022',
    category: 'Sessions',
    image: '/images/hero/hero-5.jpg',
    excerpt:
      "There's something magical about golden hour in a sunflower field. Our summer mini sessions captured families surrounded by towering blooms, creating dreamy, sun-drenched portraits that embody the warmth of the season.",
  },
  {
    title: '4th of July Mini Session',
    date: 'July 4, 2022',
    category: 'Sessions',
    image: '/images/services/patriotic.jpg',
    excerpt:
      'Red, white, and blue never looked so adorable! Our patriotic mini sessions were a hit, with little ones dressed in their finest Americana outfits. These festive photos are perfect for celebrating the spirit of independence.',
  },
  {
    title: 'What to Wear to a Photoshoot',
    date: 'May 21, 2022',
    category: 'Tips',
    image: '/images/services/cake-smash.jpg',
    excerpt:
      'Choosing the right outfits can make or break your photos. I always recommend coordinating rather than matching, sticking to a cohesive color palette, and choosing timeless pieces over trendy ones.',
  },
];

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
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="grid md:grid-cols-2 gap-0 border-b border-gray-100 min-h-[300px]">
                  {/* Image Side */}
                  <div
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
                  </div>

                  {/* Text Side */}
                  <div
                    className={`p-8 md:p-12 flex flex-col justify-center ${
                      !isEven ? 'md:order-1' : ''
                    }`}
                  >
                    <span className="uppercase tracking-widest text-xs text-brand-pink font-medium mb-3">
                      {post.category}
                    </span>
                    <h2 className="text-2xl font-bold mb-3 hover:text-brand-pink transition-colors cursor-pointer">
                      {post.title}
                    </h2>
                    <span className="text-xs text-brand-gray mb-4">
                      {post.date}
                    </span>
                    <p className="text-sm text-brand-gray leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    <span className="uppercase tracking-widest text-xs font-medium text-brand-dark hover:text-brand-pink transition-colors cursor-pointer">
                      READ MORE →
                    </span>
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
