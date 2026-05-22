'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import PageTransition from '@/components/PageTransition';

const services = [
  { name: 'Maternity', image: '/images/services/maternity.jpg', href: '/portfolio' },
  { name: 'Newborn', image: '/images/services/newborn.jpg', href: '/portfolio' },
  { name: 'Children', image: '/images/services/children.jpg', href: '/portfolio' },
  { name: 'Families', image: '/images/services/families.jpg', href: '/portfolio' },
  { name: 'Cake Smash', image: '/images/services/cake-smash.jpg', href: '/portfolio' },
  { name: 'Patriotic', image: '/images/services/patriotic.jpg', href: '/portfolio' },
];

const featuredWork = [
  { image: '/images/hero/hero-3.jpg', caption: 'Family Session', date: 'Spring 2024' },
  { image: '/images/testimonials/ameria.jpg', caption: 'Cake Smash', date: 'Winter 2024' },
  { image: '/images/hero/hero-5.jpg', caption: 'Maternity', date: 'Summer 2024' },
  { image: '/images/testimonials/amanda.jpg', caption: 'Children', date: 'Fall 2023' },
];

const testimonials = [
  {
    name: 'Ashley K.',
    quote:
      'She was so helpful and friendly! And my son absolutely enjoyed his time during the shoot! Will definitely book again!',
  },
  {
    name: 'Amanda S.',
    quote:
      'Great experience! Not only did she give us a great price, Tiffany was very patient with my children! She was able to coax the best pictures out of my sons and made it a fun experience for us all!',
  },
  {
    name: 'Marissa S.',
    quote:
      'She was super sweet and kind! We had a blast! 10/10 would go to her for pictures again! They turned out amazing!!!!!',
  },
  {
    name: 'Ameria J.',
    quote:
      'Tiffany did my daughter\'s 1st Birthday pictures and they came out absolutely amazing!! Throughout the whole process Tiffany was soooo supportive and accommodating. You can tell she\'s passionate about photography through her work!',
  },
  {
    name: 'Gregg K.',
    quote:
      'Tiffany met me at a location convenient to me. She had several suggestions for picture poses and spots. She quickly edited the photos and got them back to me. Recommended!',
  },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  return (
    <PageTransition>
      {/* ============ HERO — 2-col zero-gap editorial blocks ============ */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[50vh] md:h-[85vh] overflow-hidden group">
          <Image
            src="/images/hero/hero-1.jpg"
            alt="Lifestyle photography session"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="relative h-[50vh] md:h-[85vh] overflow-hidden group">
          <Image
            src="/images/hero/hero-2.jpg"
            alt="Family photography"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* ============ SESSIONS GRID — Counter-Print style ============ */}
      <section className="px-6 max-w-[1400px] mx-auto py-[3.75rem]">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-[20px] font-bold tracking-[-0.5px]">Sessions</h2>
          <Link
            href="/services"
            className="text-[15px] text-brand-gray hover:text-brand-dark transition-colors"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {services.map((service, index) => (
            <ScrollReveal key={service.name} delay={index * 0.05}>
              <Link href={service.href} className="block group">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                </div>
                <p className="text-[15px] mt-2">{service.name}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ============ STATEMENT — Counter-Print 63px bold ============ */}
      <section className="px-6 max-w-[1400px] mx-auto py-[3.75rem]">
        <ScrollReveal>
          <p className="text-statement font-bold tracking-[-0.5px]">
            Tiffany Gilpin is a lifestyle photographer based in Spring Lake, NC — specializing in
            maternity, newborn, family and milestone photography.
          </p>
        </ScrollReveal>
      </section>

      {/* ============ FEATURED WORK — 4-col grid ============ */}
      <section className="px-6 max-w-[1400px] mx-auto py-[3.75rem]">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-[20px] font-bold tracking-[-0.5px]">Featured Work</h2>
          <Link
            href="/portfolio"
            className="text-[15px] text-brand-gray hover:text-brand-dark transition-colors"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredWork.map((work, index) => (
            <ScrollReveal key={work.caption} delay={index * 0.08}>
              <Link href="/portfolio" className="block group">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <p className="text-[15px] mt-2">{work.caption}</p>
                <p className="text-[13px] text-brand-gray">{work.date}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ============ TESTIMONIALS — editorial single-quote ============ */}
      <section className="px-6 max-w-[1400px] mx-auto py-[3.75rem] border-t border-gray-200">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-[20px] font-bold tracking-[-0.5px]">Kind Words</h2>
          <p className="text-[15px] text-brand-gray">
            {currentTestimonial + 1}/{testimonials.length}
          </p>
        </div>

        <div className="max-w-3xl">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-[clamp(1.25rem,3vw,1.75rem)] font-bold leading-snug tracking-[-0.3px] mb-6">
              &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
            </p>
            <p className="text-[15px] text-brand-gray">
              — {testimonials[currentTestimonial].name}
            </p>
          </motion.div>

          <div className="flex gap-3 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-brand-dark flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all duration-200"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-brand-dark flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all duration-200"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* ============ 2-col editorial blocks (more imagery) ============ */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[50vh] md:h-[70vh] overflow-hidden group">
          <Image
            src="/images/hero/hero-4.jpg"
            alt="Photography session"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="relative h-[50vh] md:h-[70vh] overflow-hidden group">
          <Image
            src="/images/hero/hero-6.jpg"
            alt="Photography session"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* ============ CTA — minimal ============ */}
      <section className="px-6 max-w-[1400px] mx-auto py-[5rem]">
        <ScrollReveal>
          <h2 className="text-statement font-bold tracking-[-0.5px] mb-8">
            Ready to book?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-brand-dark text-brand-dark rounded-full px-8 py-3 uppercase tracking-widest text-[13px] font-medium hover:bg-brand-dark hover:text-white transition-all duration-300"
          >
            GET IN TOUCH
            <span>→</span>
          </Link>
        </ScrollReveal>
      </section>
    </PageTransition>
  );
}
