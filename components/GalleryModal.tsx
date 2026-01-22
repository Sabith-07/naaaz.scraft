
import React from 'react';
import { HAMPER_PROJECTS } from '../constants';

interface GalleryModalProps {
  projectId: string | null;
  onClose: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ projectId, onClose }) => {
  if (!projectId) return null;

  const project = HAMPER_PROJECTS.find(p => p.id === projectId);
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-12">
      <div
        className="absolute inset-0 bg-brand-dark/95 backdrop-blur-2xl transition-opacity duration-700"
        onClick={onClose}
      />

      <div className="relative w-full max-w-6xl h-full max-h-[92vh] bg-brand-cream rounded-[4rem] overflow-hidden shadow-2xl flex flex-col border border-white/20 animate-in fade-in zoom-in duration-500">

        {/* Modal Header */}
        <div className="flex justify-between items-center px-8 md:px-16 py-10 border-b border-brand-dark/5 bg-white/40">
          <div>
            <span className="text-[9px] tracking-[0.6em] font-bold text-brand-accent uppercase mb-2 block">Archive Selection</span>
            <h3 className="font-serif text-3xl md:text-5xl text-brand-dark tracking-tight">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-14 h-14 flex items-center justify-center bg-brand-dark text-brand-cream rounded-full hover:bg-brand-accent transition-all duration-500 active:scale-90 shadow-xl group"
          >
            <svg className="w-6 h-6 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto flex-1 px-8 py-12 md:px-16 no-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            <div className="lg:col-span-4 space-y-12 lg:sticky lg:top-0">
              <div className="space-y-6">
                <p className="text-brand-accent font-serif text-4xl italic">₹{project.price.toLocaleString()}</p>
                <p className="text-brand-dark/60 leading-relaxed font-light text-base tracking-wide">
                  {project.description}
                </p>
              </div>

              <div className="pt-10 border-t border-brand-dark/10">
                <h4 className="text-[10px] font-bold tracking-[0.5em] uppercase text-brand-dark/30 mb-6">Concierge Notes</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-xs font-medium text-brand-dark/70">
                    <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></span>
                    <span>Handcrafted to order</span>
                  </div>
                  <div className="flex items-center space-x-4 text-xs font-medium text-brand-dark/70">
                    <span className="w-2 h-2 bg-brand-accent rounded-full"></span>
                    <span>Express studio dispatch available</span>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/919110253480?text=I'm interested in ${project.title}`}
                target="_blank"
                className="block w-full text-center bg-brand-dark text-brand-cream py-6 rounded-full font-bold tracking-[0.4em] text-[10px] uppercase hover:bg-brand-accent transition-all shadow-2xl shadow-brand-dark/10"
              >
                Inquire via WhatsApp (+91 9110253480)
              </a>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {project.images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`
                      relative overflow-hidden rounded-[3rem] shadow-2xl border-[12px] border-white transition-all duration-700 hover:scale-[1.02] active:scale-95
                      ${img.orientation === 'landscape' ? 'md:col-span-2' : ''}
                      ${img.orientation === 'portrait' ? 'md:col-span-1 aspect-[3/4]' : ''}
                      ${img.orientation === 'square' ? 'md:col-span-1 aspect-square' : ''}
                    `}
                  >
                    <img
                      src={img.src}
                      alt={`${project.title} detailed view ${idx + 1}`}
                      className="w-full h-full object-cover md:grayscale-[20%] md:hover:grayscale-0 transition-all duration-1000"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-20 py-10 text-center border-t border-brand-dark/5">
                <p className="text-[10px] tracking-[0.5em] uppercase text-brand-dark/20 font-bold">End of Series Detail</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
