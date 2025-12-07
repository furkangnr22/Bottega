import React, { useState } from 'react';
import { CustomCakeConfig } from '../types';
import { FLAVORS, FROSTINGS, TOPPINGS, CAKE_SHAPES } from '../constants';
import { Button } from './Button';
import { CheckCircle2, MapPin, Phone, User } from 'lucide-react';
import { translations } from '../locales';

interface OrderSummaryProps {
  config: CustomCakeConfig;
  onEdit: () => void;
  t: typeof translations['en'];
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ config, onEdit, t }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [details, setDetails] = useState({ name: '', phone: '', address: '' });

  const getFlavorName = (id: string) => t.data.flavors[id]?.name;
  const getFrostingName = (id: string) => t.data.frostings[id];
  const getShapeName = (id: string) => t.data.shapes[id];
  const getToppingNames = (ids: string[]) => ids.map(id => t.data.toppings[id]).join(', ');
  
  const calculateTotal = () => {
    let base = 50; // Base price
    const shape = CAKE_SHAPES.find(s => s.id === config.shape);
    if (shape) base *= shape.priceMultiplier;
    base += (config.size - 6) * 10; // $10 per inch over 6
    
    config.toppings.forEach(tId => {
      const topping = TOPPINGS.find(t => t.id === tId);
      if (topping) base += topping.price;
    });
    
    return base.toFixed(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-xl mx-auto text-center py-20 px-6 animate-fade-in">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 size={48} className="text-green-600" />
        </div>
        <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">{t.summary.receivedTitle}</h2>
        <p className="text-gray-600 mb-8 text-lg">
          {t.summary.receivedDesc.replace('{name}', details.name).replace('{phone}', details.phone)}
        </p>
        <div className="p-6 bg-rose-50 rounded-2xl border border-rose-100">
           <p className="font-serif font-bold text-rose-900">{t.summary.orderNum} {Math.floor(Math.random() * 10000)}</p>
           <p className="text-sm text-rose-700 mt-2">{t.summary.saveMsg}</p>
        </div>
        <Button onClick={() => window.location.reload()} className="mt-8" variant="outline">
          {t.summary.newOrder}
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 animate-fade-in">
      {/* Left: Summary */}
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif font-bold text-gray-800">{t.summary.creationTitle}</h2>
          <button onClick={onEdit} className="text-rose-600 text-sm font-semibold underline">{t.summary.edit}</button>
        </div>
        
        <div className="space-y-4 text-gray-700">
          <div className="flex justify-between border-b border-dashed border-gray-200 pb-3">
            <span className="font-medium">{t.summary.shapeSize}</span>
            <span>{getShapeName(config.shape)}, {config.size}"</span>
          </div>
          <div className="flex justify-between border-b border-dashed border-gray-200 pb-3">
            <span className="font-medium">{t.summary.flavor}</span>
            <span>{getFlavorName(config.flavor)}</span>
          </div>
          <div className="flex justify-between border-b border-dashed border-gray-200 pb-3">
            <span className="font-medium">{t.summary.frosting}</span>
            <span className="capitalize">{config.frostingColor} {getFrostingName(config.frosting)}</span>
          </div>
          {config.toppings.length > 0 && (
            <div className="flex justify-between border-b border-dashed border-gray-200 pb-3">
              <span className="font-medium">{t.summary.toppings}</span>
              <span className="text-right max-w-[200px]">{getToppingNames(config.toppings)}</span>
            </div>
          )}
          {config.message && (
             <div className="bg-rose-50 p-4 rounded-xl text-rose-900 italic text-center font-serif">
               "{config.message}"
             </div>
          )}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
          <span className="text-gray-500 font-medium">{t.summary.total}</span>
          <span className="text-4xl font-serif font-bold text-rose-gold">${calculateTotal()}</span>
        </div>
      </div>

      {/* Right: Checkout Form */}
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">{t.summary.contactTitle}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t.summary.nameLabel}</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                required
                type="text" 
                value={details.name}
                onChange={e => setDetails({...details, name: e.target.value})}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-rose-gold focus:outline-none"
                placeholder={t.summary.namePlaceholder}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t.summary.phoneLabel}</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                required
                type="tel" 
                value={details.phone}
                onChange={e => setDetails({...details, phone: e.target.value})}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-rose-gold focus:outline-none"
                placeholder={t.summary.phonePlaceholder}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t.summary.addrLabel}</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-3 text-gray-400" size={18} />
              <textarea 
                required
                value={details.address}
                onChange={e => setDetails({...details, address: e.target.value})}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-rose-gold focus:outline-none h-24 resize-none"
                placeholder={t.summary.addrPlaceholder}
              />
            </div>
          </div>

          <Button type="submit" fullWidth>
            {t.summary.placeOrder}
          </Button>
          <p className="text-xs text-gray-400 text-center mt-4">
            {t.summary.terms}
          </p>
        </form>
      </div>
    </div>
  );
};