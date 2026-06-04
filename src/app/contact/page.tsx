import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Book a photography session with Tiffany Jarosz in Spring Lake, NC. Newborn, family, maternity, milestone, and cake smash sessions. Responds within 24 hours.',
  alternates: { canonical: 'https://photobytiff.com/contact' },
  openGraph: {
    title: 'Contact | Lifestyle Photography by Tiffany',
    description:
      'Ready to book your session? Reach out to Tiffany Jarosz — Spring Lake, NC lifestyle photographer.',
    images: [{ url: '/images/real/portrait-photographer-tiffany-gilpin-spring-lake-nc.jpg', alt: 'Contact Lifestyle Photography by Tiffany' }],
  },
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/real/portrait-photographer-tiffany-gilpin-spring-lake-nc.jpg"
          alt="Contact Photo by Tiff"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center">
          <h1 className="text-hero font-bold text-white">CONTACT</h1>
          <p className="text-white/70 text-sm uppercase tracking-widest mt-4">
            Let&apos;s create something beautiful
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* LEFT SIDE — Info */}
          <ScrollReveal direction="left">
            <h2 className="text-editorial font-bold mb-6">Your story starts here</h2>
            <div className="w-16 h-[2px] bg-brand-pink mb-8" />
            <p className="text-brand-gray leading-relaxed mb-12">
              I&apos;d love to hear about the moments you want to capture. Whether
              it&apos;s a growing family, a new baby, or a milestone celebration,
              let&apos;s chat about bringing your vision to life.
            </p>

            <div className="space-y-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-pink flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <a href="mailto:tiffany@photobytiff.com" className="text-sm text-brand-gray hover:text-brand-pink transition-colors">
                  tiffany@photobytiff.com
                </a>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-pink flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="text-sm text-brand-gray">Spring Lake, NC</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-pink flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" />
                  </svg>
                </div>
                <a href="https://instagram.com/photo.by.tiff" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-gray hover:text-brand-pink transition-colors">
                  @photo.by.tiff
                </a>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-pink flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <span className="text-sm text-brand-gray">Typically responds within 24 hours</span>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT SIDE — Form */}
          <ScrollReveal direction="right">
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 text-center">
        <p className="text-lg font-bold mb-2">Follow along on Instagram</p>
        <Link
          href="https://instagram.com/photo.by.tiff"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-pink hover:underline text-sm"
        >
          @photo.by.tiff
        </Link>
      </section>
    </main>
  );
}
