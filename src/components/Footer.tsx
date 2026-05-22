import Link from 'next/link';

const serviceLinks = [
  { href: '/services#newborn', label: 'Newborn' },
  { href: '/services#milestone', label: 'Milestone' },
  { href: '/services#family', label: 'Family' },
  { href: '/services#portrait', label: 'Portrait' },
  { href: '/services#cake-smash', label: 'Cake Smash' },
  { href: '/mini-sessions', label: 'Mini Sessions' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Services */}
          <div>
            <h3 className="uppercase text-xs tracking-widest font-semibold mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand-pink transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Follow Along */}
          <div>
            <h3 className="uppercase text-xs tracking-widest font-semibold mb-6">
              Follow Along
            </h3>
            <a
              href="https://instagram.com/photo.by.tiff"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-pink transition-colors duration-200 mb-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
              @photo.by.tiff
            </a>
            {/* Instagram Feed Placeholder Grid */}
            <div className="grid grid-cols-2 gap-2 max-w-[200px]">
              <div className="bg-gray-800 aspect-square rounded" />
              <div className="bg-gray-800 aspect-square rounded" />
              <div className="bg-gray-800 aspect-square rounded" />
              <div className="bg-gray-800 aspect-square rounded" />
            </div>
          </div>

          {/* Column 3: Get In Touch */}
          <div>
            <h3 className="uppercase text-xs tracking-widest font-semibold mb-6">
              Get In Touch
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Ready to book your session?
            </p>
            <ul className="space-y-2 mb-6">
              <li>
                <a
                  href="mailto:hello@photobytiff.com"
                  className="text-sm text-gray-400 hover:text-brand-pink transition-colors duration-200"
                >
                  hello@photobytiff.com
                </a>
              </li>
              <li className="text-sm text-gray-400">Spring Lake, NC</li>
            </ul>
            <Link
              href="/contact"
              className="inline-block border border-white text-white rounded-full px-6 py-2 uppercase tracking-widest text-xs font-semibold hover:bg-white hover:text-brand-dark transition-all duration-200"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-16 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2026 Lifestyle Photography By Tiffany
          </p>
        </div>
      </div>
    </footer>
  );
}
