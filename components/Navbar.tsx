
import React, { useState, useEffect } from 'react';

import { HAMPER_PROJECTS } from '../constants';

interface NavbarProps {
  onSelectProject?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectProject }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); // Search Modal State
  const [enquiryOpen, setEnquiryOpen] = useState(false); // Enquiry Modal State
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter projects based on search query
  const filteredResults = searchQuery.trim() === ''
    ? []
    : HAMPER_PROJECTS.filter(p =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const navLinks = [
    { name: 'Collections', href: '#collections' },
    { name: 'Gift AI', href: '#gift-ai' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out px-6 md:px-12 py-6 ${scrolled ? 'nav-scrolled' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-9 h-9 rounded-full overflow-hidden border border-brand-accent/30 group-hover:border-brand-accent transition-colors duration-500">
              <img src="https://picsum.photos/seed/naazi-logo/100" alt="naaazi" className="w-full h-full object-cover" />
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight text-brand-dark group-hover:text-brand-accent transition-colors duration-500">naaazi.scraft</span>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-[10px] uppercase tracking-[0.3em] font-bold text-brand-dark/70 hover:text-brand-dark transition-colors after:content-[''] after:absolute after:w-0 after:h-[1px] after:bottom-[-4px] after:left-0 after:bg-brand-accent after:transition-all hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            <button
              className="text-brand-dark hover:text-brand-accent transition-colors"
              onClick={() => setSearchOpen(true)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button
              className="text-brand-dark hover:text-brand-accent transition-colors relative"
              onClick={() => setEnquiryOpen(true)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand-accent rounded-full animate-pulse"></span>
            </button>
            <button
              className="md:hidden text-brand-dark focus:outline-none"
              onClick={() => setMobileMenuOpen(true)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Enquiry Modal */}
      {enquiryOpen && (
        <div className="fixed inset-0 z-[130] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-brand-dark/30 backdrop-blur-sm" onClick={() => setEnquiryOpen(false)} />
          <div className="relative bg-white rounded-[2rem] p-8 md:p-12 w-full max-w-lg shadow-2xl animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setEnquiryOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-brand-dark/5 transition-colors"
            >
              <svg className="w-6 h-6 text-brand-dark/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-10">
              <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-brand-accent mb-3 block">Bespoke Gifting</span>
              <h3 className="font-serif text-3xl text-brand-dark">Start an Enquiry</h3>
            </div>

            <div className="space-y-4">
              <a
                href="tel:9110253480"
                className="flex items-center justify-between p-6 rounded-2xl bg-brand-cream border border-brand-dark/5 hover:border-brand-dark/20 transition-all group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-brand-dark text-brand-cream flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-serif text-lg text-brand-dark">Call Us</p>
                    <p className="text-xs text-brand-dark/50 uppercase tracking-wider">Nazmina - 9110253480</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-brand-dark/30 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="https://instagram.com/naaazi.scraft"
                target="_blank"
                className="flex items-center justify-between p-6 rounded-2xl bg-brand-cream border border-brand-dark/5 hover:border-brand-dark/20 transition-all group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-brand-dark text-brand-cream flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4a8 8 0 100 16 8 8 0 000-16zM8.5 8h7a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.5 10.5a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-serif text-lg text-brand-dark">Instagram DM</p>
                    <p className="text-xs text-brand-dark/50 uppercase tracking-wider">@naaazi.scraft</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-brand-dark/30 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <p className="mt-8 text-center text-[10px] text-brand-dark/40 max-w-xs mx-auto">
              Our concierge team is available Mon-Sat, 10am - 7pm IST.
            </p>
          </div>
        </div>
      )}

      {/* Search Modal */}
      <div className={`fixed inset-0 z-[120] bg-brand-cream transition-all duration-300 ${searchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="max-w-4xl mx-auto px-6 pt-32 h-full flex flex-col">
          <div className="flex justify-end mb-8">
            <button onClick={() => { setSearchOpen(false); setSearchQuery(''); }} className="p-2 border border-brand-dark/10 rounded-full hover:bg-brand-dark hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <input
            type="text"
            placeholder="Search our archives..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-b-2 border-brand-dark/10 text-3xl md:text-5xl font-serif text-brand-dark placeholder:text-brand-dark/20 focus:outline-none focus:border-brand-accent pb-4 mb-12"
            autoFocus={searchOpen} // Auto focus when open
          />

          <div className="flex-1 overflow-y-auto no-scrollbar pb-20">
            {searchQuery && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredResults.map(project => (
                  <div
                    key={project.id}
                    className="flex items-center space-x-6 p-4 rounded-2xl hover:bg-white/50 cursor-pointer transition-colors group"
                    onClick={() => {
                      onSelectProject && onSelectProject(project.id);
                      setSearchOpen(false);
                    }}
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={project.images[0].src} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-brand-dark group-hover:text-brand-accent transition-colors">{project.title}</h4>
                      <p className="text-[10px] tracking-widest uppercase text-brand-dark/50">₹{project.price.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
                {filteredResults.length === 0 && (
                  <p className="col-span-full text-center text-brand-dark/40 font-serif italic text-xl">No treasures found matching your query.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-[110] transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-brand-dark/20 backdrop-blur-md" onClick={() => setMobileMenuOpen(false)}></div>
        <div className={`absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-brand-cream p-10 shadow-2xl transition-transform duration-500 ease-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-16">
            <span className="font-serif text-xl font-bold">naaazi.scraft</span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif text-brand-dark hover:text-brand-accent transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="mt-24 pt-12 border-t border-brand-dark/5">
            <p className="text-[10px] uppercase tracking-[0.4em] text-brand-dark/30 font-bold mb-6">Socials</p>
            <a href="https://instagram.com/naaazi.scraft" target="_blank" className="text-sm font-medium hover:text-brand-accent transition-colors block">Instagram</a>
          </div>
        </div>
      </div>
    </>
  );
};
