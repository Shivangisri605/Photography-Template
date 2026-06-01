'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/90 backdrop-blur-md text-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-slate-400/60 flex items-center justify-center text-slate-300 hover:text-white hover:border-white hover:-translate-y-1 transition-all duration-300"
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
              className="w-10 h-10 rounded-full border border-slate-400/60 flex items-center justify-center text-slate-300 hover:text-white hover:border-white hover:-translate-y-1 transition-all duration-300"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
              </svg>
            </a>
          </div>
          <p className="mb-2 text-xs tracking-wider text-slate-300">
            © {currentYear} Shivangi. All rights reserved.
          </p>
          <p className="text-slate-500 text-[9px] uppercase tracking-[0.25em] font-extrabold mt-2">
            Award Winning Nature Photographer
          </p>
        </div>
      </div>
    </footer>
  );
}
