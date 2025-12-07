import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { CakeBuilder } from './components/CakeBuilder';
import { AICakeDesigner } from './components/AICakeDesigner';
import { OrderSummary } from './components/OrderSummary';
import { CustomCakeConfig } from './types';
import { CakeSlice, Sparkles, Globe } from 'lucide-react';
import { translations, Language } from './locales';

type AppView = 'home' | 'builder' | 'ai' | 'summary';

function App() {
  const [view, setView] = useState<AppView>('home');
  const [cakeConfig, setCakeConfig] = useState<CustomCakeConfig | null>(null);
  const [lang, setLang] = useState<Language>('tr');

  const t = translations[lang];

  const handleCakeComplete = (config: CustomCakeConfig) => {
    setCakeConfig(config);
    setView('summary');
  };

  const handleUseAIConcept = (imageUrl: string) => {
    setView('builder');
  };

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'tr' : 'en');
  };

  const renderContent = () => {
    switch (view) {
      case 'home':
        return <Hero t={t} onStart={() => setView('builder')} onAI={() => setView('ai')} />;
      case 'builder':
        return (
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-serif font-bold text-center text-gray-800 mb-10">{t.builder.title}</h2>
            <CakeBuilder 
              t={t}
              initialConfig={cakeConfig || undefined}
              onComplete={handleCakeComplete} 
              onBack={() => setView('home')} 
            />
          </div>
        );
      case 'ai':
        return (
          <div className="container mx-auto px-4 py-12">
            <div className="mb-8 text-center">
              <button onClick={() => setView('home')} className="text-rose-600 hover:underline mb-4">{t.ai.backHome}</button>
            </div>
            <AICakeDesigner t={t} onSelectConcept={handleUseAIConcept} />
          </div>
        );
      case 'summary':
        return cakeConfig ? (
          <div className="container mx-auto px-4 py-12">
             <div className="mb-8 text-center">
              <button onClick={() => setView('builder')} className="text-rose-600 hover:underline mb-4">{t.summary.backEdit}</button>
            </div>
            <OrderSummary t={t} config={cakeConfig} onEdit={() => setView('builder')} />
          </div>
        ) : null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setView('home')}
          >
            <div className="bg-rose-gold p-2 rounded-lg text-white">
              <CakeSlice size={24} />
            </div>
            <span className="font-serif font-bold text-xl tracking-tight text-gray-900">{t.meta.title}</span>
          </div>
          
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                <button onClick={() => setView('builder')} className="hover:text-rose-gold transition-colors">{t.nav.order}</button>
                <button onClick={() => setView('ai')} className="flex items-center gap-1 hover:text-rose-gold transition-colors text-rose-gold">
                <Sparkles size={16} /> {t.nav.ai}
                </button>
                <button className="hover:text-rose-gold transition-colors">{t.nav.menu}</button>
                <button className="hover:text-rose-gold transition-colors">{t.nav.contact}</button>
            </div>
            
            <button 
                onClick={toggleLang}
                className="flex items-center gap-1 px-3 py-1 rounded-full border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-colors text-rose-gold"
            >
                <Globe size={14} />
                {lang.toUpperCase()}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-deep-chocolate text-rose-100 py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4 text-white">{t.meta.title}</h3>
            <p className="text-rose-100/70 max-w-sm">
              {t.hero.description}
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Visit Us</h4>
            <p className="text-rose-100/70">123 Sugar Avenue</p>
            <p className="text-rose-100/70">Sweet City, SC 90210</p>
          </div>
          <div>
             <h4 className="font-bold text-white mb-4">Hours</h4>
            <p className="text-rose-100/70">Tue - Sun: 8am - 7pm</p>
            <p className="text-rose-100/70">Mon: Closed</p>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-12 pt-8 border-t border-rose-100/10 text-center text-sm text-rose-100/50">
          © {new Date().getFullYear()} {t.meta.title}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
