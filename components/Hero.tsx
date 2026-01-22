
import React, { useEffect, useState } from 'react';
import image1 from './assets/image1.jpeg';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-[95vh] flex flex-col items-center justify-center px-6 pt-32 pb-16 overflow-hidden">
      <div className="relative z-10 text-center max-w-5xl mx-auto transition-all duration-[1.2s] ease-out">
        <p className={`text-[10px] tracking-[0.5em] uppercase mb-8 font-bold text-brand-accent transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          MANGALORE • EST. 2024
        </p>
        <h1 className={`font-serif text-6xl md:text-8xl lg:text-[9.5rem] mb-10 leading-[0.85] tracking-tighter text-brand-dark transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          naaazi<span className="text-brand-accent italic">.</span><br />
          <span className="italic font-light opacity-80">scraft</span>
        </h1>
        <p className={`text-xs md:text-sm text-brand-dark/40 max-w-xl mx-auto mb-14 leading-relaxed font-light transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Redefining the art of gifting through meticulous curation and artisanal craftsmanship.
          Your most precious milestones, hand-wrapped in luxury.
        </p>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href="#collections"
            className="bg-brand-dark text-brand-cream px-10 py-4 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all hover:bg-brand-accent hover:scale-105 active:scale-95 shadow-xl shadow-brand-dark/10"
          >
            Explore Studio
          </a>
          <a
            href="#contact"
            className="text-[10px] font-bold tracking-[0.2em] text-brand-dark/60 hover:text-brand-dark transition-colors uppercase border-b border-brand-dark/10 pb-1"
          >
            Contact Artist
          </a>
        </div>
      </div>

      <div className={`mt-20 w-full max-w-[280px] md:max-w-xs mx-auto transition-all duration-[1.5s] delay-800 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="relative group">
          <div className="absolute inset-0 bg-brand-dark/5 -rotate-2 rounded-[2rem] transition-transform group-hover:rotate-0 duration-700"></div>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl border-[8px] border-white">
            <img
              src={image1}
              alt="naaazi signature curation"
              className="w-full h-auto object-cover transition-transform duration-[2s] group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
