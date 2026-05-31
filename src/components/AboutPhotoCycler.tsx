'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useMotionValueEvent, useMotionValue } from 'framer-motion';
import { useHorizontalProgress } from './HorizontalScroll';

// Photos cycled in the About panel while it is pinned during scroll.
const photos = [
  '/images/real/cake-smash-messy-first-birthday-portrait.jpg',
  '/images/services/children.jpg',
  '/images/real/family-outdoor-session-lifestyle.jpg',
  '/images/real/family-outdoor-mini-session.jpg',
  '/images/real/portrait-photographer-tiffany-gilpin-spring-lake-nc.jpg',
];

export default function AboutPhotoCycler() {
  const ctx = useHorizontalProgress();
  const fallback = useMotionValue(0);
  const [index, setIndex] = useState(0);

  useMotionValueEvent(ctx?.progress ?? fallback, 'change', (value) => {
    if (!ctx) return;
    // Map the pinned scroll window onto 0 → 1, then onto a photo index.
    const local = (value - ctx.lockStart) / (ctx.lockEnd - ctx.lockStart);
    const clamped = Math.max(0, Math.min(0.9999, local));
    const next = Math.floor(clamped * photos.length);
    setIndex((prev) => (prev === next ? prev : next));
  });

  return (
    <div className="w-full h-full flex items-center justify-center">
      {/* Polaroid frame: thin on top/sides, thick at the bottom, soft shadow, slight tilt */}
      <div className="relative bg-white p-4 pb-20 shadow-2xl -rotate-2 max-h-full">
        <div className="relative aspect-[4/5] h-[clamp(24rem,82vh,52rem)] max-h-[calc(100vh-9rem)] overflow-hidden bg-brand-light">
          <AnimatePresence initial={false}>
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Slow drift while the image is on screen for a living, intentional feel */}
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1 }}
                animate={{ scale: 1.06 }}
                transition={{ duration: 6, ease: 'linear' }}
              >
                <Image
                  src={photos[index]}
                  alt="Tiffany Jarosz Photography"
                  fill
                  sizes="60vw"
                  priority={index === 0}
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
