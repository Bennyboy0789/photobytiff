import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Services & Pricing',
  description:
    'Photography packages starting at $99. Newborn ($350), Maternity ($300), Family ($400), Cake Smash ($350), and Mini Sessions. Spring Lake, NC.',
  alternates: { canonical: 'https://photobytiff.com/services' },
  openGraph: {
    title: 'Photography Services & Pricing | Lifestyle Photography by Tiffany',
    description:
      'Newborn, family, maternity, milestone, and cake smash photography packages in Spring Lake, NC. Transparent pricing starting at $99.',
    images: [{ url: '/images/real/family-lifestyle-portrait-spring-lake-nc.jpg', alt: 'Family Photography by Tiffany' }],
  },
};

const services = [
  {
    name: 'THEMED MINI SESSIONS',
    price: 99,
    href: '/mini-sessions',
    details: [
      '15-20 Minute Session',
      '8 High-Res Digitally Enhanced Images',
      'Online Gallery',
    ],
  },
  {
    name: 'MILESTONE',
    price: 200,
    href: '/services/milestone-photography',
    details: [
      '1 Hour Session',
      '15 High-Res Digitally Enhanced Images',
      'Online Gallery',
    ],
  },
  {
    name: 'CAKE SMASH',
    price: 250,
    href: '/services/cake-smash-photography',
    details: [
      'Up To 1 Hour Session',
      '15 High-Res Digitally Enhanced Images',
      'Cake Included',
      'Online Gallery',
    ],
  },
  {
    name: 'MATERNITY',
    price: 300,
    href: '/services/maternity-photography',
    details: [
      '1 Hour Session',
      '20 High-Res Digitally Enhanced Images',
      'Online Gallery',
    ],
  },
  {
    name: 'NEWBORN',
    price: 350,
    href: '/services/newborn-photography',
    details: [
      'Up To 1 Hour Baby-Led Session',
      '20 High-Res Digitally Enhanced Images',
      'Online Gallery',
    ],
  },
  {
    name: 'FAMILY',
    price: 400,
    href: '/services/family-photography',
    details: [
      '1 Hour Session',
      '25 High-Res Digitally Enhanced Images',
      'Up To 6 People',
      'Online Gallery',
    ],
  },
];

const goodToKnow = [
  'All images are delivered via an online gallery',
  'We do not work out of a studio — all sessions are held on location',
  'Travel included within 30 miles of Spring Lake, NC',
  'Additional travel available upon request',
  '50% non-refundable retainer required to book',
  'Remaining balance due on session day',
];

const faqs = [
  {
    q: 'How much does a photography session cost?',
    a: 'Sessions start at $99 for a themed mini session. Milestone sessions are $200, cake smash $250 (cake included), maternity $300, newborn $350, and family sessions $400. Every package includes professionally edited high-resolution images delivered through an online gallery.',
  },
  {
    q: 'What areas do you serve?',
    a: 'Lifestyle Photography by Tiffany is based in Spring Lake, NC and serves Fayetteville, Fort Bragg, Sanford, and the surrounding area. Travel is included within 30 miles of Spring Lake, and additional travel is available upon request.',
  },
  {
    q: 'Where do sessions take place?',
    a: 'All sessions are held on location outdoors or in your home — I do not work out of a studio. We will choose a location together based on your session type and the look you are hoping for.',
  },
  {
    q: 'How do I book a session?',
    a: 'Reach out through the contact page or email tiffany@photobytiff.com. A 50% non-refundable retainer reserves your date, with the remaining balance due on the day of your session. I typically respond within 24 hours.',
  },
  {
    q: 'How long until I receive my photos?',
    a: 'Your professionally edited images are delivered through an online gallery you can download, print, and share. Galleries are typically ready within about two weeks of your session.',
  },
];

export default function ServicesPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section className="h-[50vh] relative flex items-center justify-center">
        <Image
          src="/images/real/children-outdoor-session-portrait.jpg"
          alt="Services and Pricing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative z-10 text-hero font-serif text-white text-center">
          SERVICES & PRICING
        </h1>
      </section>

      {/* Intro Section */}
      <ScrollReveal>
        <section className="py-24 px-6 max-w-3xl mx-auto text-center">
          <h2 className="text-editorial font-serif mb-6">
            Capturing life&apos;s precious moments
          </h2>
          <p className="text-brand-gray leading-relaxed">
            Every session is tailored to tell your unique story. From newborns to
            families, I create timeless images you&apos;ll treasure forever.
          </p>
        </section>
      </ScrollReveal>

      {/* Pricing Cards */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.name} delay={index * 0.1}>
              <div className="p-10 text-center group hover:bg-brand-light transition-colors duration-300 rounded-sm">
                <Link href={service.href} className="block">
                  <p className="uppercase tracking-widest text-sm font-semibold mb-4 group-hover:text-brand-pink transition-colors">
                    {service.name}
                  </p>
                </Link>
                <p className="text-5xl font-serif font-bold mb-6 text-brand-dark">
                  <span className="text-2xl align-top">$</span>
                  {service.price}
                </p>
                <div className="w-8 h-[1px] bg-brand-pink mx-auto mb-6" />
                <ul className="text-sm text-brand-gray space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col items-center gap-3">
                  <Link
                    href={service.href}
                    className="uppercase tracking-widest text-xs text-brand-dark hover:text-brand-pink transition font-medium"
                  >
                    Learn More →
                  </Link>
                  <Link
                    href="/contact"
                    className="uppercase tracking-widest text-xs text-brand-pink hover:text-brand-dark transition font-medium"
                  >
                    Book Now →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Good to Know */}
      <ScrollReveal>
        <section className="py-16 px-6 max-w-3xl mx-auto text-center">
          <div className="bg-brand-light p-12">
            <h3 className="text-2xl font-serif mb-6">Good to Know</h3>
            <ul className="text-sm text-brand-gray leading-loose">
              {goodToKnow.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal>
        <section className="py-16 px-6 max-w-3xl mx-auto">
          <h2 className="text-editorial font-serif mb-10 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-semibold mb-2 text-brand-dark">{faq.q}</h3>
                <p className="text-sm text-brand-gray leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section className="py-24 text-center">
          <h2 className="text-editorial font-serif mb-8">Ready to book?</h2>
          <Link
            href="/contact"
            className="inline-block border border-brand-dark text-brand-dark rounded-full px-10 py-4 uppercase tracking-widest text-sm hover:opacity-90 transition-opacity duration-300"
          >
            SCHEDULE A SESSION →
          </Link>
        </section>
      </ScrollReveal>
    </PageTransition>
  );
}
