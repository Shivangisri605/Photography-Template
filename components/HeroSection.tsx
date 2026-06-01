'use client';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center text-slate-900 px-4 max-w-4xl">
        <h1 className="text-5xl md:text-8xl font-black mb-6 animate-fadeIn tracking-[0.2em] uppercase text-slate-900">
          Shivangi
        </h1>
        <p className="text-sm md:text-lg font-medium mb-12 animate-slideIn text-slate-600 tracking-[0.3em] uppercase max-w-2xl mx-auto">
          Award Winning Nature Photographer
        </p>
        <a 
          href="#portfolio"
          className="inline-block px-10 py-4 border-2 border-slate-900 hover:bg-slate-900 hover:text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 rounded-none hover:shadow-lg transform hover:-translate-y-1"
        >
          See My Portfolio
        </a>
      </div>

      {/* Bouncing Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-slate-400 uppercase tracking-widest text-[9px] font-bold">Scroll Down</span>
        <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}
