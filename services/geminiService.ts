import { GoogleGenAI } from "@google/genai";

export const generateCakeConcept = async (description: string): Promise<string | null> => {
  // API anahtarı Vercel Environment Variables üzerinden alınmalıdır.
  // Kod içine doğrudan yazmak güvenlik açığı yaratır.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `A professional, high-quality, photorealistic food photography shot of a cake. 
            The cake matches this description exactly: ${description}. 
            The lighting is soft and natural, bakery style. High resolution, appetizing.`
          }
        ]
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData && part.inlineData.data) {
         return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Gemini Image Generation Error:", error);
    throw error;
  }
};