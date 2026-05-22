'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

interface FormData {
  name: string;
  email: string;
  phone: string;
  sessionType: string;
  preferredLocation: string;
  message: string;
  howDidYouHear: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    sessionType: '',
    preferredLocation: '',
    message: '',
    howDidYouHear: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/hero-6.jpg"
          alt="Contact Photo by Tiff"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center">
          <h1 className="text-hero font-bold text-white">CONTACT</h1>
          <p className="text-white/70 text-sm uppercase tracking-widest mt-4">
            Let&apos;s create something beautiful
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* LEFT SIDE — Info */}
          <ScrollReveal direction="left">
            <h2 className="text-editorial font-bold mb-6">
              Your story starts here
            </h2>
            <div className="w-16 h-[2px] bg-brand-pink mb-8" />
            <p className="text-brand-gray leading-relaxed mb-12">
              I&apos;d love to hear about the moments you want to capture. Whether
              it&apos;s a growing family, a new baby, or a milestone celebration,
              let&apos;s chat about bringing your vision to life.
            </p>

            {/* Contact Details */}
            <div className="space-y-0">
              {/* Email */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-pink flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <span className="text-sm text-brand-gray">
                  hello@photobytiff.com
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-pink flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="text-sm text-brand-gray">
                  Spring Lake, NC
                </span>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-pink flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" />
                  </svg>
                </div>
                <span className="text-sm text-brand-gray">
                  @photo.by.tiff
                </span>
              </div>

              {/* Response Time */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-pink flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <span className="text-sm text-brand-gray">
                  Typically responds within 24 hours
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT SIDE — Form */}
          <ScrollReveal direction="right">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="text-brand-pink mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-editorial font-bold mb-4">Thank you!</h3>
                <p className="text-brand-gray">
                  Your message has been sent. I&apos;ll be in touch within 24
                  hours to discuss your session.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Name & Email — side by side */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-0 py-4 border-0 border-b border-gray-300 bg-transparent text-sm focus:outline-none focus:border-brand-pink placeholder:text-gray-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-0 py-4 border-0 border-b border-gray-300 bg-transparent text-sm focus:outline-none focus:border-brand-pink placeholder:text-gray-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Remaining fields */}
                <div className="space-y-6 mt-6">
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-0 py-4 border-0 border-b border-gray-300 bg-transparent text-sm focus:outline-none focus:border-brand-pink placeholder:text-gray-400 transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="sessionType" className="sr-only">
                      Session Type
                    </label>
                    <select
                      id="sessionType"
                      name="sessionType"
                      value={formData.sessionType}
                      onChange={handleChange}
                      className="w-full px-0 py-4 border-0 border-b border-gray-300 bg-transparent text-sm focus:outline-none focus:border-brand-pink placeholder:text-gray-400 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        Select a session type
                      </option>
                      <option value="newborn">Newborn</option>
                      <option value="milestone">Milestone</option>
                      <option value="family">Family</option>
                      <option value="portrait">Portrait</option>
                      <option value="cake-smash">Cake Smash</option>
                      <option value="mini-session">Mini Session</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="preferredLocation" className="sr-only">
                      Preferred Location
                    </label>
                    <input
                      type="text"
                      id="preferredLocation"
                      name="preferredLocation"
                      placeholder="Preferred Location"
                      value={formData.preferredLocation}
                      onChange={handleChange}
                      className="w-full px-0 py-4 border-0 border-b border-gray-300 bg-transparent text-sm focus:outline-none focus:border-brand-pink placeholder:text-gray-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-0 py-4 border-0 border-b border-gray-300 bg-transparent text-sm focus:outline-none focus:border-brand-pink placeholder:text-gray-400 transition-colors resize-none"
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="howDidYouHear" className="sr-only">
                      How Did You Hear About Us
                    </label>
                    <select
                      id="howDidYouHear"
                      name="howDidYouHear"
                      value={formData.howDidYouHear}
                      onChange={handleChange}
                      className="w-full px-0 py-4 border-0 border-b border-gray-300 bg-transparent text-sm focus:outline-none focus:border-brand-pink placeholder:text-gray-400 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        How did you hear about us?
                      </option>
                      <option value="instagram">Instagram</option>
                      <option value="facebook">Facebook</option>
                      <option value="google">Google</option>
                      <option value="word-of-mouth">Word of Mouth</option>
                      <option value="returning-client">Returning Client</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-10 w-full md:w-auto bg-brand-dark text-white rounded-full px-12 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-brand-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 text-center">
        <p className="text-lg font-bold mb-2">Follow along on Instagram</p>
        <Link
          href="https://instagram.com/photo.by.tiff"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-pink hover:underline text-sm"
        >
          @photo.by.tiff
        </Link>
      </section>
    </main>
  );
}
