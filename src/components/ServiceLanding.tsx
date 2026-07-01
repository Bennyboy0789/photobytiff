import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import PageTransition from '@/components/PageTransition';
import type { ServicePage } from '@/app/services/service-data';

const SITE_URL = 'https://photobytiff.com';

export default function ServiceLanding({ page }: { page: ServicePage }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: page.serviceName,
        serviceType: page.serviceType,
        description: page.metaDescription,
        provider: { '@id': `${SITE_URL}/#business` },
        areaServed: [
          { '@type': 'City', name: 'Spring Lake' },
          { '@type': 'City', name: 'Fayetteville' },
          { '@type': 'City', name: 'Fort Bragg' },
          { '@type': 'City', name: 'Sanford' },
          { '@type': 'State', name: 'North Carolina' },
        ],
        offers: {
          '@type': 'Offer',
          price: page.offerPrice,
          priceCurrency: 'USD',
          url: page.canonical,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
          { '@type': 'ListItem', position: 3, name: page.serviceName, item: page.canonical },
        ],
      },
    ],
  };

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative h-[55vh] flex items-end overflow-hidden">
        <Image src={page.heroImage} alt={page.heroAlt} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto w-full px-6 pb-12 text-white">
          <p className="text-[10px] tracking-[0.35em] uppercase text-white/70 mb-3">{page.eyebrow}</p>
          <h1 className="font-serif italic text-[clamp(2rem,5vw,3.75rem)] leading-tight max-w-3xl">
            {page.h1}
          </h1>
          <p className="mt-4 text-sm uppercase tracking-widest text-brand-pink">{page.priceLine}</p>
        </div>
      </section>

      {/* Intro + body */}
      <ScrollReveal>
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <p className="text-brand-gray leading-loose text-[18px] mb-12">{page.intro}</p>

          {page.sections.map((section) => (
            <div key={section.heading} className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-brand-dark">{section.heading}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="text-brand-gray leading-loose text-[17px] mb-4">{p}</p>
              ))}
            </div>
          ))}

          {/* What's included */}
          <div className="bg-brand-light p-10 rounded-sm">
            <h2 className="text-xl font-serif mb-6 text-brand-dark">What&apos;s included</h2>
            <ul className="space-y-3">
              {page.included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brand-gray">
                  <span className="text-brand-pink mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={page.bookingHref}
              className="inline-block mt-8 bg-brand-dark text-white rounded-full px-10 py-3.5 uppercase tracking-widest text-xs font-semibold hover:opacity-80 transition-opacity"
            >
              Book This Session →
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* Gallery */}
      <ScrollReveal>
        <section className="pb-8 px-6 max-w-5xl mx-auto">
          <h2 className="text-editorial font-serif mb-10 text-center">Recent sessions</h2>
          <div className="columns-2 md:columns-4 gap-3">
            {page.gallery.map((img) => (
              <div key={img.src} className={`relative w-full ${img.aspectClass} overflow-hidden mb-3 break-inside-avoid`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/portfolio" className="text-[10px] tracking-[0.25em] uppercase text-brand-dark hover:text-brand-pink transition-colors">
              [ View full portfolio → ]
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal>
        <section className="py-16 px-6 max-w-3xl mx-auto">
          <h2 className="text-editorial font-serif mb-10 text-center">Frequently asked questions</h2>
          <div className="space-y-8">
            {page.faqs.map((faq) => (
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
        <section className="py-24 text-center bg-brand-light">
          <h2 className="text-editorial font-serif mb-8">Ready to book?</h2>
          <Link
            href={page.bookingHref}
            className="inline-block border border-brand-dark text-brand-dark rounded-full px-10 py-4 uppercase tracking-widest text-sm hover:bg-brand-dark hover:text-white transition-colors duration-300"
          >
            Get in Touch →
          </Link>
        </section>
      </ScrollReveal>
    </PageTransition>
  );
}
