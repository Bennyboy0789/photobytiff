'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

interface LightboxProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Lightbox({ src, alt, isOpen, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-3xl leading-none p-2 hover:text-brand-pink transition-colors z-10"
            onClick={onClose}
            aria-label="Close lightbox"
          >
            ✕
          </button>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={800}
              className="max-w-[90vw] max-h-[90vh] object-contain w-auto h-auto"
              sizes="90vw"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
