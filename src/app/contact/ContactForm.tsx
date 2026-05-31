'use client';

import { useState, FormEvent } from 'react';
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
  company: string; // honeypot — hidden from real users
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    sessionType: '',
    preferredLocation: '',
    message: '',
    howDidYouHear: '',
    company: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please email hello@photobytiff.com directly.');
      }
    } catch {
      setError('Something went wrong. Please email hello@photobytiff.com directly.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center py-24">
        <div className="text-brand-pink mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <h3 className="text-editorial font-bold mb-4">Thank you!</h3>
        <p className="text-brand-gray">
          Your message has been sent. I&apos;ll be in touch within 24 hours to discuss your session.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Honeypot field — hidden from real users, catches bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off"
          value={formData.company} onChange={handleChange} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="sr-only">Full Name</label>
          <input type="text" id="name" name="name" required placeholder="Full Name *" value={formData.name} onChange={handleChange}
            className="w-full px-0 py-4 border-0 border-b border-gray-300 bg-transparent text-sm focus:outline-none focus:border-brand-pink placeholder:text-gray-400 transition-colors" />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input type="email" id="email" name="email" required placeholder="Email *" value={formData.email} onChange={handleChange}
            className="w-full px-0 py-4 border-0 border-b border-gray-300 bg-transparent text-sm focus:outline-none focus:border-brand-pink placeholder:text-gray-400 transition-colors" />
        </div>
      </div>

      <div className="space-y-6 mt-6">
        <div>
          <label htmlFor="phone" className="sr-only">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange}
            className="w-full px-0 py-4 border-0 border-b border-gray-300 bg-transparent text-sm focus:outline-none focus:border-brand-pink placeholder:text-gray-400 transition-colors" />
        </div>

        <div className="relative">
          <label htmlFor="sessionType" className="sr-only">Session Type</label>
          <select id="sessionType" name="sessionType" value={formData.sessionType} onChange={handleChange}
            className="w-full px-0 py-4 border-0 border-b border-gray-300 bg-transparent text-sm focus:outline-none focus:border-brand-pink transition-colors appearance-none cursor-pointer">
            <option value="" disabled>Select a session type</option>
            <option value="newborn">Newborn</option>
            <option value="maternity">Maternity</option>
            <option value="milestone">Milestone</option>
            <option value="family">Family</option>

            <option value="cake-smash">Cake Smash</option>
            <option value="mini-session">Mini Session</option>
            <option value="other">Other</option>
          </select>
          <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
          </div>
        </div>

        <div>
          <label htmlFor="preferredLocation" className="sr-only">Preferred Location</label>
          <input type="text" id="preferredLocation" name="preferredLocation" placeholder="Preferred Location" value={formData.preferredLocation} onChange={handleChange}
            className="w-full px-0 py-4 border-0 border-b border-gray-300 bg-transparent text-sm focus:outline-none focus:border-brand-pink placeholder:text-gray-400 transition-colors" />
        </div>

        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea id="message" name="message" rows={5} placeholder="Message" value={formData.message} onChange={handleChange}
            className="w-full px-0 py-4 border-0 border-b border-gray-300 bg-transparent text-sm focus:outline-none focus:border-brand-pink placeholder:text-gray-400 transition-colors resize-none" />
        </div>

        <div className="relative">
          <label htmlFor="howDidYouHear" className="sr-only">How Did You Hear About Us</label>
          <select id="howDidYouHear" name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange}
            className="w-full px-0 py-4 border-0 border-b border-gray-300 bg-transparent text-sm focus:outline-none focus:border-brand-pink transition-colors appearance-none cursor-pointer">
            <option value="" disabled>How did you hear about us?</option>
            <option value="instagram">Instagram</option>
            <option value="facebook">Facebook</option>
            <option value="google">Google</option>
            <option value="word-of-mouth">Word of Mouth</option>
            <option value="returning-client">Returning Client</option>
            <option value="other">Other</option>
          </select>
          <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
          </div>
        </div>
      </div>

      {error && <p className="mt-4 text-sm text-red-500">{error}</p>}

      <button type="submit" disabled={submitting}
        className="mt-10 w-full md:w-auto bg-brand-dark text-white rounded-full px-12 py-4 uppercase tracking-widest text-sm font-semibold hover:opacity-80 transition-opacity disabled:opacity-50">
        {submitting ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
