'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import Lightbox from '@/components/Lightbox';

interface PortfolioItem {
  id: number;
  src: string;
  alt: string;
  category: string;
  aspectClass: string;
}

const categories = ['All', 'Newborn', 'Children', 'Families', 'Maternity', 'Cake Smash'];

const portfolioItems: PortfolioItem[] = [
  // Newborn
  { id: 1, src: '/images/services/newborn.jpg', alt: 'Sleeping newborn wrapped in soft blanket', category: 'Newborn', aspectClass: 'aspect-[3/4]' },
  { id: 2, src: '/images/services/newborn.jpg', alt: 'Tiny newborn hands close-up', category: 'Newborn', aspectClass: 'aspect-square' },
  { id: 3, src: '/images/services/newborn.jpg', alt: 'Newborn in cozy basket setup', category: 'Newborn', aspectClass: 'aspect-[4/3]' },
  { id: 4, src: '/images/hero/hero-1.jpg', alt: 'Peaceful newborn portrait in natural light', category: 'Newborn', aspectClass: 'aspect-[3/4]' },

  // Children
  { id: 5, src: '/images/services/children.jpg', alt: 'Toddler laughing in flower field', category: 'Children', aspectClass: 'aspect-square' },
  { id: 6, src: '/images/services/children.jpg', alt: 'Child playing with bubbles outdoors', category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 7, src: '/images/services/children.jpg', alt: 'Little one exploring a garden path', category: 'Children', aspectClass: 'aspect-[4/3]' },
  { id: 8, src: '/images/hero/hero-4.jpg', alt: 'Candid childhood moment in golden hour', category: 'Children', aspectClass: 'aspect-[3/4]' },

  // Families
  { id: 9, src: '/images/services/families.jpg', alt: 'Family of four in matching outfits', category: 'Families', aspectClass: 'aspect-[4/3]' },
  { id: 10, src: '/images/services/families.jpg', alt: 'Parents holding newborn together', category: 'Families', aspectClass: 'aspect-square' },
  { id: 11, src: '/images/services/families.jpg', alt: 'Family laughing during outdoor session', category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 12, src: '/images/hero/hero-5.jpg', alt: 'Beautiful family portrait at sunset', category: 'Families', aspectClass: 'aspect-[4/3]' },

  // Maternity
  { id: 13, src: '/images/services/maternity.jpg', alt: 'Expecting mother in flowing dress', category: 'Maternity', aspectClass: 'aspect-[3/4]' },
  { id: 14, src: '/images/services/maternity.jpg', alt: 'Maternity silhouette at golden hour', category: 'Maternity', aspectClass: 'aspect-square' },
  { id: 15, src: '/images/services/maternity.jpg', alt: 'Couple celebrating pregnancy milestone', category: 'Maternity', aspectClass: 'aspect-[3/4]' },
  { id: 16, src: '/images/hero/hero-2.jpg', alt: 'Glowing maternity portrait in studio', category: 'Maternity', aspectClass: 'aspect-[4/3]' },

  // Cake Smash
  { id: 17, src: '/images/services/cake-smash.jpg', alt: 'First birthday cake smash celebration', category: 'Cake Smash', aspectClass: 'aspect-square' },
  { id: 18, src: '/images/services/cake-smash.jpg', alt: 'Messy cake smash with colorful frosting', category: 'Cake Smash', aspectClass: 'aspect-[4/3]' },
  { id: 19, src: '/images/services/patriotic.jpg', alt: 'Patriotic themed cake smash session', category: 'Cake Smash', aspectClass: 'aspect-[3/4]' },
  { id: 20, src: '/images/services/patriotic.jpg', alt: 'Red white and blue birthday celebration', category: 'Cake Smash', aspectClass: 'aspect-square' },

  // Extra mixed items for density
  { id: 21, src: '/images/hero/hero-3.jpg', alt: 'Sweet sibling moment during family session', category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 22, src: '/images/hero/hero-6.jpg', alt: 'Newborn sleeping peacefully in parents arms', category: 'Newborn', aspectClass: 'aspect-square' },
  { id: 23, src: '/images/services/children.jpg', alt: 'Joyful child portrait in studio', category: 'Children', aspectClass: 'aspect-[4/3]' },
  { id: 24, src: '/images/services/maternity.jpg', alt: 'Elegant maternity gown in field', category: 'Maternity', aspectClass: 'aspect-[4/3]' },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const filteredItems =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/hero-2.jpg"
          alt="Portfolio hero background"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <ScrollReveal className="relative z-10 text-center">
          <h1 className="text-hero font-bold text-white tracking-wider">
            PORTFOLIO
          </h1>
        </ScrollReveal>
      </section>

      {/* Filter Bar */}
      <nav className="py-8 px-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`uppercase tracking-widest text-xs font-medium px-6 py-2 rounded-full border transition-colors ${
                activeFilter === category
                  ? 'bg-brand-dark text-white border-brand-dark'
                  : 'border-gray-300 text-brand-gray hover:border-brand-dark hover:text-brand-dark'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </nav>

      {/* Gallery Grid */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={`${activeFilter}-${item.id}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid mb-4 relative overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage({ src: item.src, alt: item.alt })}
              >
                <div className={`relative w-full ${item.aspectClass} overflow-hidden`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white uppercase tracking-widest text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        src={selectedImage?.src ?? ''}
        alt={selectedImage?.alt ?? ''}
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}
