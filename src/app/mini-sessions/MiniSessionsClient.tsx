'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import PageTransition from '@/components/PageTransition';

const seasonalThemes = [
  { name: "New Year's", emoji: '🎆' },
  { name: "Valentine's", emoji: '❤️' },
  { name: "St. Patty's", emoji: '🍀' },
  { name: 'Spring', emoji: '🌸' },
  { name: 'Mommy & Me', emoji: '👩‍👧' },
  { name: 'Summer', emoji: '☀️' },
  { name: 'Back-to-School', emoji: '📚' },
  { name: 'Graduation', emoji: '🎓' },
  { name: 'Fall', emoji: '🍂' },
  { name: 'Christmas', emoji: '🎄' },
];

const faqItems = [
  {
    question: 'What is a mini session?',
    answer:
      'A mini session is a shorter, themed photography session lasting 15-20 minutes. They are perfect for seasonal photos, quick family updates, or if you want professional photos on a budget.',
  },
  {
    question: 'How many photos do I receive?',
    answer:
      'You will receive 8 high-resolution, digitally enhanced images delivered through an online gallery where you can download and share your favorites.',
  },
  {
    question: 'Can I bring props?',
    answer:
      'Themed props and a basic setup are included! You are welcome to bring additional personal items that are meaningful to you.',
  },
  {
    question: 'Where are mini sessions held?',
    answer:
      'Mini sessions are typically held at my studio or a pre-selected outdoor location in the Spring Lake, NC area. The location will be announced with each seasonal session.',
  },
  {
    question: 'How do I book?',
    answer:
      'Mini sessions are announced seasonally on my social media and website. You can book directly through the contact page or by sending me a DM on Instagram @photo.by.tiff.',
  },
];

export default function MiniSessionsClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageTransition>
      {/* Hero */}
      <section className="h-[50vh] relative flex items-center justify-center">
        <Image
          src="/images/hero/hero-3.jpg"
          alt="Mini Sessions - Spring Lake NC Photographer"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative z-10 text-hero font-bold text-white text-center">
          THEMED MINI SESSIONS
        </h1>
      </section>

      {/* Intro Section */}
      <ScrollReveal>
        <section className="py-24 px-6 max-w-3xl mx-auto text-center">
          <h2 className="text-editorial font-bold mb-6">
            Quick, fun & affordable
          </h2>
          <p className="text-brand-gray leading-relaxed">
            Mini sessions are perfect for those who want beautiful, professional
            photos without the commitment of a full session. At just $175, you get
            15-20 minutes of shooting time and 8 high-resolution digitally enhanced
            images delivered via an online gallery.
          </p>
          <div className="mt-8">
            <p className="text-5xl font-bold text-brand-dark">$175</p>
            <p className="text-sm text-brand-gray">per session</p>
          </div>
        </section>
      </ScrollReveal>

      {/* Seasonal Themes Grid */}
      <ScrollReveal>
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <p className="uppercase tracking-widest text-sm text-brand-gray text-center mb-12">
            SEASONAL THEMES
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {seasonalThemes.map((theme, index) => (
              <ScrollReveal key={theme.name} delay={index * 0.05}>
                <div className="aspect-square bg-brand-light flex flex-col items-center justify-center p-6 hover:bg-brand-pink hover:text-white transition-colors duration-300 cursor-pointer group">
                  <span className="text-3xl mb-3">{theme.emoji}</span>
                  <span className="uppercase tracking-widest text-xs font-medium">
                    {theme.name}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ Section */}
      <ScrollReveal>
        <section className="py-24 px-6 max-w-3xl mx-auto">
          <h2 className="text-editorial font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div>
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center py-6 text-left"
                >
                  <span className="font-medium text-brand-dark">
                    {item.question}
                  </span>
                  <span className="text-brand-dark text-xl ml-4 flex-shrink-0">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-brand-gray text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section className="py-24 text-center bg-brand-dark text-white">
          <h2 className="text-editorial font-bold mb-4 text-white">
            Don&apos;t miss out on our next mini session!
          </h2>
          <p className="text-white/60 mb-6">
            Follow us on social media to stay updated on upcoming themed sessions.
          </p>
          <div className="flex items-center justify-center gap-6 mb-10">
            <a
              href="https://instagram.com/photo.by.tiff"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm tracking-widest uppercase"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" />
              </svg>
              @photo.by.tiff
            </a>
            <span className="text-white/20">|</span>
            <a
              href="https://facebook.com/LifestylePhotographyByTiffany"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm tracking-widest uppercase"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              Lifestyle Photography by Tiffany
            </a>
          </div>
          <Link
            href="/contact"
            className="inline-block border border-white text-white rounded-full px-10 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-brand-dark transition-colors duration-300"
          >
            BOOK A MINI SESSION →
          </Link>
        </section>
      </ScrollReveal>
    </PageTransition>
  );
}
