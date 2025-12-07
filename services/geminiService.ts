import { GoogleGenAI } from "@google/genai";

export const generateCakeConcept = async (description: string): Promise<string | null> => {
  const ai = new GoogleGenAI({ apiKey: gen-lang-client-0905133698

 });

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