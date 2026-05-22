'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import PageTransition from '@/components/PageTransition';

const heroImages = [
  '/images/hero/hero-1.jpg',
  '/images/hero/hero-2.jpg',
  '/images/hero/hero-3.jpg',
  '/images/hero/hero-4.jpg',
  '/images/hero/hero-5.jpg',
  '/images/hero/hero-6.jpg',
];

const services = [
  { name: 'Maternity', image: '/images/services/maternity.jpg', href: '/portfolio' },
  { name: 'Newborn', image: '/images/services/newborn.jpg', href: '/portfolio' },
  { name: 'Children', image: '/images/services/children.jpg', href: '/portfolio' },
  { name: 'Families', image: '/images/services/families.jpg', href: '/portfolio' },
  { name: 'Cake Smash', image: '/images/services/cake-smash.jpg', href: '/portfolio' },
  { name: 'Patriotic', image: '/images/services/patriotic.jpg', href: '/portfolio' },
];

const testimonials = [
  {
    name: 'Ashley K.',
    image: '/images/testimonials/ashley.jpg',
    quote:
      'She was so helpful and friendly! And my son absolutely enjoyed his time during the shoot! Will definitely book again!',
  },
  {
    name: 'Amanda S.',
    image: '/images/testimonials/amanda.jpg',
    quote:
      'Great experience! Had pictures taken of my 7 and 2 year old sons. Not only did she give us a great price, Tiffany was very patient with my children! She was able to coax the best pictures out of my sons and made it a fun experience for us all!',
  },
  {
    name: 'Marissa S.',
    image: '/images/testimonials/marissa.jpg',
    quote:
      'She was super sweet and kind! We had a blast! 10/10 would go to her for pictures again! They turned out amazing!!!!!',
  },
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <PageTransition>
      {/* ============ HERO SECTION ============ */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Images with Crossfade */}
        {heroImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Hero image ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        ))}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImage}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <Image
              src={heroImages[currentImage]}
              alt={`Hero image ${currentImage + 1}`}
              fill
              className="object-cover"
              priority={currentImage === 0}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <motion.h1
            className="text-hero font-serif font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            TIFFANY
          </motion.h1>
          <motion.p
            className="text-sm uppercase tracking-widest text-white/80 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Lifestyle Photographer · Spring Lake, NC
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </section>

      {/* ============ SERVICES GRID SECTION ============ */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="uppercase tracking-widest text-sm text-brand-gray mb-2 text-center">
            WHAT WE CAPTURE
          </p>
          <h2 className="text-editorial font-serif text-center mb-16">
            Every moment tells a story
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ScrollReveal key={service.name} delay={index * 0.1}>
              <Link href={service.href} className="block aspect-square relative overflow-hidden group cursor-pointer">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="uppercase tracking-widest text-white text-sm font-medium">
                    {service.name}
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ============ STATEMENT SECTION ============ */}
      <section className="py-32 px-6 bg-brand-light">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-[2px] bg-brand-pink mx-auto mb-8" />
            <p className="text-editorial font-serif italic text-brand-dark">
              Life is a collection of moments, big and small, and my passion is
              freezing those moments in time for you to cherish forever.
            </p>
            <p className="text-sm tracking-widest uppercase mt-8">— Tiffany</p>
          </div>
        </ScrollReveal>
      </section>

      {/* ============ TESTIMONIALS SECTION ============ */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="uppercase tracking-widest text-sm text-brand-gray mb-2 text-center">
            KIND WORDS
          </p>
          <h2 className="text-editorial font-serif text-center mb-16">
            From our wonderful clients
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.15}>
              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-6 relative overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <p className="italic text-brand-gray text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="font-semibold text-sm uppercase tracking-wider">
                  {testimonial.name}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className="py-32 px-6 text-center bg-brand-dark text-white">
        <ScrollReveal>
          <h2 className="text-editorial font-serif mb-8">
            Ready to capture your story?
          </h2>
          <Link
            href="/contact"
            className="bg-brand-pink text-white rounded-full px-10 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-opacity-90 transition inline-block"
          >
            BOOK NOW →
          </Link>
        </ScrollReveal>
      </section>
    </PageTransition>
  );
}
