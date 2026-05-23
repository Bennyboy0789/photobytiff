'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HorizontalScroll from '@/components/HorizontalScroll';
import PageTransition from '@/components/PageTransition';

const services = [
  { name: 'Maternity', image: '/images/real/maternity-photographer-green-dress-ultrasound-spring-lake-nc.jpg', href: '/portfolio' },
  { name: 'Newborn', image: '/images/real/newborn-twin-girls-black-white-portrait.jpg', href: '/portfolio' },
  { name: 'Children', image: '/images/real/children-portrait-outdoor-natural-light-spring-lake-nc.jpg', href: '/portfolio' },
  { name: 'Families', image: '/images/real/children-natural-light-outdoor-session-spring-lake-nc.jpg', href: '/portfolio' },
  { name: 'Cake Smash', image: '/images/real/cake-smash-first-birthday-outdoor-spring-lake-nc.jpg', href: '/portfolio' },
  { name: 'Milestones', image: '/images/real/children-portrait-boy-plaid-shirt-playground-arms-raised.jpg', href: '/portfolio' },
];

const featuredWork = [
  { image: '/images/real/children-lifestyle-boho-tent-girl-daisy-dress.jpg', caption: 'Children' },
  { image: '/images/real/cake-smash-birthday-celebration-session.jpg', caption: 'Cake Smash' },
  { image: '/images/real/family-portrait-outdoor-spring-lake-nc.jpg', caption: 'Family Session' },
  { image: '/images/real/children-portrait-outdoor-natural-light-2.jpg', caption: 'Children' },
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
      'Great experience! Tiffany was very patient with my children — she was able to coax the best pictures out of my sons and made it a fun experience for us all!',
  },
  {
    name: 'Marissa S.',
    quote:
      'She was super sweet and kind! We had a blast! 10/10 would go to her for pictures again! They turned out amazing!!',
  },
  {
    name: 'Ameria J.',
    quote:
      "Tiffany did my daughter's 1st Birthday pictures and they came out absolutely amazing!! You can tell she's passionate about photography through her work!",
  },
  {
    name: 'Gregg K.',
    quote:
      'Tiffany met me at a location convenient to me. She had several suggestions for poses and spots. She quickly edited the photos and got them back to me. Recommended!',
  },
];

