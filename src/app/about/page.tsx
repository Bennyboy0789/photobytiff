import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'About Tiffany Jarosz',
  description:
    'Meet Tiffany Jarosz, your Spring Lake, NC lifestyle photographer. Capturing unfiltered beauty and emotional moments for families, newborns, and milestones.',
  alternates: { canonical: 'https://photobytiff.com/about' },
  openGraph: {
    title: 'About Tiffany | Lifestyle Photography by Tiffany',
    description:
      'North Carolina-based lifestyle photographer with a passion for freezing emotional moments that narrate your story.',
    images: [{ url: '/images/real/portrait-photographer-tiffany-gilpin-spring-lake-nc.jpg', alt: 'Tiffany Jarosz Photographer' }],
  },
};

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Hero Banner */}
      <section className="h-[50vh] relative flex items-center justify-center">
        <Image
          src="/images/real/photographer-tiffany-gilpin-with-camera.jpg"
          alt="About Tiffany"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative z-10 text-hero font-bold text-white text-center">
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
                src="/images/real/lifestyle-photography-by-tiffany.jpg"
                alt="Tiffany with camera"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Right - Bio */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="w-16 h-[2px] bg-brand-pink mb-6" />
            <h2 className="text-editorial font-bold mb-8">Meet Tiffany</h2>
            <p className="mb-6 text-brand-gray leading-relaxed">
              Hi, I&apos;m Tiffany — the face behind Lifestyle Photography By Tiffany.
              Originally from Illinois, I moved to North Carolina in 2017 and instantly
              fell in love with everything this beautiful state has to offer. From the
              mountains to the coast, there&apos;s always a new adventure waiting, and
              I love being able to explore it all with my family.
            </p>
            <p className="mb-6 text-brand-gray leading-relaxed">
              Photography has been a passion of mine for many years, and I&apos;ve now
              been working professionally for over 5 years capturing meaningful moments
              for families, couples, and little ones. One of my absolute favorite
              sessions to photograph are cake smashes — there&apos;s just something so
              fun and special about documenting those sweet personalities and milestone
              moments.
            </p>
            <p className="mb-6 text-brand-gray leading-relaxed">
              I decided to start my photography business after becoming a mom to twins.
              I wanted a career that gave me the flexibility to be present for my
              family while also allowing me to pursue something I truly loved. What
              started as a passion for taking and editing photos quickly grew into a
              business that has brought so many amazing people into my life.
            </p>
            <p className="mb-6 text-brand-gray leading-relaxed">
              When I&apos;m not behind the camera, I&apos;m usually spending time with
              my husband — my biggest supporter and the love of my life — chasing
              adventures with our twins, reading thriller novels, listening to music,
              or enjoying time outdoors. I also love doing my own nails, knitting,
              spending time with friends, road trips, traveling, coffee, and beach days
              whenever I can get them.
            </p>
            <p className="mb-6 text-brand-gray leading-relaxed">
              More than anything, I love meeting new people and creating lasting
              memories through photography. I&apos;m so grateful you&apos;re here, and
              I can&apos;t wait to help tell your story.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Second Image Section */}
      <ScrollReveal>
        <section className="pt-8 pb-24 px-6 max-w-7xl mx-auto">
          <Image
            src="/images/real/Jarosz-Family.jpg"
            alt="The Jarosz family"
            width={3295}
            height={2059}
            className="w-full h-auto"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="py-24 text-center bg-brand-light">
          <h2 className="text-editorial font-bold mb-8">
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
