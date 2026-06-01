'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Message sent successfully! ' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to send message' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error sending message. Please try again.' });
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-transparent">
      <div className="container mx-auto max-w-2xl">
        <p className="text-center text-[10px] uppercase font-extrabold tracking-[0.3em] text-slate-500 mb-3">
          Get In Touch
        </p>
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-slate-900 tracking-tight">
          Let's Collaborate
        </h2>
        <p className="text-center text-slate-600 mb-16 text-sm font-light max-w-md mx-auto leading-relaxed">
          Have an inquiry, project idea, or shoot request? Drop a message below and let's bring it to life.
        </p>

        <form onSubmit={handleSubmit} className="bg-white/40 backdrop-blur-lg border border-white/60 p-8 md:p-12 rounded-[2rem] shadow-2xl">
          <div className="mb-8 relative group">
            <label htmlFor="name" className="block text-[9px] uppercase font-extrabold tracking-widest text-slate-500 mb-2 group-focus-within:text-slate-900 transition-colors">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-0 py-2 border-b-2 border-slate-300/40 focus:border-slate-900 transition-colors bg-transparent outline-none text-slate-900 text-sm font-semibold placeholder-slate-400/70"
              placeholder="Your name"
            />
          </div>

          <div className="mb-8 relative group">
            <label htmlFor="email" className="block text-[9px] uppercase font-extrabold tracking-widest text-slate-500 mb-2 group-focus-within:text-slate-900 transition-colors">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-0 py-2 border-b-2 border-slate-300/40 focus:border-slate-900 transition-colors bg-transparent outline-none text-slate-900 text-sm font-semibold placeholder-slate-400/70"
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-8 relative group">
            <label htmlFor="message" className="block text-[9px] uppercase font-extrabold tracking-widest text-slate-500 mb-2 group-focus-within:text-slate-900 transition-colors">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-0 py-2 border-b-2 border-slate-300/40 focus:border-slate-900 transition-colors bg-transparent outline-none text-slate-900 text-sm font-semibold placeholder-slate-400/70 resize-none"
              placeholder="Your message here..."
            />
          </div>

          {message && (
            <div
              className={`mb-6 p-4 rounded-lg text-sm font-semibold text-center ${
                message.type === 'success'
                  ? 'bg-green-100 text-green-800 border border-green-300'
                  : 'bg-red-100 text-red-800 border border-red-300'
              }`}
            >
              {message.text}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-bold text-xs uppercase tracking-widest py-4 transition-all duration-300 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="mt-16 flex justify-center gap-6">
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-slate-300/80 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-900 hover:-translate-y-1 transition-all duration-300"
            aria-label="Twitter"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9-5 9-5z" />
            </svg>
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-slate-300/80 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-900 hover:-translate-y-1 transition-all duration-300"
            aria-label="Instagram"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
