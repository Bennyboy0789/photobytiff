'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import PageTransition from '@/components/PageTransition';

const services = [
  {
    name: 'NEWBORN',
    price: 300,
    details: [
      'Up To 1 Hour Baby-Led Session',
      '20 High-Res Digitally Enhanced Images',
      'Online Gallery',
    ],
  },
  {
    name: 'MILESTONE',
    price: 250,
    details: [
      '1 Hour Session',
      '15 High-Res Digitally Enhanced Images',
      'Online Gallery',
    ],
  },
  {
    name: 'FAMILY',
    price: 400,
    details: [
      '1 Hour Session',
      '25 High-Res Digitally Enhanced Images',
      'Up To 6 People',
      'Online Gallery',
    ],
  },
  {
    name: 'PORTRAIT',
    price: 250,
    details: [
      '1 Hour Session',
      '15 High-Res Digitally Enhanced Images',
      'Online Gallery',
    ],
  },
  {
    name: 'CAKE SMASH',
    price: 350,
    details: [
      'Up To 1 Hour Session',
      '15 High-Res Digitally Enhanced Images',
      'Cake Included',
      'Online Gallery',
    ],
  },
];

const goodToKnow = [
  'All images are delivered via an online gallery',
  'Studio sessions may include an additional studio fee',
  'Travel included within 30 miles of Spring Lake, NC',
  'Additional travel available upon request',
  '50% non-refundable retainer required to book',
  'Remaining balance due on session day',
];

export default function ServicesPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="h-[50vh] relative flex items-center justify-center">
        <Image
          src="/images/services/families.jpg"
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
                <p className="uppercase tracking-widest text-sm font-semibold mb-4">
                  {service.name}
                </p>
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
                <Link
                  href="/contact"
                  className="inline-block mt-8 uppercase tracking-widest text-xs text-brand-pink hover:text-brand-dark transition font-medium"
                >
                  BOOK NOW →
                </Link>
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
