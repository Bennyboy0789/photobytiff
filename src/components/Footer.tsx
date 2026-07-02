import Link from 'next/link';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

const serviceLinks = [
  { href: '/services/newborn-photography', label: 'Newborn' },
  { href: '/services/maternity-photography', label: 'Maternity' },
  { href: '/services/family-photography', label: 'Family' },
  { href: '/services/cake-smash-photography', label: 'Cake Smash' },
  { href: '/services/milestone-photography', label: 'Milestone' },
  { href: '/fort-bragg-family-photographer', label: 'Fort Bragg Families' },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          {/* Left: Follow */}
          <div>
            <h2 className="text-[13px] font-bold uppercase tracking-wider mb-3">Follow</h2>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/photo.by.tiff"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-brand-gray hover:text-brand-dark transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/LifestylePhotographyByTiffany"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-brand-gray hover:text-brand-dark transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Center: Nav */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 md:max-w-xs">
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

          {/* Sessions */}
          <div>
            <h2 className="text-[13px] font-bold uppercase tracking-wider mb-3">Sessions</h2>
            <div className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[14px] text-brand-gray hover:text-brand-dark transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Contact + Copyright */}
          <div className="md:text-right">
            <a
              href="tel:+19107798088"
              className="text-[15px] text-brand-gray hover:text-brand-dark transition-colors block"
            >
              (910) 779-8088
            </a>
            <p className="text-[15px] text-brand-gray mt-1">Spring Lake, NC</p>
            <p className="text-[13px] text-brand-gray mt-1">
              &copy; {new Date().getFullYear()} Tiffany Jarosz Photography
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
