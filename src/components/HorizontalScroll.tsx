'use client';

import React, { useRef, createContext, useContext } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface HorizontalScrollProps {
  children: React.ReactNode;
}

// Which panel "pins" in place, and how many extra screens of scroll the pin lasts.
const LOCK_PANEL = 1; // About panel (0-indexed)
const LOCK_UNITS = 0.5; // extra full-screens of scroll spent held on the panel

interface HorizontalContextValue {
  progress: MotionValue<number>;
  lockStart: number; // progress (0–1) where the pin begins
  lockEnd: number;   // progress (0–1) where the pin releases
}

const HorizontalContext = createContext<HorizontalContextValue | null>(null);

export function useHorizontalProgress(): HorizontalContextValue | null {
  return useContext(HorizontalContext);
}

export default function HorizontalScroll({ children }: HorizontalScrollProps) {
  const panels = React.Children.toArray(children);
  const numPanels = panels.length;
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  });

  // Total "units" of scroll = one per panel transition, plus the pinned hold.
  const totalUnits = (numPanels - 1) + LOCK_UNITS;
  const lockStart = LOCK_PANEL / totalUnits;
  const lockEnd = (LOCK_PANEL + LOCK_UNITS) / totalUnits;

  // x offset that brings panel k fully into view.
  const panelX = (k: number) => `-${(k / numPanels) * 100}%`;

  // Move normally up to the locked panel, hold flat across the lock window, then
  // continue on to the last panel.
  const x = useTransform(
    scrollYProgress,
    [0, lockStart, lockEnd, 1],
    [panelX(0), panelX(LOCK_PANEL), panelX(LOCK_PANEL), panelX(numPanels - 1)]
  );
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <HorizontalContext.Provider value={{ progress: scrollYProgress, lockStart, lockEnd }}>
      {/* Mobile: native vertical scroll with snap — scroll down to next section */}
      <div
        className="md:hidden overflow-y-auto snap-y snap-mandatory no-scrollbar"
        style={{ height: '100dvh' }}
      >
        {panels.map((panel, i) => (
          <div
            key={i}
            className="snap-start overflow-hidden"
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
        style={{ height: `${(numPanels + LOCK_UNITS) * 100}vh` }}
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
    </HorizontalContext.Provider>
  );
}
