import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const siteUrl = 'https://photobytiff.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Lifestyle Photography by Tiffany | Lifestyle Photographer in Spring Lake, NC',
    template: '%s | Lifestyle Photography by Tiffany',
  },
  description:
    'Tiffany Jarosz is a lifestyle photographer in Spring Lake, NC specializing in newborn, family, maternity, milestone, and cake smash photography. Serving Fayetteville, Fort Bragg & surrounding areas.',
  keywords: [
    'lifestyle photographer Spring Lake NC',
    'newborn photographer Fayetteville NC',
    'family photographer Fort Bragg NC',
    'maternity photographer North Carolina',
    'cake smash photographer Spring Lake',
    'milestone photography NC',
    'Tiffany Jarosz photographer',
    'photobytiff',
  ],
  authors: [{ name: 'Tiffany Jarosz', url: siteUrl }],
  creator: 'Tiffany Jarosz',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Lifestyle Photography by Tiffany',
    title: 'Lifestyle Photography by Tiffany | Lifestyle Photographer in Spring Lake, NC',
    description:
      'Capturing life\'s unfiltered beauty in Spring Lake, NC. Newborn, family, maternity & milestone photography by Tiffany Jarosz.',
    images: [
      {
        url: '/images/real/children-lifestyle-boho-tent-session-spring-lake-nc.jpg',
        width: 1200,
        height: 630,
        alt: 'Lifestyle Photography by Tiffany - Lifestyle Photography Spring Lake NC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lifestyle Photography by Tiffany | Lifestyle Photographer in Spring Lake, NC',
    description:
      'Capturing life\'s unfiltered beauty in Spring Lake, NC. Newborn, family, maternity & milestone photography.',
    images: ['/images/real/children-lifestyle-boho-tent-session-spring-lake-nc.jpg'],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': `${siteUrl}/#business`,
        name: 'Lifestyle Photography by Tiffany',
        alternateName: 'Tiffany Jarosz Photography',
        description:
          'Lifestyle photographer in Spring Lake, NC specializing in newborn, family, maternity, milestone, and cake smash photography.',
        url: siteUrl,
        email: 'hello@photobytiff.com',
        image: `${siteUrl}/images/real/children-lifestyle-boho-tent-session-spring-lake-nc.jpg`,
        logo: `${siteUrl}/images/logo.png`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Spring Lake',
          addressRegion: 'NC',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 35.1768,
          longitude: -78.9716,
        },
        areaServed: [
          { '@type': 'City', name: 'Spring Lake', '@id': 'https://www.wikidata.org/wiki/Q1166098' },
          { '@type': 'City', name: 'Fayetteville' },
          { '@type': 'City', name: 'Fort Bragg' },
          { '@type': 'City', name: 'Sanford' },
          { '@type': 'State', name: 'North Carolina' },
        ],
        priceRange: '$$',
        founder: { '@id': `${siteUrl}/#person` },
        sameAs: [
          'https://www.instagram.com/photo.by.tiff/',
          'https://www.facebook.com/LifestylePhotographyByTiffany',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Photography Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Newborn Photography', description: 'Baby-led newborn session up to 1 hour' }, price: '300', priceCurrency: 'USD' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Family Photography', description: 'Family lifestyle session up to 6 people' }, price: '400', priceCurrency: 'USD' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maternity Photography', description: 'Maternity lifestyle session' }, price: '250', priceCurrency: 'USD' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cake Smash Photography', description: 'Cake smash session with cake included' }, price: '350', priceCurrency: 'USD' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mini Sessions', description: '15-20 minute themed seasonal sessions' }, price: '99', priceCurrency: 'USD' },
          ],
        },
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Tiffany Jarosz',
        jobTitle: 'Lifestyle Photographer',
        worksFor: { '@id': `${siteUrl}/#business` },
        url: `${siteUrl}/about`,
        sameAs: [
          'https://www.instagram.com/photo.by.tiff/',
          'https://www.facebook.com/LifestylePhotographyByTiffany',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Lifestyle Photography by Tiffany',
        publisher: { '@id': `${siteUrl}/#business` },
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/portfolio?category={search_term_string}` },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return (
    <html lang="en" className={playfair.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
