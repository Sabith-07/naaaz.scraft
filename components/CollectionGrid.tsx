
import React, { useState } from 'react';
import { HAMPER_PROJECTS, CATEGORIES } from '../constants';
import { Occasion } from '../types';

interface CollectionGridProps {
  onSelectProject: (id: string) => void;
}

export const CollectionGrid: React.FC<CollectionGridProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<Occasion>(Occasion.ALL);

  const filteredProjects = activeTab === Occasion.ALL
    ? HAMPER_PROJECTS
    : HAMPER_PROJECTS.filter(p => p.occasion === activeTab);

  // Re-run observer when filtered projects change to fix "blank" issue on re-filter
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-grid').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [filteredProjects]);

  return (
    <section id="collections" className="py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12 reveal">
        <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-brand-accent mb-4 block">The Studio Archive</span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-6xl text-brand-dark mb-4">Curated Collections</h2>
        <p className="text-brand-dark/40 text-xs md:text-sm tracking-widest uppercase">Elegance in every wrap.</p>
      </div>

      {/* Category Pills - Smooth scrolling on mobile */}
      <div className="flex overflow-x-auto no-scrollbar gap-3 mb-10 md:mb-16 pb-2 justify-start px-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat as Occasion)}
            className={`flex-shrink-0 px-5 md:px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 border whitespace-nowrap ${activeTab === cat
              ? 'bg-brand-dark text-brand-cream border-brand-dark shadow-lg scale-105'
              : 'bg-white text-brand-dark/50 border-brand-dark/5 hover:border-brand-dark/20 shadow-sm'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid - Improved responsiveness: 2 cols on mobile, 4 on large */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-10">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project.id)}
            className="group cursor-pointer flex flex-col product-card reveal-grid opacity-0 translate-y-8 transition-all duration-700 ease-out [&.active]:opacity-100 [&.active]:translate-y-0"
            style={{ transitionDelay: `${idx * 50}ms` }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-white shadow-sm mb-3 md:mb-4 border border-brand-dark/5">
              {project.images.length > 0 && (
                <img
                  src={project.images[0].src}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors duration-500"></div>
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hidden md:block">
                <div className="bg-white/80 backdrop-blur-md px-3 py-2 rounded-xl text-center border border-white/50">
                  <p className="text-[9px] font-bold tracking-[0.2em] text-brand-dark uppercase">View Series</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center text-center px-1">
              <h3 className="text-[10px] md:text-xs font-medium text-brand-dark/90 line-clamp-1 mb-1 tracking-tight">
                {project.title}
              </h3>
              <p className="text-brand-accent font-bold text-xs md:text-sm">₹{project.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-24 md:py-32 border border-brand-dark/5 rounded-[3rem] bg-brand-soft/20 mx-4">
          <p className="text-brand-dark/30 font-serif italic text-lg md:text-xl">The vault is currently being replenished.</p>
        </div>
      )}
    </section>
  );
};
