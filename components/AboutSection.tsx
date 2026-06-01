'use client';

import Image from 'next/image';

export default function AboutSection() {
  const equipment = [
    'Canon 5D Mark IV Camera with a 24-105mm Everyday Zoom Lens',
    'Nikon D5 Camera with a High-Quality 24-70mm Zoom Lens',
    'Nikon Wide-Angle Lens (24mm) — Perfect for landscapes and low light!',
    'Canon EF100-400MM Lens',
    'Wondlan Wer01 Wireless Slider Time Lapse',
    'Nikon D5 24-70mm F2.8',
    'Nikon Af-S 24Mm F/1.4G Ed Lens',
    'Manfrotto Light and Compact Tripod',
  ];

  return (
    <section id="about" className="py-24 px-6 bg-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white/40 backdrop-blur-lg border border-white/60 shadow-2xl rounded-[2.5rem] p-8 md:p-16 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="flex justify-center group relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl blur-2xl"></div>
              <Image
                src="/about22.jpg"
                alt="Shivangi"
                width={400}
                height={500}
                className="rounded-3xl shadow-2xl relative z-10 group-hover:scale-105 group-hover:rotate-1 transition-all duration-700 border border-white/50 object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight leading-[1.15]">
                Life is an adventure. <span className="text-slate-600 block">Capture every minute.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 font-light italic leading-relaxed">
                I'm Shivangi, a freelance photographer. My passion is taking photos of the most stunning places around the world.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-4 pb-2 border-b border-slate-900/10">A Little About Me</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    <span className="font-serif font-black text-4xl mr-3 float-left text-slate-900 mt-1 leading-[0.8]">N</span>
                    Life is good when it is simple and clear. Beautiful designs and good work take time and care. When everything connects perfectly, it brings a great result that everyone can enjoy. We focus on keeping things steady and moving in the right direction. Every small detail matters to create something truly great.
                  </p>
                  <p className="text-slate-500 text-[10px] font-bold tracking-wider uppercase mt-6 border-t border-slate-200/50 pt-3 w-fit">— Shivangi</p>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-4 pb-2 border-b border-slate-900/10">My Equipment</h3>
                  <ul className="grid grid-cols-1 gap-2">
                    {equipment.map((item, index) => (
                      <li key={index} className="text-[11px] text-slate-700 bg-white/40 backdrop-blur-sm border border-white/50 rounded-xl px-4 py-2.5 flex items-center gap-3 hover:bg-white/80 hover:border-slate-300/30 hover:shadow-md transition-all duration-300">
                        <svg className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
