
import React, { useState } from 'react';
import { getGiftRecommendation } from '../services/geminiService';
import { Occasion, RecommendationRequest } from '../types';

export const GiftRecommender: React.FC = () => {
  const [formData, setFormData] = useState<RecommendationRequest>({
    occasion: Occasion.BIRTHDAY,
    budget: 'Premium ($150+)',
    recipient: '',
    preferences: ''
  });
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await getGiftRecommendation(formData);
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="gift-ai" className="py-24 px-6 bg-brand-soft/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-10 reveal">
            <div>
                <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-brand-accent mb-4 block">Personal Concierge</span>
                <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-[1.1] text-brand-dark">
                  Your AI <br /> <span className="italic font-light opacity-70">Curator.</span>
                </h2>
                <p className="text-brand-dark/50 text-base font-light leading-relaxed max-w-sm">
                  Experience the future of thoughtful gifting. Our AI architect uses advanced reasoning to conceive the perfect bespoke gesture.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 bg-white p-8 rounded-[3rem] border border-brand-dark/5 shadow-2xl shadow-brand-dark/5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest font-bold text-brand-dark/30 px-2">Occasion</label>
                  <select 
                    value={formData.occasion}
                    onChange={(e) => setFormData({...formData, occasion: e.target.value as Occasion})}
                    className="w-full bg-brand-cream border-none p-4 rounded-2xl focus:ring-1 focus:ring-brand-accent text-xs transition-all appearance-none cursor-pointer"
                  >
                    {Object.values(Occasion).filter(o => o !== Occasion.ALL).map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest font-bold text-brand-dark/30 px-2">Investment</label>
                  <select 
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full bg-brand-cream border-none p-4 rounded-2xl focus:ring-1 focus:ring-brand-accent text-xs transition-all appearance-none cursor-pointer"
                  >
                    <option>Standard ($50+)</option>
                    <option>Premium ($150+)</option>
                    <option>Elite ($500+)</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest font-bold text-brand-dark/30 px-2">The Recipient Profile</label>
                <input 
                  type="text"
                  placeholder="e.g. A book lover who appreciates minimalism..."
                  value={formData.recipient}
                  onChange={(e) => setFormData({...formData, recipient: e.target.value})}
                  className="w-full bg-brand-cream border-none p-4 rounded-2xl focus:ring-1 focus:ring-brand-accent text-xs transition-all"
                />
              </div>
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-brand-dark text-brand-cream py-5 rounded-full font-bold tracking-[0.3em] text-[10px] disabled:opacity-50 hover:bg-brand-accent transition-all shadow-xl shadow-brand-dark/10 uppercase"
              >
                {loading ? 'Curating Concept...' : 'Architect Concept'}
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 reveal">
            <div className={`transition-all duration-1000 ${result ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-40'}`}>
              {result ? (
                <div className="glass-effect p-8 md:p-14 rounded-[3.5rem] shadow-3xl relative overflow-hidden border border-white">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-brand-accent/10 rounded-full -translate-y-12 translate-x-12 blur-3xl"></div>
                  <span className="text-[8px] tracking-[0.5em] font-bold text-brand-accent uppercase mb-4 block italic">Curated Blueprint</span>
                  <h3 className="font-serif text-4xl mb-6 italic leading-tight text-brand-dark">{result.title}</h3>
                  <p className="text-brand-dark/60 mb-10 font-light text-sm italic border-l-2 border-brand-accent/40 pl-8 leading-relaxed">{result.theme}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-5">
                      <h4 className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-dark">The Ensemble</h4>
                      <ul className="space-y-3">
                        {result.items.map((item: string, i: number) => (
                          <li key={i} className="flex items-center space-x-3 text-brand-dark/70 text-xs font-light">
                            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-5">
                      <h4 className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-dark text-right md:text-left">Presentation</h4>
                      <div className="bg-white/50 p-6 rounded-2xl border border-white/80">
                        <p className="text-brand-dark/60 italic font-light leading-relaxed text-xs">
                          {result.packagingAdvice}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="aspect-[16/10] bg-white/40 rounded-[3.5rem] flex items-center justify-center p-16 text-center border border-white shadow-inner backdrop-blur-md">
                  <div className="space-y-6">
                    <div className="w-20 h-20 border border-brand-dark/5 rounded-full flex items-center justify-center mx-auto bg-white/80">
                        <svg className="w-8 h-8 text-brand-dark/10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                    </div>
                    <p className="text-brand-dark/20 font-serif text-2xl italic max-w-xs mx-auto tracking-tight">
                      Architect your gifting legacy.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
