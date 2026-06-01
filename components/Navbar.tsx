'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-md border-b border-white/30 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold tracking-widest text-slate-900 uppercase hover:opacity-80 transition-opacity">
              Shivangi
            </Link>
          </div>
          
          <button 
            className="lg:hidden text-slate-800 hover:text-black focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <ul className={`${isOpen ? 'flex bg-white/95 backdrop-blur-lg absolute top-full left-0 right-0 py-6 px-8 border-b border-gray-200/50 flex-col shadow-lg' : 'hidden'} lg:relative lg:top-auto lg:left-auto lg:right-auto lg:p-0 lg:border-none lg:shadow-none lg:flex lg:flex-row gap-8 text-slate-700 font-semibold uppercase text-xs tracking-widest`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="hover:text-black transition-colors duration-200 relative py-2 block group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-slate-900 group-hover:after:w-full after:transition-all after:duration-300">
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
