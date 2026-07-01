import type { Metadata } from 'next';
import ServiceLanding from '@/components/ServiceLanding';
import { fortBraggPage } from '../services/service-data';

export const metadata: Metadata = {
  title: fortBraggPage.metaTitle,
  description: fortBraggPage.metaDescription,
  alternates: { canonical: fortBraggPage.canonical },
  openGraph: {
    title: `${fortBraggPage.serviceName} | Lifestyle Photography by Tiffany`,
    description: fortBraggPage.metaDescription,
    images: [{ url: fortBraggPage.heroImage, alt: fortBraggPage.heroAlt }],
  },
};

export default function FortBraggPage() {
  return <ServiceLanding page={fortBraggPage} />;
}
