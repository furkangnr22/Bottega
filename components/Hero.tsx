import React from 'react';
import { Button } from './Button';
import { ChefHat, Star } from 'lucide-react';
import { translations } from '../locales';

interface HeroProps {
  onStart: () => void;
  onAI: () => void;
  t: typeof translations['en'];
}

export const Hero: React.FC<HeroProps> = ({ onStart, onAI, t }) => {
  return (
    <div className="relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-soft-pink/30 rounded-l-[100px] -z-10 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-gold/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="flex items-center gap-2 text-rose-gold font-bold tracking-widest text-sm uppercase">
            <Star size={16} fill="currentColor" /> {t.hero.tag}
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-tight">
            {t.hero.titleStart} <br/>
            <span className="text-rose-gold italic">{t.hero.titleEnd}</span>
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-lg leading-relaxed">
            {t.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={onStart} className="text-lg px-8 py-4">
              {t.hero.startBtn}
            </Button>
            <Button onClick={onAI} variant="outline" className="text-lg px-8 py-4">
              {t.hero.aiBtn}
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-8 border-t border-gray-200">
            <div>
              <p className="text-3xl font-serif font-bold text-gray-800">15k+</p>
              <p className="text-sm text-gray-500 uppercase tracking-wide">{t.hero.orders}</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-gray-800">4.9</p>
              <p className="text-sm text-gray-500 uppercase tracking-wide">{t.hero.rating}</p>
            </div>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
             <img 
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Artisan Cake" 
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Decorative floating card */}
          <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs animate-bounce-slow">
             <div className="flex items-center gap-3 mb-2">
               <div className="bg-green-100 p-2 rounded-full text-green-700">
                 <ChefHat size={20} />
               </div>
               <span className="font-bold font-serif text-gray-800">{t.hero.chefChoice}</span>
             </div>
             <p className="text-sm text-gray-600">"{t.hero.chefQuote}"</p>
          </div>
        </div>
      </div>
    </div>
  );
};
