import React, { useState } from 'react';
import { 
  CakeFlavor, 
  CakeShape, 
  CustomCakeConfig, 
  FrostingType, 
  Topping,
  FrostingColor
} from '../types';
import { CAKE_SHAPES, FLAVORS, FROSTINGS, TOPPINGS } from '../constants';
import { Check, ChevronRight, ChevronLeft, Heart, Info } from 'lucide-react';
import { Button } from './Button';
import { translations } from '../locales';

interface CakeBuilderProps {
  initialConfig?: Partial<CustomCakeConfig>;
  onComplete: (config: CustomCakeConfig) => void;
  onBack: () => void;
  t: typeof translations['en'];
}

interface SelectionCardProps {
  selected: boolean;
  onClick: () => void;
  title: string;
  description?: string;
  priceInfo?: string;
}

const SelectionCard: React.FC<SelectionCardProps> = ({ 
  selected, 
  onClick, 
  title, 
  description, 
  priceInfo 
}) => (
  <div 
    onClick={onClick}
    className={`
      cursor-pointer p-5 rounded-xl border-2 transition-all duration-300 relative overflow-hidden group
      ${selected 
        ? 'border-rose-gold bg-rose-50 shadow-md' 
        : 'border-gray-100 bg-white hover:border-rose-200 hover:shadow-sm'
      }
    `}
  >
    <div className="flex justify-between items-start">
      <div>
        <h4 className={`font-serif font-bold ${selected ? 'text-rose-900' : 'text-gray-800'}`}>{title}</h4>
        {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
        {priceInfo && <p className="text-xs font-semibold text-rose-gold mt-2">{priceInfo}</p>}
      </div>
      {selected && (
        <div className="bg-rose-gold text-white rounded-full p-1">
          <Check size={14} />
        </div>
      )}
    </div>
  </div>
);

export const CakeBuilder: React.FC<CakeBuilderProps> = ({ initialConfig, onComplete, onBack, t }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [config, setConfig] = useState<CustomCakeConfig>({
    shape: 'round',
    size: 8,
    flavor: 'vanilla',
    frosting: 'buttercream',
    frostingColor: 'white',
    toppings: [],
    message: '',
    specialInstructions: '',
    ...initialConfig
  });

  const updateConfig = (key: keyof CustomCakeConfig, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const toggleTopping = (toppingId: string) => {
    setConfig(prev => {
      const exists = prev.toppings.includes(toppingId);
      return {
        ...prev,
        toppings: exists 
          ? prev.toppings.filter(t => t !== toppingId)
          : [...prev.toppings, toppingId]
      };
    });
  };

  const handleNext = () => {
    if (currentStep < t.builder.steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onComplete(config);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    } else {
      onBack();
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Base
        return (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">{t.builder.shapeTitle}</h3>
              <div className="grid grid-cols-2 gap-4">
                {CAKE_SHAPES.map(shape => (
                  <SelectionCard
                    key={shape.id}
                    selected={config.shape === shape.id}
                    onClick={() => updateConfig('shape', shape.id)}
                    title={t.data.shapes[shape.id]}
                    priceInfo={shape.priceMultiplier > 1 ? t.builder.multiplier.replace('{n}', shape.priceMultiplier.toString()) : t.builder.basePrice}
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">{t.builder.sizeTitle}</h3>
              <div className="flex items-center gap-4 bg-white p-6 rounded-xl border border-gray-100">
                <input 
                  type="range" 
                  min="6" 
                  max="16" 
                  step="2" 
                  value={config.size}
                  onChange={(e) => updateConfig('size', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-rose-gold"
                />
                <span className="font-serif font-bold text-2xl text-rose-gold w-24 text-center">
                  {config.size}"
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">{t.builder.serves.replace('{n}', Math.floor((config.size * config.size) / 2.5).toString())}</p>
            </div>
          </div>
        );
      case 1: // Flavor
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
            {FLAVORS.map(flavor => (
              <SelectionCard
                key={flavor.id}
                selected={config.flavor === flavor.id}
                onClick={() => updateConfig('flavor', flavor.id)}
                title={t.data.flavors[flavor.id].name}
                description={t.data.flavors[flavor.id].desc}
              />
            ))}
          </div>
        );
      case 2: // Frosting
        return (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">{t.builder.frostingType}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {FROSTINGS.map(frosting => (
                  <SelectionCard
                    key={frosting.id}
                    selected={config.frosting === frosting.id}
                    onClick={() => updateConfig('frosting', frosting.id)}
                    title={t.data.frostings[frosting.id]}
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">{t.builder.palette}</h3>
              <div className="flex flex-wrap gap-4">
                {(['white', 'pink', 'chocolate', 'blue', 'purple', 'gold'] as FrostingColor[]).map(color => (
                  <button
                    key={color}
                    onClick={() => updateConfig('frostingColor', color)}
                    className={`
                      w-12 h-12 rounded-full border-4 transition-transform hover:scale-110
                      ${config.frostingColor === color ? 'border-gray-800 scale-110' : 'border-transparent'}
                    `}
                    style={{ 
                      backgroundColor: color === 'white' ? '#f5f5f5' 
                        : color === 'chocolate' ? '#5D4037' 
                        : color === 'gold' ? '#FFD700' 
                        : color 
                    }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      case 3: // Decor
        return (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">{t.builder.toppings}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TOPPINGS.map(topping => (
                  <div 
                    key={topping.id}
                    onClick={() => toggleTopping(topping.id)}
                    className={`
                      flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors
                      ${config.toppings.includes(topping.id) 
                        ? 'border-rose-gold bg-rose-50' 
                        : 'border-gray-200 hover:border-rose-200'
                      }
                    `}
                  >
                    <div>
                      <span className="font-medium text-gray-800">{t.data.toppings[topping.id]}</span>
                      <span className="block text-xs text-gray-500">+${topping.price}</span>
                    </div>
                    {config.toppings.includes(topping.id) && <Check size={16} className="text-rose-gold" />}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">{t.builder.personalization}</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder={t.builder.msgPlaceholder}
                  value={config.message}
                  onChange={(e) => updateConfig('message', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rose-gold focus:outline-none font-serif"
                />
                <textarea
                  placeholder={t.builder.instrPlaceholder}
                  value={config.specialInstructions}
                  onChange={(e) => updateConfig('specialInstructions', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rose-gold focus:outline-none h-24 resize-none text-sm"
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="flex justify-between mb-8 px-4 relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
        {t.builder.steps.map((step, index) => (
          <div 
            key={step} 
            className={`flex flex-col items-center bg-[#FDFBF7] px-2 ${index <= currentStep ? 'text-rose-gold' : 'text-gray-400'}`}
          >
            <div 
              className={`
                w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mb-2 transition-colors duration-500
                ${index <= currentStep ? 'bg-rose-gold text-white' : 'bg-gray-200 text-gray-500'}
              `}
            >
              {index + 1}
            </div>
            <span className="text-xs font-bold tracking-wider uppercase">{step}</span>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 min-h-[400px] border border-stone-100 flex flex-col justify-between">
        {renderStepContent()}

        <div className="flex justify-between mt-10 pt-6 border-t border-gray-100">
          <Button 
            variant="outline" 
            onClick={handlePrev}
            className="flex items-center gap-2"
          >
            <ChevronLeft size={18} /> {t.builder.back}
          </Button>
          <Button 
            onClick={handleNext}
            className="flex items-center gap-2"
          >
            {currentStep === t.builder.steps.length - 1 ? t.builder.review : t.builder.next} <ChevronRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};