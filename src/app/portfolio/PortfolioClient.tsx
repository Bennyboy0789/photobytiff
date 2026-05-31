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
  // Maternity
  { id: 1, src: '/images/real/children-outdoor-portrait-natural-light.jpg', alt: 'Children Outdoor Portrait Natural Light', category: 'Maternity', aspectClass: 'aspect-[4/3]' },
  { id: 2, src: '/images/real/children-portrait-toddler-girl-flowers-spring-lake-nc.jpg', alt: 'Children Portrait Toddler Girl Flowers Spring Lake Nc', category: 'Maternity', aspectClass: 'aspect-[3/4]' },
  { id: 3, src: '/images/real/family-candid-session-outdoor.jpg', alt: 'Family Candid Session Outdoor', category: 'Maternity', aspectClass: 'aspect-[3/4]' },
  { id: 4, src: '/images/real/family-golden-hour-outdoor-portrait.jpg', alt: 'Family Golden Hour Outdoor Portrait', category: 'Maternity', aspectClass: 'aspect-[3/4]' },
  { id: 5, src: '/images/real/family-lifestyle-portrait-outdoor-2.jpg', alt: 'Family Lifestyle Portrait Outdoor 2', category: 'Maternity', aspectClass: 'aspect-[3/4]' },
  { id: 6, src: '/images/real/family-milestone-session-outdoor-2.jpg', alt: 'Family Milestone Session Outdoor 2', category: 'Maternity', aspectClass: 'aspect-[4/3]' },
  { id: 7, src: '/images/real/family-outdoor-nature-session.jpg', alt: 'Family Outdoor Nature Session', category: 'Maternity', aspectClass: 'aspect-[4/3]' },
  { id: 8, src: '/images/real/family-outdoor-session-lifestyle.jpg', alt: 'Family Outdoor Session Lifestyle', category: 'Maternity', aspectClass: 'aspect-[3/4]' },
  { id: 9, src: '/images/real/family-portrait-outdoor-lifestyle.jpg', alt: 'Family Portrait Outdoor Lifestyle', category: 'Maternity', aspectClass: 'aspect-[4/3]' },
  { id: 10, src: '/images/real/family-session-outdoor-lifestyle.jpg', alt: 'Family Session Outdoor Lifestyle', category: 'Maternity', aspectClass: 'aspect-[4/3]' },
  { id: 11, src: '/images/real/maternity-photographer-green-dress-ultrasound-spring-lake-nc.jpg', alt: 'Maternity Photographer Green Dress Ultrasound Spring Lake Nc', category: 'Maternity', aspectClass: 'aspect-[2/3]' },

  // Newborn
  { id: 12, src: '/images/real/children-portrait-smiling-toddler-green-floral-dress.jpg', alt: 'Children Portrait Smiling Toddler Green Floral Dress', category: 'Newborn', aspectClass: 'aspect-[3/4]' },
  { id: 13, src: '/images/real/children-portrait-toddler-girl-profile-outdoors.jpg', alt: 'Children Portrait Toddler Girl Profile Outdoors', category: 'Newborn', aspectClass: 'aspect-[3/4]' },
  { id: 14, src: '/images/real/children-portrait-two-brothers-sitting-log-forest.jpg', alt: 'Children Portrait Two Brothers Sitting Log Forest', category: 'Newborn', aspectClass: 'aspect-[4/3]' },
  { id: 15, src: '/images/real/family-candid-moment-outdoor.jpg', alt: 'Family Candid Moment Outdoor', category: 'Newborn', aspectClass: 'aspect-[3/4]' },
  { id: 16, src: '/images/real/family-lifestyle-mom-son-pine-forest-golden-hour.jpg', alt: 'Family Lifestyle Mom Son Pine Forest Golden Hour', category: 'Newborn', aspectClass: 'aspect-[3/4]' },
  { id: 17, src: '/images/real/family-lifestyle-outdoor-portrait-2.jpg', alt: 'Family Lifestyle Outdoor Portrait 2', category: 'Newborn', aspectClass: 'aspect-square' },
  { id: 18, src: '/images/real/family-outdoor-fall-pines-couple-toddler-dogs.jpg', alt: 'Family Outdoor Fall Pines Couple Toddler Dogs', category: 'Newborn', aspectClass: 'aspect-[4/3]' },
  { id: 19, src: '/images/real/family-outdoor-mini-session.jpg', alt: 'Family Outdoor Mini Session', category: 'Newborn', aspectClass: 'aspect-[4/5]' },
  { id: 20, src: '/images/real/family-portrait-outdoor-session-2.jpg', alt: 'Family Portrait Outdoor Session 2', category: 'Newborn', aspectClass: 'aspect-[3/4]' },
  { id: 21, src: '/images/real/newborn-twin-girls-black-white-portrait.jpg', alt: 'Newborn Twin Girls Black White Portrait', category: 'Newborn', aspectClass: 'aspect-[4/5]' },

  // Children
  { id: 22, src: '/images/real/cake-smash-first-birthday-celebration.jpg', alt: 'Cake Smash First Birthday Celebration', category: 'Children', aspectClass: 'aspect-[4/3]' },
  { id: 23, src: '/images/real/cake-smash-fun-session-portrait.jpg', alt: 'Cake Smash Fun Session Portrait', category: 'Children', aspectClass: 'aspect-[4/3]' },
  { id: 24, src: '/images/real/children-candid-outdoor-moment-lifestyle.jpg', alt: 'Children Candid Outdoor Moment Lifestyle', category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 25, src: '/images/real/children-exploring-outdoors-natural-light.jpg', alt: 'Children Exploring Outdoors Natural Light', category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 26, src: '/images/real/children-joyful-outdoor-portrait-session.jpg', alt: 'Children Joyful Outdoor Portrait Session', category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 27, src: '/images/real/children-kids-nature-outdoor-session.jpg', alt: 'Children Kids Nature Outdoor Session', category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 28, src: '/images/real/children-lifestyle-boho-tent-girl-daisy-dress.jpg', alt: 'Children Lifestyle Boho Tent Girl Daisy Dress', category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 29, src: '/images/real/children-lifestyle-boho-tent-girl-holding-flowers.jpg', alt: 'Children Lifestyle Boho Tent Girl Holding Flowers', category: 'Children', aspectClass: 'aspect-[4/3]' },
  { id: 30, src: '/images/real/children-lifestyle-boho-tent-girl-peeking-window.jpg', alt: 'Children Lifestyle Boho Tent Girl Peeking Window', category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 31, src: '/images/real/children-lifestyle-boho-tent-session-spring-lake-nc.jpg', alt: 'Children Lifestyle Boho Tent Session Spring Lake Nc', category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 32, src: '/images/real/children-lifestyle-kids-outdoor-session.jpg', alt: 'Children Lifestyle Kids Outdoor Session', category: 'Children', aspectClass: 'aspect-[4/5]' },
  { id: 33, src: '/images/real/children-lifestyle-outdoor-portrait-2.jpg', alt: 'Children Lifestyle Outdoor Portrait 2', category: 'Children', aspectClass: 'aspect-[4/3]' },
  { id: 34, src: '/images/real/children-milestone-outdoor-portrait.jpg', alt: 'Children Milestone Outdoor Portrait', category: 'Children', aspectClass: 'aspect-[4/3]' },
  { id: 35, src: '/images/real/children-milestone-portrait-outdoor-lifestyle.jpg', alt: 'Children Milestone Portrait Outdoor Lifestyle', category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 36, src: '/images/real/children-natural-light-outdoor-portrait.jpg', alt: 'Children Natural Light Outdoor Portrait', category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 37, src: '/images/real/children-outdoor-lifestyle-session.jpg', alt: 'Children Outdoor Lifestyle Session', category: 'Children', aspectClass: 'aspect-[4/3]' },
  { id: 38, src: '/images/real/children-outdoor-session-natural-light.jpg', alt: 'Children Outdoor Session Natural Light', category: 'Children', aspectClass: 'aspect-[4/3]' },
  { id: 39, src: '/images/real/children-playful-outdoor-portrait.jpg', alt: 'Children Playful Outdoor Portrait', category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 40, src: '/images/real/children-portrait-boho-tent-girl-laughing-daisy-dress.jpg', alt: 'Children Portrait Boho Tent Girl Laughing Daisy Dress', category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 41, src: '/images/real/children-portrait-boy-bridge-arms-raised-outdoors.jpg', alt: 'Children Portrait Boy Bridge Arms Raised Outdoors', category: 'Children', aspectClass: 'aspect-[4/3]' },
  { id: 42, src: '/images/real/children-portrait-girl-patriotic-dress-american-flag.jpg', alt: 'Children Portrait Girl Patriotic Dress American Flag', category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 43, src: '/images/real/children-portrait-golden-hour-outdoor-session.jpg', alt: 'Children Portrait Golden Hour Outdoor Session', category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 44, src: '/images/real/children-portrait-outdoor-natural-light-2.jpg', alt: 'Children Portrait Outdoor Natural Light 2', category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 45, src: '/images/real/family-golden-hour-outdoor-session.jpg', alt: 'Family Golden Hour Outdoor Session', category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 46, src: '/images/real/family-golden-hour-outdoor-session-3.jpg', alt: 'Family Golden Hour Outdoor Session 3', category: 'Children', aspectClass: 'aspect-[4/3]' },
  { id: 47, src: '/images/real/family-lifestyle-session-outdoor.jpg', alt: 'Family Lifestyle Session Outdoor', category: 'Children', aspectClass: 'aspect-[4/5]' },
  { id: 48, src: '/images/real/family-milestone-outdoor-portrait-2.jpg', alt: 'Family Milestone Outdoor Portrait 2', category: 'Children', aspectClass: 'aspect-square' },
  { id: 49, src: '/images/real/family-milestone-session-outdoor.jpg', alt: 'Family Milestone Session Outdoor', category: 'Children', aspectClass: 'aspect-[4/3]' },
  { id: 50, src: '/images/real/family-outdoor-natural-light-landscape.jpg', alt: 'Family Outdoor Natural Light Landscape', category: 'Children', aspectClass: 'aspect-square' },
  { id: 51, src: '/images/real/family-outdoor-nature-portrait.jpg', alt: 'Family Outdoor Nature Portrait', category: 'Children', aspectClass: 'aspect-[3/4]' },
  { id: 52, src: '/images/real/family-outdoor-session-golden-hour.jpg', alt: 'Family Outdoor Session Golden Hour', category: 'Children', aspectClass: 'aspect-square' },
  { id: 53, src: '/images/real/family-portrait-outdoor-session-3.jpg', alt: 'Family Portrait Outdoor Session 3', category: 'Children', aspectClass: 'aspect-square' },
  { id: 54, src: '/images/real/family-portrait-session-outdoor.jpg', alt: 'Family Portrait Session Outdoor', category: 'Children', aspectClass: 'aspect-square' },
  { id: 55, src: '/images/real/portrait-teen-boy-yellow-shirt-clarinet.jpg', alt: 'Portrait Teen Boy Yellow Shirt Clarinet', category: 'Children', aspectClass: 'aspect-[4/3]' },

  // Families
  { id: 56, src: '/images/real/children-candid-moment-outdoor.jpg', alt: 'Children Candid Moment Outdoor', category: 'Families', aspectClass: 'aspect-square' },
  { id: 57, src: '/images/real/children-candid-outdoor-moment-2.jpg', alt: 'Children Candid Outdoor Moment 2', category: 'Families', aspectClass: 'aspect-[4/3]' },
  { id: 58, src: '/images/real/children-candid-session-outdoor.jpg', alt: 'Children Candid Session Outdoor', category: 'Families', aspectClass: 'aspect-[4/3]' },
  { id: 59, src: '/images/real/children-lifestyle-kids-outdoor-portrait.jpg', alt: 'Children Lifestyle Kids Outdoor Portrait', category: 'Families', aspectClass: 'aspect-[4/3]' },
  { id: 60, src: '/images/real/children-lifestyle-outdoor-session.jpg', alt: 'Children Lifestyle Outdoor Session', category: 'Families', aspectClass: 'aspect-square' },
  { id: 61, src: '/images/real/children-milestone-outdoor-session-2.jpg', alt: 'Children Milestone Outdoor Session 2', category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 62, src: '/images/real/children-natural-light-outdoor-session-spring-lake-nc.jpg', alt: 'Children Natural Light Outdoor Session Spring Lake Nc', category: 'Families', aspectClass: 'aspect-[4/3]' },
  { id: 63, src: '/images/real/children-outdoor-portrait-session-4.jpg', alt: 'Children Outdoor Portrait Session 4', category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 64, src: '/images/real/children-outdoor-session-lifestyle-2.jpg', alt: 'Children Outdoor Session Lifestyle 2', category: 'Families', aspectClass: 'aspect-[4/3]' },
  { id: 65, src: '/images/real/children-outdoor-session-natural-light-2.jpg', alt: 'Children Outdoor Session Natural Light 2', category: 'Families', aspectClass: 'aspect-[4/3]' },
  { id: 66, src: '/images/real/children-outdoor-session-portrait.jpg', alt: 'Children Outdoor Session Portrait', category: 'Families', aspectClass: 'aspect-[4/3]' },
  { id: 67, src: '/images/real/children-portrait-outdoor-session-3.jpg', alt: 'Children Portrait Outdoor Session 3', category: 'Families', aspectClass: 'aspect-[4/3]' },
  { id: 68, src: '/images/real/family-candid-moment-session.jpg', alt: 'Family Candid Moment Session', category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 69, src: '/images/real/family-candid-outdoor-moment.jpg', alt: 'Family Candid Outdoor Moment', category: 'Families', aspectClass: 'aspect-square' },
  { id: 70, src: '/images/real/family-candid-outdoor-moment-2.jpg', alt: 'Family Candid Outdoor Moment 2', category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 71, src: '/images/real/family-candid-outdoor-session.jpg', alt: 'Family Candid Outdoor Session', category: 'Families', aspectClass: 'aspect-[4/3]' },
  { id: 72, src: '/images/real/family-golden-hour-outdoor-session-2.jpg', alt: 'Family Golden Hour Outdoor Session 2', category: 'Families', aspectClass: 'aspect-square' },
  { id: 73, src: '/images/real/family-lifestyle-mom-holding-son-fall-pines.jpg', alt: 'Family Lifestyle Mom Holding Son Fall Pines', category: 'Families', aspectClass: 'aspect-[4/3]' },
  { id: 74, src: '/images/real/family-lifestyle-outdoor-portrait.jpg', alt: 'Family Lifestyle Outdoor Portrait', category: 'Families', aspectClass: 'aspect-[2/3]' },
  { id: 75, src: '/images/real/family-lifestyle-outdoor-session-2.jpg', alt: 'Family Lifestyle Outdoor Session 2', category: 'Families', aspectClass: 'aspect-[4/3]' },
  { id: 76, src: '/images/real/family-lifestyle-portrait-session-2.jpg', alt: 'Family Lifestyle Portrait Session 2', category: 'Families', aspectClass: 'aspect-[4/3]' },
  { id: 77, src: '/images/real/family-lifestyle-session-nature.jpg', alt: 'Family Lifestyle Session Nature', category: 'Families', aspectClass: 'aspect-[4/3]' },
  { id: 78, src: '/images/real/family-lifestyle-session-outdoor-2.jpg', alt: 'Family Lifestyle Session Outdoor 2', category: 'Families', aspectClass: 'aspect-[4/5]' },
  { id: 79, src: '/images/real/family-milestone-outdoor-session.jpg', alt: 'Family Milestone Outdoor Session', category: 'Families', aspectClass: 'aspect-square' },
  { id: 80, src: '/images/real/family-milestone-session-nature-2.jpg', alt: 'Family Milestone Session Nature 2', category: 'Families', aspectClass: 'aspect-[4/3]' },
  { id: 81, src: '/images/real/family-outdoor-portrait-natural-light.jpg', alt: 'Family Outdoor Portrait Natural Light', category: 'Families', aspectClass: 'aspect-[4/3]' },
  { id: 82, src: '/images/real/family-outdoor-portrait-session-2.jpg', alt: 'Family Outdoor Portrait Session 2', category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 83, src: '/images/real/family-outdoor-session-nature-2.jpg', alt: 'Family Outdoor Session Nature 2', category: 'Families', aspectClass: 'aspect-[3/4]' },
  { id: 84, src: '/images/real/family-session-outdoor-nature.jpg', alt: 'Family Session Outdoor Nature', category: 'Families', aspectClass: 'aspect-square' },

  // Cake Smash
  { id: 85, src: '/images/real/cake-smash-birthday-celebration-session.jpg', alt: 'Cake Smash Birthday Celebration Session', category: 'Cake Smash', aspectClass: 'aspect-[3/4]' },
  { id: 86, src: '/images/real/cake-smash-birthday-portrait-session.jpg', alt: 'Cake Smash Birthday Portrait Session', category: 'Cake Smash', aspectClass: 'aspect-[3/4]' },
  { id: 87, src: '/images/real/cake-smash-colorful-session-spring-lake-nc.jpg', alt: 'Cake Smash Colorful Session Spring Lake Nc', category: 'Cake Smash', aspectClass: 'aspect-square' },
  { id: 88, src: '/images/real/cake-smash-first-birthday-outdoor-spring-lake-nc.jpg', alt: 'Cake Smash First Birthday Outdoor Spring Lake Nc', category: 'Cake Smash', aspectClass: 'aspect-[3/4]' },
  { id: 89, src: '/images/real/cake-smash-messy-first-birthday-portrait.jpg', alt: 'Cake Smash Messy First Birthday Portrait', category: 'Cake Smash', aspectClass: 'aspect-[3/4]' },
  { id: 90, src: '/images/real/children-milestone-first-birthday-baby-tutu-balloons.jpg', alt: 'Children Milestone First Birthday Baby Tutu Balloons', category: 'Cake Smash', aspectClass: 'aspect-[4/3]' },
  { id: 91, src: '/images/real/children-milestone-outdoor-session.jpg', alt: 'Children Milestone Outdoor Session', category: 'Cake Smash', aspectClass: 'aspect-[3/4]' },
  { id: 92, src: '/images/real/children-portrait-outdoor-natural-light-spring-lake-nc.jpg', alt: 'Children Portrait Outdoor Natural Light Spring Lake Nc', category: 'Cake Smash', aspectClass: 'aspect-[3/4]' },
  { id: 93, src: '/images/real/children-portrait-outdoor-session.jpg', alt: 'Children Portrait Outdoor Session', category: 'Cake Smash', aspectClass: 'aspect-[3/4]' },
  { id: 94, src: '/images/real/children-portrait-outdoor-session-2.jpg', alt: 'Children Portrait Outdoor Session 2', category: 'Cake Smash', aspectClass: 'aspect-[3/4]' },
  { id: 95, src: '/images/real/children-portrait-toddler-picking-pinecones-fall.jpg', alt: 'Children Portrait Toddler Picking Pinecones Fall', category: 'Cake Smash', aspectClass: 'aspect-[3/4]' },
  { id: 96, src: '/images/real/children-toddler-milestone-outdoor-portrait.jpg', alt: 'Children Toddler Milestone Outdoor Portrait', category: 'Cake Smash', aspectClass: 'aspect-[4/3]' },
  { id: 97, src: '/images/real/family-lifestyle-mom-holding-baby-red-plaid-fall.jpg', alt: 'Family Lifestyle Mom Holding Baby Red Plaid Fall', category: 'Cake Smash', aspectClass: 'aspect-[3/4]' },
  { id: 98, src: '/images/real/family-lifestyle-portrait-outdoor.jpg', alt: 'Family Lifestyle Portrait Outdoor', category: 'Cake Smash', aspectClass: 'aspect-[3/4]' },
  { id: 99, src: '/images/real/family-lifestyle-portrait-spring-lake-nc.jpg', alt: 'Family Lifestyle Portrait Spring Lake Nc', category: 'Cake Smash', aspectClass: 'aspect-[4/3]' },
  { id: 100, src: '/images/real/family-milestone-portrait-outdoor.jpg', alt: 'Family Milestone Portrait Outdoor', category: 'Cake Smash', aspectClass: 'aspect-[3/4]' },
  { id: 101, src: '/images/real/family-outdoor-portrait-spring-lake-nc.jpg', alt: 'Family Outdoor Portrait Spring Lake Nc', category: 'Cake Smash', aspectClass: 'aspect-[3/4]' },
  { id: 102, src: '/images/real/family-outdoor-session-natural-light.jpg', alt: 'Family Outdoor Session Natural Light', category: 'Cake Smash', aspectClass: 'aspect-[4/3]' },
  { id: 103, src: '/images/real/family-portrait-outdoor-spring-lake-nc.jpg', alt: 'Family Portrait Outdoor Spring Lake Nc', category: 'Cake Smash', aspectClass: 'aspect-[3/4]' },
  { id: 104, src: '/images/real/family-portrait-session-lifestyle.jpg', alt: 'Family Portrait Session Lifestyle', category: 'Cake Smash', aspectClass: 'aspect-[3/4]' },
  { id: 105, src: '/images/real/family-session-outdoor-natural-light.jpg', alt: 'Family Session Outdoor Natural Light', category: 'Cake Smash', aspectClass: 'aspect-[3/4]' },
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
          <p className="text-[9px] tracking-[0.35em] uppercase text-white/50 mb-4">Â§ Gallery</p>
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
