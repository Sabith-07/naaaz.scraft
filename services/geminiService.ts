
import { GoogleGenAI, Type } from "@google/genai";
import { RecommendationRequest } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getGiftRecommendation = async (req: RecommendationRequest) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Suggest a curated gift hamper idea for the following details:
        Occasion: ${req.occasion}
        Budget Range: ${req.budget}
        Recipient: ${req.recipient}
        Special Preferences: ${req.preferences}
        
        Provide a creative name, a list of 5-7 items to include, and a short description of the theme/packaging.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            theme: { type: Type.STRING },
            items: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            packagingAdvice: { type: Type.STRING }
          },
          required: ["title", "theme", "items", "packagingAdvice"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};
