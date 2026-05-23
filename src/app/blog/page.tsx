import type { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

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

const blogPosts = [
  {
    title: 'How to Choose Outfits That Coordinate for Your Family Session',
    date: 'May 23, 2024',
    category: 'Tips',
    image: '/images/real/family-outdoor-session-lifestyle-banner.jpg',
    excerpt:
      "One of the questions I get most often before a session is: what should we wear? Outfit coordination can feel overwhelming, but it doesn\'t have to be. The goal is not to match — it\'s to complement. Here\'s how to nail it every time. Start with one person. Pick the outfit you\'re most excited about for one family member — usually mom or the child with the most options — and build everyone else around that. Pull colors from that outfit rather than duplicating them exactly. Stick to a palette of two to four colors. Choose tones that feel cohesive together: think warm neutrals, soft blues and creams, or earthy greens and tans. Avoid neon colors, busy logos, and large graphics — these distract from faces and date quickly in photos. Mix textures and patterns at different scales. A subtle floral on one person pairs beautifully with a solid on another. One stripe or plaid can work if everything else is solid. Dress for the season and setting. Flowy dresses and linens work beautifully for golden hour outdoor sessions. Cozy layers and knits feel perfect for fall. Think about how you want to feel in the photos, not just how you want to look. Finally, comfort matters — especially for little ones. If your toddler is miserable in their outfit, it will show. When in doubt, send me a few options before the session and I\'m always happy to help you choose.",
  },
  {
    title: 'What Is a Cake Smash Session — And Why You Should Book One',
    date: 'May 23, 2024',
    category: 'Education',
    image: '/images/real/cake-smash-first-birthday-outdoor-spring-lake-nc.jpg',
    excerpt:
      "A cake smash session is exactly what it sounds like — your baby gets a cake, and they do whatever comes naturally. Dig in with both hands, smear it across their face, toss it on the floor — all of it is fair game, and all of it makes for the most joyful, expressive photos you\'ll ever own. Typically held around your baby\'s first birthday, a cake smash session celebrates the end of that incredible first year of life. It\'s a chance to let your little one be completely free — no rules, no sitting still — just pure, messy, unfiltered joy captured on camera. At Lifestyle Photography by Tiffany, the cake is included with every cake smash session, so there\'s nothing for you to coordinate. We\'ll talk through colors and themes beforehand so everything ties together beautifully. Why should you book one? Because one-year-olds are only one once. Because the photos will make you laugh every time you look at them. Because grandparents absolutely love them. And because there is nothing in the world quite like watching your baby experience cake for the very first time — with someone there to capture every second of it.",
  },
  {
    title: 'What Is a Milestone Session — And When Should You Book One?',
    date: 'May 23, 2024',
    category: 'Education',
    image: '/images/real/children-milestone-first-birthday-baby-tutu-balloons.jpg',
    excerpt:
      "Your baby\'s first year is a whirlwind of change. One month they\'re a sleepy newborn, and before you know it they\'re sitting up, crawling, pulling themselves to standing, and blowing out their first birthday candle. A milestone session is a dedicated photography session designed to capture these major developmental moments before they pass. Common milestones include the sitter session around six to eight months — when baby can sit independently and their personality is really starting to shine — and the cake smash or first birthday session at twelve months. But milestones don\'t stop there. First steps, first day of school, losing a first tooth — any moment that marks a meaningful chapter in your child\'s growth is worth preserving. At Lifestyle Photography by Tiffany, milestone sessions are relaxed and baby-paced. We let your little one explore, play, and just be themselves while I capture the magic as it unfolds. These sessions make the perfect gift for grandparents, and the images become some of the most treasured a family owns. If you\'re wondering when to book, the answer is always sooner than you think — babies change fast.",
  },
  {
    title: 'What Is a Baby-Led Newborn Session?',
    date: 'May 23, 2024',
    category: 'Education',
    image: '/images/real/newborn-twin-girls-black-white-portrait.jpg',
    excerpt:
      "If you\'ve been researching newborn photography, you\'ve likely come across two styles: posed and baby-led. At Lifestyle Photography by Tiffany, I exclusively offer baby-led newborn sessions — and here\'s why. A traditional posed newborn session involves carefully positioning your baby into curled, wrapped, or propped poses, often using beanbags and props. They require a lot of handling and can take three to five hours. A baby-led session is different. Instead of working against your newborn\'s natural instincts, we follow their lead entirely. If baby wants to stretch, we let them stretch. If they\'re hungry, we pause and feed. If they fall into a deep sleep, that\'s when we gently capture them at their most peaceful. The result is imagery that feels natural, calm, and true to those early days — not manufactured. Sessions typically last up to an hour, which is much gentler on both baby and parents. There\'s no rushing, no forcing positions, and no stress. Just your brand new baby, exactly as they are. These fleeting first days go so fast. A baby-led session is my way of honoring that.",
  },
  {
    title: 'What Is a Mini Session — And Is It Right for You?',
    date: 'May 23, 2024',
    category: 'Education',
    image: '/images/hero/hero-3.jpg',
    excerpt:
      "Mini sessions are one of the most popular offerings I get asked about — and for good reason. But they aren\'t the right fit for everyone, so let\'s break it down. A mini session is a short, themed photography session typically lasting 15 to 20 minutes. You\'ll receive a curated set of images — usually around 8 — delivered through an online gallery. They\'re offered seasonally, which means availability is limited and they book fast. So who are mini sessions perfect for? Families who want beautiful, updated photos without the time commitment of a full session. Parents looking for holiday cards or a quick milestone snap. Anyone on a tighter budget who still wants professional quality images. Mini sessions are not the best fit if you want a relaxed, unhurried experience with lots of outfit changes, multiple locations, or a large extended family. For those situations, a full session gives us the time and flexibility to tell your whole story. Not sure which is right for you? Send me a message and we\'ll figure it out together.",
  },
  {
    title: 'What Is a Lifestyle Photographer — And How Are They Different?',
    date: 'May 23, 2024',
    category: 'Education',
    image: '/images/real/family-lifestyle-portrait-spring-lake-nc.jpg',
    excerpt:
      "You've probably seen the term \"lifestyle photographer\" floating around, but what does it actually mean? Unlike traditional photographers who pose subjects in a studio, a lifestyle photographer captures real, unscripted moments as they naturally unfold. Think of a mom laughing as her toddler runs toward her, or a family curled up together on a blanket at golden hour — not stiff, say-cheese poses, but genuine emotion and connection. Studio photographers excel at controlled lighting and formal portraits. Photojournalists document events objectively. But a lifestyle photographer sits somewhere beautifully in between: intentionally creating an environment where authentic moments can happen, then capturing them as they do. At Lifestyle Photography by Tiffany, every session is guided — not directed. I'll suggest a walk, a tickle fight, a quiet cuddle — and then I step back and let your family be yourselves. The result is imagery that actually looks like you.",
  },
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
