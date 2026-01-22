
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CollectionGrid } from './components/CollectionGrid';
import { GiftRecommender } from './components/GiftRecommender';
import { Contact } from './components/Contact';
import { GalleryModal } from './components/GalleryModal';

const App: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-brand-cream selection:bg-brand-accent selection:text-white">
      <Navbar onSelectProject={setSelectedProjectId} />

      <main>
        {/* Section 1: Hero - The Hook */}
        <Hero />

        {/* Section 2: Collections - The Product Gallery */}
        <CollectionGrid onSelectProject={setSelectedProjectId} />

        {/* Section 3: Metrics - Social Proof & Trust */}
        <section className="bg-brand-dark text-brand-cream py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
            <div className="reveal">
              <p className="font-serif text-4xl md:text-5xl mb-2 italic text-brand-accent">1,200+</p>
              <p className="text-[9px] uppercase tracking-[0.4em] text-brand-cream/30 font-bold">Moments Created</p>
            </div>
            <div className="reveal">
              <p className="font-serif text-4xl md:text-5xl mb-2 italic text-brand-accent">100%</p>
              <p className="text-[9px] uppercase tracking-[0.4em] text-brand-cream/30 font-bold">Artisanal Sourcing</p>
            </div>
            <div className="reveal">
              <p className="font-serif text-4xl md:text-5xl mb-2 italic text-brand-accent">48h</p>
              <p className="text-[9px] uppercase tracking-[0.4em] text-brand-cream/30 font-bold">Concierge Support</p>
            </div>
            <div className="reveal">
              <p className="font-serif text-4xl md:text-5xl mb-2 italic text-brand-accent">Elite</p>
              <p className="text-[9px] uppercase tracking-[0.4em] text-brand-cream/30 font-bold">Global Shipping</p>
            </div>
          </div>
        </section>

        {/* Section 4: AI Curator - The Unique Value Proposition */}
        <GiftRecommender />

        {/* Section 5: Contact - The Final CTA */}
        <Contact />
      </main>

      {/* Floating Concierge Action Button */}
      <button
        className="fixed bottom-8 right-8 z-[90] bg-brand-dark text-brand-cream p-5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:bg-brand-accent transition-all duration-500 active:scale-90 group"
        onClick={() => window.location.href = '#gift-ai'}
      >
        <svg className="w-7 h-7 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      <footer className="bg-brand-cream py-20 px-6 border-t border-brand-dark/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.5em] font-bold text-brand-dark/30">
          <div className="flex flex-col items-center md:items-start space-y-4 mb-10 md:mb-0">
            <h4 className="font-serif text-2xl lowercase italic text-brand-dark tracking-tighter">naaazi.scraft</h4>
            <p>&copy; 2025 Collective Studio</p>
          </div>
          <div className="flex space-x-12">
            <a href="https://instagram.com/naaazi.scraft" target="_blank" className="hover:text-brand-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Pinterest</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy</a>
            <a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      <GalleryModal
        projectId={selectedProjectId}
        onClose={() => setSelectedProjectId(null)}
      />
    </div>
  );
};

export default App;
