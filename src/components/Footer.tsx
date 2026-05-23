import Link from 'next/link';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          {/* Left: Follow */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider mb-3">Follow</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/photo.by.tiff"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-brand-gray hover:text-brand-dark transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Center: Nav */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] text-brand-gray hover:text-brand-dark transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Location + Copyright */}
          <div className="text-right">
            <p className="text-[15px] text-brand-gray">Spring Lake, NC</p>
            <p className="text-[13px] text-brand-gray mt-1">
              &copy; 2026 Tiffany Jarosz Photography
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
