
import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-brand-dark text-brand-cream relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 blur-[120px] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="reveal space-y-12">
            <div>
              <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-brand-accent mb-6 block">Direct Inquiry</span>
              <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-[1] text-brand-cream">Let's craft <br /> <span className="italic font-light opacity-80">your story.</span></h2>
              <p className="text-brand-cream/50 text-base md:text-lg font-light leading-relaxed max-w-md">
                Whether for a singular gift or a grand series, we are here to architect the perfect expression of your intent.
              </p>
            </div>

            <div className="space-y-8">
              <a 
                href="https://www.instagram.com/naaazi.scraft__?igsh=MWxkZzI3cjZzdmU4NQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-6 p-4 rounded-3xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/20 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-500">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-accent mb-1">Live Portfolio</p>
                  <p className="text-xl font-serif text-brand-cream/80 tracking-tight">@naaazi.scraft_</p>
                </div>
              </a>

              <div className="flex flex-col md:flex-row gap-12 pt-8 border-t border-white/5">
                <div className="space-y-2">
                   <p className="text-[8px] uppercase tracking-[0.4em] text-brand-accent">Correspondence</p>
                   <p className="text-base font-medium text-brand-cream/70">nazmina - 9110253480</p>
                </div>
                <div className="space-y-2">
                   <p className="text-[8px] uppercase tracking-[0.4em] text-brand-accent">Studio Visit</p>
                   <p className="text-base font-medium text-brand-cream/70">Mangalore, Karnataka</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[3.5rem] border border-white/10 space-y-6">
              {submitted ? (
                <div className="py-20 text-center space-y-4 animate-pulse">
                   <p className="font-serif text-3xl italic text-brand-accent">Thank you.</p>
                   <p className="text-xs uppercase tracking-widest text-brand-cream/40">We will respond to your vision shortly.</p>
                </div>
              ) : (
                <>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-cream/40 px-2">Your Name</label>
                    <input required type="text" className="w-full bg-white/5 border-none p-5 rounded-2xl focus:ring-1 focus:ring-brand-accent text-brand-cream text-xs placeholder:text-white/10 transition-all" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-cream/40 px-2">Digital Mail</label>
                    <input required type="email" className="w-full bg-white/5 border-none p-5 rounded-2xl focus:ring-1 focus:ring-brand-accent text-brand-cream text-xs placeholder:text-white/10 transition-all" placeholder="email@address.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-cream/40 px-2">The Vision</label>
                    <textarea required rows={4} className="w-full bg-white/5 border-none p-5 rounded-3xl focus:ring-1 focus:ring-brand-accent text-brand-cream text-xs placeholder:text-white/10 transition-all resize-none" placeholder="Briefly describe what you'd like us to craft..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-brand-cream text-brand-dark py-6 rounded-full font-bold tracking-[0.4em] text-[10px] uppercase hover:bg-brand-accent hover:text-white transition-all shadow-2xl active:scale-95">
                    Send Inquiry
                  </button>
                </>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
