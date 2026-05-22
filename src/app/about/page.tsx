'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import PageTransition from '@/components/PageTransition';

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Hero Banner */}
      <section className="h-[50vh] relative flex items-center justify-center">
        <Image
          src="/images/about/family-photo.jpg"
          alt="About Tiffany"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative z-10 text-hero font-serif text-white text-center">
          ABOUT TIFFANY
        </h1>
      </section>

      {/* Split Layout Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Portrait */}
          <ScrollReveal direction="left">
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image
                src="/images/about/tiffany-camera.jpg"
                alt="Tiffany with camera"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Right - Bio */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="w-16 h-[2px] bg-brand-pink mb-6" />
            <h2 className="text-editorial font-serif mb-8">Meet Tiffany</h2>
            <p className="mb-6 text-brand-gray leading-relaxed">
              I&apos;m Tiffany, your North Carolina-based Lifestyle Photographer. My
              passion lies in capturing the unfiltered beauty of life, and crafting
              enduring memories that will be treasured for years. Behind the lens, I
              aim to freeze emotional moments that narrate a story, highlighting the
              inherent beauty in both individuals and their surroundings.
            </p>
            <p className="mb-6 text-brand-gray leading-relaxed">
              Originally a Wisconsinite, my journey led me to North Carolina, where my
              husband and I decided to build our life together. Having firmly
              established our home, we joyfully embraced the arrival of our twin
              daughters in 2020. The voyage into motherhood, particularly while
              navigating the delightful challenge of caring for two, has been
              incredibly fulfilling—a dream brought to life.
            </p>
            <p className="mb-6 text-brand-gray leading-relaxed">
              Beyond my passion for photography, my formal background in Interior
              Design enhances your sessions. I apply design elements and color theories
              to curate scenes that bring the magic of your moments to life.
            </p>
            <p className="mb-6 text-brand-gray leading-relaxed">
              Join me on this visual journey, where your stories unfold through the
              lens, beautifully captured and thoughtfully composed.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Second Image Section */}
      <ScrollReveal>
        <section className="py-24">
          <div className="h-[40vh] relative">
            <Image
              src="/images/about/family-photo-2.jpg"
              alt="Family photo"
              fill
              className="object-cover"
            />
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="py-24 text-center bg-brand-light">
          <h2 className="text-editorial font-serif mb-8">
            Let&apos;s create something beautiful together
          </h2>
          <Link
            href="/contact"
            className="inline-block border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white rounded-full px-10 py-4 uppercase tracking-widest text-sm transition-colors duration-300"
          >
            GET IN TOUCH →
          </Link>
        </section>
      </ScrollReveal>
    </PageTransition>
  );
}
