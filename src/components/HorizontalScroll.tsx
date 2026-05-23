'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HorizontalScrollProps {
  children: React.ReactNode;
}

export default function HorizontalScroll({ children }: HorizontalScrollProps) {
  const panels = React.Children.toArray(children);
  const numPanels = panels.length;
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  });

  const endPercent = `-${((numPanels - 1) / numPanels) * 100}%`;
  const x = useTransform(scrollYProgress, [0, 1], ['0%', endPercent]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <>
      {/* Mobile: native horizontal swipe with snap */}
      <div
        className="md:hidden flex overflow-x-auto snap-x snap-mandatory no-scrollbar"
        style={{ height: '100dvh' }}
      >
        {panels.map((panel, i) => (
          <div
            key={i}
            className="snap-start flex-shrink-0 overflow-hidden"
            style={{ width: '100vw', height: '100dvh' }}
          >
            {panel}
          </div>
        ))}
      </div>

      {/* Desktop: scroll-jacked horizontal */}
      <div
        ref={wrapperRef}
        className="hidden md:block"
        style={{ height: `${numPanels * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            style={{ x, width: `${numPanels * 100}vw` }}
            className="flex h-full"
          >
            {panels.map((panel, i) => (
              <div
                key={i}
                className="h-full overflow-hidden flex-shrink-0"
                style={{ width: '100vw' }}
              >
                {panel}
              </div>
            ))}
          </motion.div>

          {/* Scroll progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-black/10 z-10">
            <motion.div style={{ width: progressWidth }} className="h-full bg-brand-sage" />
          </div>
        </div>
      </div>
    </>
  );
}
