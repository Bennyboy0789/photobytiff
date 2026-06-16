import type { Metadata } from 'next';
import MiniSessionsClient from './MiniSessionsClient';

export const metadata: Metadata = {
  title: 'Mini Sessions',
  description:
    'Affordable 15-20 minute themed mini photography sessions in Spring Lake, NC. Just $99 — includes 8 high-resolution images. Valentine\'s, Spring, Fall, Christmas & more.',
  alternates: { canonical: 'https://photobytiff.com/mini-sessions' },
  openGraph: {
    title: 'Mini Sessions | Lifestyle Photography by Tiffany',
    description:
      'Seasonal themed mini sessions for $99. 15-20 minutes, 8 high-res images. Spring Lake, NC.',
    images: [{ url: '/images/hero/hero-3.jpg', alt: 'Mini Sessions - Lifestyle Photography by Tiffany' }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a mini session?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A mini session is a shorter, themed photography session lasting 15-20 minutes. They are perfect for seasonal photos, quick family updates, or if you want professional photos on a budget.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many photos do I receive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You will receive 8 high-resolution, digitally enhanced images delivered through an online gallery where you can download and share your favorites.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I bring props?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Themed props and a basic setup are included! You are welcome to bring additional personal items that are meaningful to you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where are mini sessions held?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mini sessions are typically held at my studio or a pre-selected outdoor location in the Spring Lake, NC area. The location will be announced with each seasonal session.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I book?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mini sessions are announced seasonally on my social media and website. You can book directly through the contact page or by sending me a DM on Instagram @photo.by.tiff.',
      },
    },
  ],
};

export default function MiniSessionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MiniSessionsClient />
    </>
  );
}
