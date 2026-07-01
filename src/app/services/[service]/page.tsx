import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceLanding from '@/components/ServiceLanding';
import { servicePages } from '../service-data';

export function generateStaticParams() {
  return Object.keys(servicePages).map((service) => ({ service }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const page = servicePages[service];
  if (!page) return { title: 'Service Not Found' };

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: page.canonical },
    openGraph: {
      title: `${page.serviceName} | Lifestyle Photography by Tiffany`,
      description: page.metaDescription,
      images: [{ url: page.heroImage, alt: page.heroAlt }],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const page = servicePages[service];
  if (!page) notFound();

  return <ServiceLanding page={page} />;
}