const tickerText =
  'MATERNITY · NEWBORN · CHILDREN · FAMILIES · CAKE SMASH · MILESTONES · ';

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
      <HorizontalScroll>

        {/* ─── Panel 01: HERO ─── */}
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="/images/real/children-lifestyle-boho-tent-session-spring-lake-nc.jpg"
            alt="Lifestyle photography session"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />

          {/* Decorative panel number */}
          <span className="absolute -top-6 right-0 text-[clamp(10rem,22vw,22rem)] font-bold leading-none text-white/[0.06] select-none pointer-events-none tracking-tighter">
            01
          </span>

          {/* Vertical edge label */}
          <div
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/30 text-[9px] tracking-[0.35em] uppercase select-none"
            style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}
          >
            § Photography · Spring Lake NC
          </div>

          {/* Thin horizontal rule */}
          <div className="absolute left-0 right-0 top-[38%] h-px bg-white/10" />

          {/* Name block */}
          <div className="absolute bottom-12 left-10 md:left-16 z-10 text-white">
            <p className="text-[9px] tracking-[0.35em] uppercase text-white/40 mb-4">§ 01 — Portfolio</p>
            <div className="h-px w-12 bg-white/30 mb-4" />
            <h1 className="font-serif italic text-[clamp(2.2rem,6vw,5rem)] leading-[0.9] tracking-[-1px]">
              Lifestyle Photography
            </h1>
            <p className="font-sans font-bold text-[clamp(1.4rem,3.5vw,3rem)] leading-none tracking-[-2px] mt-1 text-white/90">
              BY TIFFANY
            </p>
            <div className="h-px w-full max-w-xs bg-white/20 mt-4 mb-3" />
            <p className="text-[9px] tracking-[0.3em] uppercase text-white/50">
              Lifestyle Photographer · Spring Lake, NC
            </p>
          </div>

          {/* Desktop scroll hint */}
          <div className="absolute bottom-12 right-10 z-10 hidden md:flex flex-col items-center gap-3 text-white/40">
            <span
              className="text-[8px] tracking-[0.3em] uppercase"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              scroll
            </span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="text-sm"
            >
              ↓
            </motion.span>
          </div>

          {/* Mobile swipe hint */}
          <div className="absolute bottom-12 right-8 z-10 md:hidden text-white/40">
            <p className="text-[9px] tracking-[0.3em] uppercase">SWIPE →</p>
          </div>
        </div>

        {/* ─── Panel 02: STATEMENT ─── */}
        <div className="h-full flex bg-brand-cream overflow-hidden">
          {/* Left vertical rule */}
          <div className="w-px bg-brand-dark/10 flex-shrink-0 hidden md:block" />

          <div className="flex-1 flex flex-col justify-center px-8 md:px-14 pt-20 relative">
            {/* Decorative quotation mark */}
            <span className="absolute top-16 left-6 font-serif text-[clamp(8rem,18vw,16rem)] leading-none text-brand-sage/15 select-none pointer-events-none">
              &ldquo;
            </span>

            {/* Decorative panel number */}
            <span className="absolute -top-4 right-4 text-[clamp(7rem,16vw,14rem)] font-bold leading-none text-brand-dark/[0.04] select-none pointer-events-none tracking-tighter">
              02
            </span>

            <div className="relative z-10">
              <p className="text-[9px] tracking-[0.35em] uppercase text-brand-gray mb-3">§ 02 — About</p>
              <div className="h-px w-10 bg-brand-dark/30 mb-6" />
              <p className="text-[clamp(1.4rem,3vw,2.6rem)] leading-[1.15] tracking-[-0.3px] max-w-lg">
                <em className="font-serif italic">Capturing</em>{' '}
                <strong>life&rsquo;s most</strong>{' '}
                <em className="font-serif italic">precious moments</em>
                <strong> —</strong>
                <br />
                <strong>one frame</strong>{' '}
                <em className="font-serif italic">at a time.</em>
              </p>
              <div className="h-px w-full max-w-sm bg-brand-dark/10 mt-6 mb-5" />
              <p className="text-brand-gray text-sm leading-relaxed max-w-sm">
                Based in Spring Lake, North Carolina — specializing in maternity, newborn, family, and milestone photography.
              </p>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="text-[10px] tracking-[0.25em] uppercase text-brand-dark hover:text-brand-sage transition-colors"
                >
                  [ About Tiffany → ]
                </Link>
              </div>
            </div>
          </div>

          {/* Right: photo */}
          <div className="hidden md:block w-[42%] relative flex-shrink-0 p-4">
            <div className="relative w-full h-full border border-brand-dark/10">
              <Image
                src="/images/real/portrait-photographer-tiffany-gilpin-spring-lake-nc.jpg"
                alt="Tiffany Jarosz Photography"
                fill
                className="object-cover"
                sizes="42vw"
              />
            </div>
          </div>
        </div>

        {/* ─── Panel 03: SESSIONS ─── */}
        <div className="h-full flex flex-col bg-brand-light overflow-hidden relative pt-20">
          {/* Decorative panel number */}
          <span className="absolute -top-4 right-0 text-[clamp(10rem,20vw,18rem)] font-bold leading-none text-brand-dark/[0.05] select-none pointer-events-none tracking-tighter">
            03
          </span>

          {/* Header */}
          <div className="flex items-end justify-between px-8 md:px-14 py-6 flex-shrink-0 relative z-10">
            <div>
              <p className="text-[9px] tracking-[0.35em] uppercase text-brand-gray mb-2">§ 03 — Sessions</p>
              <div className="h-px w-10 bg-brand-dark/30 mb-3" />
              <h2 className="font-serif italic text-[clamp(1.6rem,3.5vw,2.8rem)] leading-none tracking-[-0.5px]">
                Service offerings.
              </h2>
            </div>
            <Link
              href="/services"
              className="text-[10px] tracking-[0.25em] uppercase text-brand-gray hover:text-brand-dark transition-colors flex-shrink-0 ml-4"
            >
              [ View all → ]
            </Link>
          </div>

          {/* Thin rule */}
          <div className="h-px bg-brand-dark/10 mx-8 md:mx-14 flex-shrink-0" />

          {/* Grid */}
          <div className="grid grid-cols-3 gap-0 flex-1 min-h-0 border-l border-brand-dark/10 mx-8 md:mx-14 mt-4 mb-0">
            {services.map((service, i) => (
              <Link
                href={service.href}
                key={service.name}
                className="block group border-r border-b border-brand-dark/10 relative overflow-hidden"
              >
                <div className="relative w-full h-full overflow-hidden aspect-[3/2]">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    sizes="28vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <p className="absolute bottom-2 left-2 text-[9px] tracking-[0.25em] uppercase text-brand-dark/60 group-hover:text-brand-dark transition-colors bg-brand-light/80 px-1.5 py-0.5">
                  {service.name}
                </p>
                <span className="absolute top-2 right-2 text-[8px] text-brand-dark/20 font-mono">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </Link>
            ))}
          </div>

          {/* Marquee ticker */}
          <div className="overflow-hidden border-t border-brand-dark/10 flex-shrink-0 mt-auto">
            <div className="marquee-track flex py-2 text-[9px] tracking-[0.3em] uppercase text-brand-gray/50">
              {[tickerText, tickerText].map((t, i) => (
                <span key={i} className="flex-shrink-0 mr-0">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Panel 04: FEATURED WORK ─── */}
        <div className="h-full relative bg-brand-dark overflow-hidden">
          {/* Decorative panel number */}
          <span className="absolute -top-4 right-0 text-[clamp(10rem,20vw,18rem)] font-bold leading-none text-white/[0.06] select-none pointer-events-none tracking-tighter">
            04
          </span>

          {/* Label */}
          <div className="absolute top-24 left-8 md:left-14 z-10">
            <p className="text-[9px] tracking-[0.35em] uppercase text-white/40 mb-2">§ 04 — Gallery</p>
            <div className="h-px w-10 bg-white/20 mb-3" />
            <h2 className="font-serif italic text-[clamp(1.4rem,3vw,2.2rem)] leading-none text-white">
              Featured Work.
            </h2>
          </div>

          <Link
            href="/portfolio"
            className="absolute bottom-10 right-10 z-10 text-[10px] tracking-[0.25em] uppercase text-white/50 hover:text-white transition-colors"
          >
            [ View Portfolio → ]
          </Link>

          {/* 2×2 grid with hairlines */}
          <div className="grid grid-cols-2 grid-rows-2 h-full gap-px bg-white/10">
            {featuredWork.map((work, i) => (
              <div key={work.caption} className="relative overflow-hidden group bg-brand-dark">
                <Image
                  src={work.image}
                  alt={work.caption}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04] opacity-90 group-hover:opacity-100"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
                {/* Caption */}
                <p className="absolute bottom-3 left-3 text-transparent group-hover:text-white/80 text-[9px] tracking-[0.25em] uppercase transition-all duration-300">
                  {work.caption}
                </p>
                {/* Image number */}
                <span className="absolute top-3 left-3 text-[8px] text-white/20 font-mono">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Panel 05: TESTIMONIALS ─── */}
        <div className="h-full flex flex-col justify-center px-8 md:px-20 pt-20 bg-brand-blush overflow-hidden relative">
          {/* Decorative giant quote mark */}
          <span className="absolute top-8 left-4 md:left-10 font-serif text-[clamp(12rem,28vw,22rem)] leading-none text-brand-pink/20 select-none pointer-events-none">
            &ldquo;
          </span>

          {/* Decorative panel number */}
          <span className="absolute -top-4 right-0 text-[clamp(10rem,20vw,18rem)] font-bold leading-none text-brand-dark/[0.05] select-none pointer-events-none tracking-tighter">
            05
          </span>

          <div className="max-w-3xl mx-auto w-full relative z-10">
            <p className="text-[9px] tracking-[0.35em] uppercase text-brand-gray mb-3">§ 05 — Kind Words</p>
            <div className="h-px w-10 bg-brand-dark/30 mb-8" />

            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-serif italic text-[clamp(1.2rem,2.5vw,2rem)] leading-snug tracking-[-0.2px] mb-5 text-brand-dark">
                &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
              </p>
              <div className="h-px w-16 bg-brand-dark/20 mb-4" />
              <p className="text-[10px] tracking-[0.25em] uppercase text-brand-gray">
                — {testimonials[currentTestimonial].name}
              </p>
            </motion.div>

            <div className="flex items-center gap-4 mt-10">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 border border-brand-dark/30 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all duration-200 text-brand-dark"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 border border-brand-dark/30 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all duration-200 text-brand-dark"
                aria-label="Next testimonial"
              >
                →
              </button>
              <span className="text-[10px] text-brand-gray tracking-[0.25em] ml-2">
                {String(currentTestimonial + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* ─── Panel 06: BOOK ─── */}
        <div className="h-full flex flex-col justify-center bg-brand-dark px-8 md:px-14 pt-20 overflow-hidden relative">
          {/* Decorative panel number */}
          <span className="absolute -top-4 right-0 text-[clamp(10rem,20vw,18rem)] font-bold leading-none text-white/[0.06] select-none pointer-events-none tracking-tighter">
            06
          </span>

          {/* Vertical edge label */}
          <div
            className="absolute right-4 top-1/2 z-10 text-white/20 text-[8px] tracking-[0.35em] uppercase select-none hidden md:block"
            style={{ writingMode: 'vertical-rl' }}
          >
            § Book a Session · photobytiff.com
          </div>

          <div className="relative z-10">
            <p className="text-[9px] tracking-[0.35em] uppercase text-white/40 mb-3">§ 06 — Contact</p>
            <div className="h-px w-10 bg-white/20 mb-6" />
            <h2 className="leading-none tracking-tighter">
              <span className="block font-sans font-bold text-[clamp(3rem,9vw,7.5rem)] text-white">
                READY
              </span>
              <span className="block font-serif italic text-[clamp(2.5rem,8vw,6.5rem)] text-brand-pink leading-none">
                to book?
              </span>
            </h2>
            <div className="h-px w-24 bg-white/15 mt-6 mb-8" />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-brand-pink bg-brand-pink text-white rounded-none px-8 py-3.5 uppercase tracking-[0.25em] text-[11px] font-medium hover:bg-transparent hover:text-white hover:border-white transition-all duration-300"
            >
              GET IN TOUCH →
            </Link>
          </div>

          <div className="mt-auto pb-10 relative z-10">
            <div className="h-px w-full bg-white/10 mb-6" />
            <div className="flex items-center justify-between">
              <a
                href="https://instagram.com/photo.by.tiff"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 text-[9px] tracking-[0.3em] uppercase hover:text-white/60 transition-colors"
              >
                @photo.by.tiff
              </a>
              <p className="text-white/20 text-[9px] tracking-[0.2em] uppercase">
                © 2024 Tiffany Jarosz
              </p>
            </div>
          </div>
        </div>

      </HorizontalScroll>
    </PageTransition>
  );
}
