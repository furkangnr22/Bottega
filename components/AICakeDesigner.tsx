import React, { useState } from 'react';
import { generateCakeConcept } from '../services/geminiService';
import { Button } from './Button';
import { Wand2, Loader2, Image as ImageIcon } from 'lucide-react';
import { translations } from '../locales';

interface AICakeDesignerProps {
  onSelectConcept?: (imageUrl: string) => void;
  t: typeof translations['en'];
}

export const AICakeDesigner: React.FC<AICakeDesignerProps> = ({ onSelectConcept, t }) => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const imageBase64 = await generateCakeConcept(prompt);
      if (imageBase64) {
        setGeneratedImage(imageBase64);
      } else {
        setError(t.ai.error);
      }
    } catch (err) {
      setError(t.ai.connError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-rose-100 max-w-3xl mx-auto">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-100 text-rose-600 mb-4">
          <Wand2 size={24} />
        </div>
        <h3 className="text-2xl font-serif font-bold text-gray-800">{t.ai.title}</h3>
        <p className="text-gray-500 mt-2">
          {t.ai.desc}
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.ai.label}
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={t.ai.placeholder}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-gold focus:ring-2 focus:ring-rose-100 focus:outline-none transition-all h-32 resize-none"
          />
        </div>

        <Button 
          onClick={handleGenerate} 
          disabled={isLoading || !prompt.trim()}
          fullWidth
          variant="secondary"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="animate-spin" size={20} /> {t.ai.btnDreaming}
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Wand2 size={20} /> {t.ai.btnVisualize}
            </span>
          )}
        </Button>

        {error && (
          <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm text-center">
            {error}
          </div>
        )}

        {generatedImage && (
          <div className="mt-8 animate-fade-in">
            <h4 className="font-serif font-bold text-lg mb-3 text-gray-800">{t.ai.conceptTitle}</h4>
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={generatedImage} 
                alt="AI Generated Cake Concept" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button onClick={() => onSelectConcept?.(generatedImage)} variant="primary">
                  {t.ai.useBtn}
                </Button>
              </div>
            </div>
            <p className="text-xs text-center text-gray-400 mt-2">
              {t.ai.disclaimer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};