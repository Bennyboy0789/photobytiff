import type { Metadata } from 'next';
import PortfolioClient from './PortfolioClient';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Browse Tiffany Jarosz\'s photography portfolio — newborn, family, maternity, children, and cake smash sessions in Spring Lake, Fayetteville & Fort Bragg, NC.',
  alternates: { canonical: 'https://photobytiff.com/portfolio' },
  openGraph: {
    title: 'Photography Portfolio | Lifestyle Photography by Tiffany',
    description:
      'Lifestyle photography portfolio — newborn, family, maternity, and milestone sessions in North Carolina.',
    images: [{ url: '/images/real/children-lifestyle-boho-tent-session-spring-lake-nc.jpg', alt: 'Photography Portfolio - Lifestyle Photography by Tiffany' }],
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
