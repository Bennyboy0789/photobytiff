'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/mini-sessions', label: 'Mini Sessions' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative shrink-0">
            <Image
              src="/images/logo.png"
              alt="Lifestyle Photography By Tiffany"
              width={160}
              height={50}
              className="h-auto w-[120px] md:w-[160px]"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`uppercase text-xs tracking-widest font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-brand-pink'
                    : scrolled
                      ? 'text-brand-dark hover:text-brand-pink'
                      : 'text-white hover:text-brand-pink'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: Instagram + Book Now + Hamburger */}
          <div className="flex items-center gap-4">
            {/* Instagram Icon */}
            <a
              href="https://instagram.com/photo.by.tiff"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:block transition-colors duration-200 ${
                scrolled ? 'text-brand-dark hover:text-brand-pink' : 'text-white hover:text-brand-pink'
              }`}
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* Book Now Button */}
            <Link
              href="/contact"
              className="hidden md:inline-block bg-brand-pink text-white rounded-full px-6 py-2 uppercase tracking-widest text-xs font-semibold hover:bg-opacity-90 transition-all duration-200"
            >
              Book Now
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <span
                className={`block w-6 h-0.5 transition-colors ${
                  scrolled ? 'bg-brand-dark' : 'bg-white'
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-colors ${
                  scrolled ? 'bg-brand-dark' : 'bg-white'
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-colors ${
                  scrolled ? 'bg-brand-dark' : 'bg-white'
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-brand-dark text-3xl leading-none p-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>

            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center gap-6"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-2xl font-serif transition-colors duration-200 ${
                    pathname === link.href
                      ? 'text-brand-pink'
                      : 'text-brand-dark hover:text-brand-pink'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Instagram */}
              <a
                href="https://instagram.com/photo.by.tiff"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-dark hover:text-brand-pink transition-colors mt-4"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Mobile Book Now */}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 bg-brand-pink text-white rounded-full px-8 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-opacity-90 transition-all duration-200"
              >
                Book Now
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
