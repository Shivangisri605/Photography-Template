'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function PortfolioSection() {
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const portfolioItems = [
    { id: 1, title: 'Nature Series 1', image: '/an1.jpg' },
    { id: 2, title: 'Nature Series 2', image: '/an2.jpg' },
    { id: 3, title: 'Nature Series 3', image: '/an3.jpg' },
    { id: 4, title: 'Mountain Landscape 1', image: '/br10.jpg' },
    { id: 5, title: 'Mountain Landscape 2', image: '/br11.jpg' },
    { id: 6, title: 'Mountain Landscape 3', image: '/br12.jpg' },
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-transparent">
      <div className="container mx-auto max-w-6xl">
        <p className="text-center text-[10px] uppercase font-extrabold tracking-[0.3em] text-slate-500 mb-3 animate-fadeIn">
          Visual Journey
        </p>
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-slate-900 tracking-tight">
          Selected Portfolio
        </h2>
        <p className="text-center text-slate-600 mb-16 text-sm font-light max-w-md mx-auto leading-relaxed">
          Explore curated photographic works and landscape series from around the world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-[2rem] bg-white/20 backdrop-blur-sm border border-white/50 shadow-2xl shadow-slate-200/40 hover:shadow-3xl hover:shadow-slate-300/50 hover:-translate-y-2 transition-all duration-500 cursor-pointer md:cursor-default"
              onClick={() => setSelectedItem(item)}
            >
              <div className="overflow-hidden aspect-[4/3] relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              
              {/* Frosted Slide-Up Overlay - Hidden on mobile, visible on hover on desktop */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/95 backdrop-blur-md border-t border-white/20 transform translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-out flex justify-between items-center shadow-lg">
                <div>
                  <p className="text-[9px] uppercase font-extrabold tracking-widest text-slate-400 mb-1">Fine Art Series</p>
                  <h3 className="text-slate-900 font-extrabold text-sm tracking-wide">{item.title}</h3>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedItem(item);
                  }}
                  className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white transform scale-50 opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100 transition-all duration-500 ease-out hover:bg-slate-800 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal/Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-slate-900 shadow-lg transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Container */}
            <div className="relative aspect-[4/3] bg-slate-200">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Title Section */}
            <div className="p-8 bg-gradient-to-r from-slate-50 to-white">
              <p className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400 mb-2">Fine Art Series</p>
              <h3 className="text-2xl font-black text-slate-900">{selectedItem.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
