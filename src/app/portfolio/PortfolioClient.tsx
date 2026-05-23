'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from '@/components/Lightbox';

interface PortfolioItem {
  id: number;
  src: string;
  alt: string;
  category: string;
  aspectClass: string;
}

const categories = ['All', 'Maternity', 'Newborn', 'Children', 'Families', 'Cake Smash'];

const portfolioItems: PortfolioItem[] = [
  // ── Maternity ──────────────────────────────────────────────────────────
  { id: 1,  src: '/images/real/maternity-photographer-green-dress-ultrasound-spring-lake-nc.jpg', alt: 'Maternity photographer Spring Lake NC - green dress holding ultrasound', category: 'Maternity', aspectClass: 'aspect-[1/2]' },

  // ── Newborn ────────────────────────────────────────────────────────────
  { id: 10, src: '/images/real/family-outdoor-fall-pines-couple-toddler-dogs.jpg',             alt: 'Newborn family session - couple with toddler and dogs in fall pines',   category: 'Newborn', aspectClass: 'aspect-square'  },
  { id: 11, src: '/images/real/children-portrait-boy-plaid-shirt-playground-arms-raised.jpg',  alt: 'Newborn mini session - boy with arms raised at playground',              category: 'Newborn', aspectClass: 'aspect-square'  },
  { id: 12, src: '/images/real/family-lifestyle-mom-son-pine-forest-golden-hour.jpg',          alt: 'Newborn lifestyle - mom and son in pine forest golden hour',             category: 'Newborn', aspectClass: 'aspect-square'  },
  { id: 13, src: '/images/real/family-lifestyle-mom-holding-son-fall-pines.jpg',              alt: 'Newborn lifestyle - mom holding son in fall pines',                      category: 'Newborn', aspectClass: 'aspect-square'  },
  { id: 14, src: '/images/real/children-portrait-toddler-picking-pinecones-fall.jpg',         alt: 'Newborn milestone - toddler picking pinecones in fall forest',           category: 'Newborn', aspectClass: 'aspect-square'  },
  { id: 15, src: '/images/real/children-milestone-first-birthday-baby-tutu-balloons.jpg',     alt: 'Newborn milestone - first birthday baby in tutu with balloons',          category: 'Newborn', aspectClass: 'aspect-square'  },
  { id: 16, src: '/images/real/children-portrait-two-brothers-sitting-log-forest.jpg',        alt: 'Newborn lifestyle - two brothers sitting on log in forest',              category: 'Newborn', aspectClass: 'aspect-square'  },
  { id: 17, src: '/images/real/children-portrait-boy-bridge-arms-raised-outdoors.jpg',        alt: 'Newborn children - boy on bridge with arms raised outdoors',             category: 'Newborn', aspectClass: 'aspect-square'  },
  { id: 18, src: '/images/real/family-lifestyle-mom-holding-baby-red-plaid-fall.jpg',         alt: 'Newborn lifestyle - mom holding baby in red plaid fall session',         category: 'Newborn', aspectClass: 'aspect-square'  },

  // ── Children ───────────────────────────────────────────────────────────
  { id: 19, src: '/images/real/children-portrait-outdoor-natural-light-spring-lake-nc.jpg',   alt: 'Children photographer Spring Lake NC - outdoor portrait natural light',  category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 20, src: '/images/real/children-portrait-outdoor-natural-light-2.jpg',                alt: 'Children portrait outdoors natural light Spring Lake NC',                category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 21, src: '/images/real/children-portrait-golden-hour-outdoor-session.jpg',            alt: 'Children portrait session - golden hour outdoor lifestyle',              category: 'Children', aspectClass: 'aspect-[2/3]' },
  { id: 22, src: '/images/real/children-milestone-portrait-outdoor-lifestyle.jpg',            alt: 'Children milestone portrait - outdoor lifestyle session',                category: 'Children', aspectClass: 'aspect-[2/3]' },
  { id: 23, src: '/images/real/children-candid-outdoor-moment-lifestyle.jpg',                 alt: 'Candid children moment - outdoor lifestyle photography',                 category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 24, src: '/images/real/children-playful-outdoor-portrait.jpg',                        alt: 'Playful children outdoor portrait session',                              category: 'Children', aspectClass: 'aspect-square'  },
  { id: 25, src: '/images/real/children-exploring-outdoors-natural-light.jpg',                alt: 'Children exploring outdoors - natural light photography',                category: 'Children', aspectClass: 'aspect-[2/3]' },
  { id: 26, src: '/images/real/children-joyful-outdoor-portrait-session.jpg',                 alt: 'Joyful children outdoor portrait session Spring Lake NC',                category: 'Children', aspectClass: 'aspect-square'  },
  { id: 27, src: '/images/real/children-toddler-milestone-outdoor-portrait.jpg',              alt: 'Toddler milestone outdoor portrait - children photography',              category: 'Children', aspectClass: 'aspect-square'  },
  { id: 28, src: '/images/real/children-portrait-outdoor-session.jpg',                        alt: 'Children portrait outdoor session - Spring Lake NC photographer',        category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 29, src: '/images/real/children-lifestyle-kids-outdoor-session.jpg',                  alt: 'Kids lifestyle outdoor session - children photographer NC',              category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 30, src: '/images/real/children-outdoor-session-natural-light.jpg',                   alt: 'Children outdoor session natural light - Spring Lake NC',                category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 31, src: '/images/real/children-natural-light-outdoor-portrait.jpg',                  alt: 'Children natural light outdoor portrait session',                        category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 32, src: '/images/real/children-milestone-outdoor-portrait.jpg',                      alt: 'Children milestone portrait - outdoor photography NC',                   category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 33, src: '/images/real/children-candid-moment-outdoor.jpg',                           alt: 'Candid children moment outdoor - lifestyle photography',                 category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 34, src: '/images/real/children-outdoor-session-natural-light-2.jpg',                 alt: 'Children outdoor session natural light - Spring Lake photographer',      category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 35, src: '/images/real/children-portrait-outdoor-session-2.jpg',                      alt: 'Children portrait outdoor - Spring Lake NC photography session',         category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 36, src: '/images/real/family-golden-hour-outdoor-session-2.jpg',                     alt: 'Kids outdoor session - family golden hour photography',                  category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 37, src: '/images/real/children-lifestyle-outdoor-session.jpg',                       alt: 'Children lifestyle outdoor session - Spring Lake NC',                    category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 38, src: '/images/real/children-milestone-outdoor-session.jpg',                       alt: 'Children milestone outdoor session - lifestyle photography NC',           category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 39, src: '/images/real/children-outdoor-portrait-natural-light.jpg',                  alt: 'Children outdoor portrait natural light - Spring Lake NC',               category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 40, src: '/images/real/children-candid-session-outdoor.jpg',                          alt: 'Candid children outdoor session - lifestyle photography',                category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 41, src: '/images/real/children-natural-light-outdoor-session-spring-lake-nc.jpg',    alt: 'Children natural light outdoor session - Spring Lake NC photographer',   category: 'Children', aspectClass: 'aspect-[2/3]' },
  { id: 42, src: '/images/real/children-lifestyle-kids-portrait.jpg',                         alt: 'Kids lifestyle portrait - children photographer Spring Lake NC',         category: 'Children', aspectClass: 'aspect-[2/3]' },
  { id: 43, src: '/images/real/children-outdoor-session-lifestyle-2.jpg',                     alt: 'Children outdoor lifestyle session - Spring Lake NC',                    category: 'Children', aspectClass: 'aspect-[2/3]' },
  { id: 44, src: '/images/real/children-portrait-outdoor-session-3.jpg',                      alt: 'Children portrait outdoor session - NC lifestyle photography',           category: 'Children', aspectClass: 'aspect-[2/3]' },
  { id: 45, src: '/images/real/children-candid-outdoor-moment-2.jpg',                         alt: 'Candid children outdoor moment - lifestyle photographer NC',             category: 'Children', aspectClass: 'aspect-[2/3]' },
  { id: 46, src: '/images/real/children-outdoor-lifestyle-session.jpg',                       alt: 'Children outdoor lifestyle session - Spring Lake NC photographer',       category: 'Children', aspectClass: 'aspect-[2/3]' },
  { id: 47, src: '/images/real/children-lifestyle-outdoor-portrait-2.jpg',                    alt: 'Children lifestyle outdoor portrait - NC photography',                   category: 'Children', aspectClass: 'aspect-[2/3]' },
  { id: 48, src: '/images/real/children-kids-nature-outdoor-session.jpg',                     alt: 'Kids in nature outdoor session - children photographer NC',              category: 'Children', aspectClass: 'aspect-[2/3]' },
  { id: 49, src: '/images/real/children-outdoor-portrait-session-4.jpg',                      alt: 'Children outdoor portrait - Spring Lake NC lifestyle session',           category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 50, src: '/images/real/children-milestone-outdoor-session-2.jpg',                     alt: 'Children milestone outdoor session - NC photographer',                   category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 51, src: '/images/real/children-lifestyle-kids-outdoor-portrait.jpg',                 alt: 'Kids lifestyle outdoor portrait - children photography Spring Lake NC',  category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 52, src: '/images/real/children-outdoor-session-portrait.jpg',                        alt: 'Children outdoor portrait session - Spring Lake NC',                     category: 'Children', aspectClass: 'aspect-[3/4]' },

  // ── Families ───────────────────────────────────────────────────────────
  { id: 53, src: '/images/real/family-portrait-outdoor-session-spring-lake-nc.jpg',           alt: 'Family photographer Spring Lake NC - outdoor portrait session',          category: 'Families', aspectClass: 'aspect-[2/3]' },
  { id: 54, src: '/images/real/family-lifestyle-portrait-spring-lake-nc.jpg',                 alt: 'Family lifestyle portrait - Spring Lake NC photographer',                category: 'Families', aspectClass: 'aspect-square'  },
  { id: 55, src: '/images/real/family-outdoor-portrait-natural-light.jpg',                    alt: 'Family outdoor portrait natural light - Spring Lake NC',                 category: 'Families', aspectClass: 'aspect-square'  },
  { id: 56, src: '/images/real/family-milestone-session-outdoor.jpg',                         alt: 'Family milestone session outdoor - NC lifestyle photography',            category: 'Families', aspectClass: 'aspect-square'  },
  { id: 57, src: '/images/real/family-golden-hour-outdoor-portrait.jpg',                      alt: 'Family golden hour outdoor portrait - Spring Lake NC',                   category: 'Families', aspectClass: 'aspect-square'  },
  { id: 58, src: '/images/real/family-candid-outdoor-moment.jpg',                             alt: 'Candid family moment outdoors - lifestyle photography NC',               category: 'Families', aspectClass: 'aspect-square'  },
  { id: 59, src: '/images/real/family-portrait-session-lifestyle.jpg',                        alt: 'Family portrait session lifestyle - Spring Lake NC photographer',        category: 'Families', aspectClass: 'aspect-square'  },
  { id: 60, src: '/images/real/children-portrait-smiling-toddler-green-floral-dress.jpg',     alt: 'Family lifestyle - smiling toddler in green floral dress outdoors',      category: 'Families', aspectClass: 'aspect-[2/3]' },
  { id: 61, src: '/images/real/family-outdoor-session-natural-light.jpg',                     alt: 'Family outdoor session natural light - Spring Lake NC',                  category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 62, src: '/images/real/family-outdoor-natural-light-landscape.jpg',                   alt: 'Family outdoor natural light landscape - NC lifestyle photography',      category: 'Families', aspectClass: 'aspect-[4/3]' },
  { id: 63, src: '/images/real/family-milestone-portrait-outdoor.jpg',                        alt: 'Family milestone portrait outdoors - Spring Lake NC photographer',       category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 64, src: '/images/real/family-candid-outdoor-session.jpg',                            alt: 'Candid family outdoor session - lifestyle photographer NC',              category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 65, src: '/images/real/family-portrait-outdoor-lifestyle.jpg',                        alt: 'Family portrait outdoor lifestyle - Spring Lake NC',                     category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 66, src: '/images/real/family-lifestyle-outdoor-portrait.jpg',                        alt: 'Family lifestyle outdoor portrait - NC photography',                     category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 67, src: '/images/real/family-outdoor-portrait-session.jpg',                          alt: 'Family outdoor portrait session - Spring Lake NC lifestyle',             category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 68, src: '/images/real/family-session-outdoor-lifestyle.jpg',                         alt: 'Family session outdoor lifestyle - NC photographer',                     category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 69, src: '/images/real/family-golden-hour-outdoor-session.jpg',                       alt: 'Family golden hour outdoor session - Spring Lake NC',                    category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 70, src: '/images/real/family-lifestyle-session-outdoor.jpg',                         alt: 'Family lifestyle session outdoor - Spring Lake NC photographer',         category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 71, src: '/images/real/family-lifestyle-session-outdoor-2.jpg',                       alt: 'Family lifestyle session outdoor - NC lifestyle photography',            category: 'Families', aspectClass: 'aspect-square'  },
  { id: 72, src: '/images/real/family-candid-outdoor-moment.jpg',                             alt: 'Candid family outdoor moment - lifestyle photographer Spring Lake NC',   category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 73, src: '/images/real/family-outdoor-session-lifestyle.jpg',                         alt: 'Family outdoor session lifestyle - Spring Lake NC photographer',         category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 74, src: '/images/real/family-lifestyle-outdoor-portrait.jpg',                        alt: 'Family lifestyle outdoor portrait - NC lifestyle photography',           category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 75, src: '/images/real/family-milestone-outdoor-session.jpg',                         alt: 'Family milestone outdoor session - Spring Lake NC',                      category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 76, src: '/images/real/family-portrait-session-outdoor.jpg',                          alt: 'Family portrait session outdoor - NC lifestyle photographer',            category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 77, src: '/images/real/family-outdoor-nature-portrait.jpg',                           alt: 'Family outdoor nature portrait - Spring Lake NC photography',            category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 78, src: '/images/real/family-candid-session-outdoor.jpg',                            alt: 'Candid family session outdoor - NC lifestyle photography',               category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 79, src: '/images/real/family-lifestyle-outdoor-portrait-2.jpg',                      alt: 'Family lifestyle outdoor portrait - Spring Lake NC photographer',        category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 80, src: '/images/real/family-portrait-outdoor-session-2.jpg',                        alt: 'Family portrait outdoor session - NC lifestyle photography',             category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 81, src: '/images/real/family-outdoor-session-golden-hour.jpg',                       alt: 'Family outdoor session golden hour - Spring Lake NC',                    category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 82, src: '/images/real/family-golden-hour-outdoor-session-2.jpg',                     alt: 'Family golden hour outdoor session - NC lifestyle photographer',         category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 83, src: '/images/real/family-lifestyle-session-nature.jpg',                          alt: 'Family lifestyle session in nature - Spring Lake NC',                    category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 84, src: '/images/real/family-portrait-outdoor-spring-lake-nc.jpg',                   alt: 'Family portrait Spring Lake NC - outdoor lifestyle session',             category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 85, src: '/images/real/family-milestone-session-outdoor-2.jpg',                       alt: 'Family milestone session outdoor - lifestyle photographer NC',           category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 86, src: '/images/real/family-candid-moment-session.jpg',                             alt: 'Candid family moment outdoor session - Spring Lake NC',                  category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 87, src: '/images/real/family-outdoor-session-nature-2.jpg',                          alt: 'Family outdoor session in nature - NC lifestyle photography',            category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 88, src: '/images/real/family-lifestyle-portrait-outdoor-2.jpg',                      alt: 'Family lifestyle portrait outdoor - Spring Lake NC photographer',        category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 89, src: '/images/real/family-outdoor-nature-session.jpg',                            alt: 'Family outdoor nature session - Spring Lake NC lifestyle',               category: 'Families', aspectClass: 'aspect-[2/3]' },
  { id: 90, src: '/images/real/family-session-outdoor-nature.jpg',                            alt: 'Family session outdoor nature - NC lifestyle photography',               category: 'Families', aspectClass: 'aspect-[2/3]' },
  { id: 91, src: '/images/real/family-milestone-outdoor-portrait-2.jpg',                      alt: 'Family milestone outdoor portrait - Spring Lake NC photographer',        category: 'Families', aspectClass: 'aspect-[2/3]' },
  { id: 92, src: '/images/real/family-portrait-outdoor-session-3.jpg',                        alt: 'Family portrait outdoor session - NC lifestyle photographer',            category: 'Families', aspectClass: 'aspect-[2/3]' },
  { id: 93, src: '/images/real/family-lifestyle-outdoor-session-2.jpg',                       alt: 'Family lifestyle outdoor session - Spring Lake NC',                      category: 'Families', aspectClass: 'aspect-[2/3]' },
  { id: 94, src: '/images/real/family-outdoor-portrait-session-2.jpg',                        alt: 'Family outdoor portrait session - NC lifestyle photography',             category: 'Families', aspectClass: 'aspect-[2/3]' },
  { id: 95, src: '/images/real/family-golden-hour-outdoor-session-3.jpg',                     alt: 'Family golden hour outdoor session - Spring Lake NC photographer',       category: 'Families', aspectClass: 'aspect-[2/3]' },
  { id: 96, src: '/images/real/family-milestone-session-nature-2.jpg',                        alt: 'Family milestone session in nature - Spring Lake NC',                    category: 'Families', aspectClass: 'aspect-[2/3]' },
  { id: 97, src: '/images/real/family-candid-outdoor-moment-2.jpg',                           alt: 'Candid family outdoor moment - lifestyle photographer NC',               category: 'Families', aspectClass: 'aspect-[2/3]' },
  { id: 98, src: '/images/real/family-session-outdoor-natural-light.jpg',                     alt: 'Family session outdoor natural light - Spring Lake NC',                  category: 'Families', aspectClass: 'aspect-[2/3]' },
  { id: 99, src: '/images/real/family-outdoor-portrait-spring-lake-nc.jpg',                   alt: 'Family outdoor portrait Spring Lake NC - lifestyle photography',         category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 100, src: '/images/real/family-lifestyle-portrait-session-2.jpg',                     alt: 'Family lifestyle portrait session - Spring Lake NC photographer',        category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 101, src: '/images/real/family-outdoor-session-golden-hour.jpg',                      alt: 'Family outdoor golden hour portrait - Spring Lake NC',                   category: 'Families', aspectClass: 'aspect-[3/4]' },

  // ── Cake Smash ─────────────────────────────────────────────────────────
  { id: 102, src: '/images/real/cake-smash-first-birthday-outdoor-spring-lake-nc.jpg',        alt: 'Cake smash photographer Spring Lake NC - first birthday outdoor session', category: 'Cake Smash', aspectClass: 'aspect-[3/4]' },
  { id: 103, src: '/images/real/cake-smash-birthday-celebration-session.jpg',                 alt: 'Cake smash birthday celebration session - Spring Lake NC',                category: 'Cake Smash', aspectClass: 'aspect-[3/4]' },
  { id: 104, src: '/images/real/cake-smash-messy-first-birthday-portrait.jpg',                alt: 'Messy first birthday cake smash portrait - NC photographer',             category: 'Cake Smash', aspectClass: 'aspect-[3/4]' },
  { id: 105, src: '/images/real/cake-smash-colorful-session-spring-lake-nc.jpg',              alt: 'Colorful cake smash session - Spring Lake NC photographer',              category: 'Cake Smash', aspectClass: 'aspect-[2/3]' },
  { id: 106, src: '/images/real/cake-smash-birthday-portrait-session.jpg',                    alt: 'Birthday cake smash portrait session - Spring Lake NC',                  category: 'Cake Smash', aspectClass: 'aspect-[2/3]' },
  { id: 107, src: '/images/real/cake-smash-fun-session-portrait.jpg',                         alt: 'Cake smash fun session portrait - NC lifestyle photographer',            category: 'Cake Smash', aspectClass: 'aspect-[2/3]' },
  { id: 108, src: '/images/real/cake-smash-first-birthday-celebration.jpg',                   alt: 'First birthday celebration cake smash - Spring Lake NC',                 category: 'Cake Smash', aspectClass: 'aspect-[3/4]' },
  { id: 109, src: '/images/real/cake-smash-themed-birthday-session.jpg',                      alt: 'Themed birthday cake smash session - Spring Lake NC photographer',       category: 'Cake Smash', aspectClass: 'aspect-square' },
  { id: 110, src: '/images/real/portrait-teen-boy-yellow-shirt-clarinet.jpg',                 alt: 'Portrait session - teen boy in yellow shirt holding clarinet',           category: 'Cake Smash', aspectClass: 'aspect-square' },
];

export default function PortfolioClient() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const filteredItems =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/real/Photo-Banner.jpg"
          alt="Portfolio hero background"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center">
          <p className="text-[9px] tracking-[0.35em] uppercase text-white/50 mb-4">§ Gallery</p>
          <h1 className="font-serif italic text-[clamp(2.5rem,7vw,5rem)] text-white leading-none tracking-[-1px]">
            Portfolio
          </h1>
        </div>
      </section>

      {/* Filter Bar */}
      <nav className="py-8 px-6 max-w-7xl mx-auto border-b border-brand-dark/10">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`uppercase tracking-[0.2em] text-[10px] font-medium px-6 py-2 transition-colors ${
                activeFilter === category
                  ? 'bg-brand-dark text-white'
                  : 'border border-brand-dark/20 text-brand-gray hover:border-brand-dark hover:text-brand-dark'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </nav>

      {/* Gallery Grid */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={`${activeFilter}-${item.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="break-inside-avoid mb-3 relative overflow-hidden group cursor-pointer"
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
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-end justify-start p-3">
                    <span className="text-white/0 group-hover:text-white/80 text-[9px] tracking-[0.25em] uppercase transition-all duration-300">
                      {item.category}
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
