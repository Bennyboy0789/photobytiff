'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-brand-cream' : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6 flex items-center justify-between h-28">
          {/* Logo */}
          <Link href="/" aria-label="Tiffany Jarosz Photography — Home">
            <Image
              src="/images/real/NEW-Logo-Design-BLACK.png"
              alt="Tiffany Jarosz Photography"
              width={1000}
              height={1000}
              sizes="96px"
              priority
              className="h-24 w-auto"
            />
          </Link>

          {/* Right side: icons */}
          <div className="flex items-center gap-5">
            {/* Hamburger Menu */}
            <button
              className="flex flex-col gap-[5px] p-2 cursor-pointer"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span
                className={`block w-5 h-[1.5px] transition-colors ${
                  scrolled ? 'bg-brand-dark' : 'bg-white'
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] transition-colors ${
                  scrolled ? 'bg-brand-dark' : 'bg-white'
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] transition-colors ${
                  scrolled ? 'bg-brand-dark' : 'bg-white'
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-brand-cream flex flex-col"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 h-28">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                aria-label="Tiffany Jarosz Photography — Home"
              >
                <Image
                  src="/images/real/NEW-Logo-Design-BLACK.png"
                  alt="Tiffany Jarosz Photography"
                  width={1000}
                  height={1000}
                  className="h-24 w-auto"
                />
              </Link>
              <button
                className="text-brand-dark p-2"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex-1 flex flex-col justify-center px-12 md:px-24">
              <motion.nav
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex flex-col gap-6"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase tracking-[-1px] leading-none transition-colors duration-200 ${
                      pathname === link.href
                        ? 'text-brand-gray'
                        : 'text-brand-dark hover:text-brand-gray'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Book Now outline pill */}
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-8 inline-flex items-center gap-2 self-start border border-brand-dark text-brand-dark rounded-full px-8 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-brand-dark hover:text-white transition-all duration-300"
                >
                  BOOK NOW
                  <span className="text-sm">→</span>
                </Link>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
