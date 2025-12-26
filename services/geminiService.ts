import { GoogleGenAI, Type } from "@google/genai";
import { InsightResult } from "../types";

// Initializing the Google GenAI client with direct access to the environment variable.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateStrategicInsight = async (
  industry: string,
  hurdle: string
): Promise<InsightResult> => {
  // Using gemini-3-pro-preview for complex reasoning and strategic consulting tasks.
  const model = "gemini-3-pro-preview";
  
  const prompt = `Act as a world-class strategic consultant for 'Epiphany Unlimited'. 
  The client is in the '${industry}' industry and their biggest challenge is '${hurdle}'.
  Provide a concise, high-impact strategic insight, 3 key pillars of growth, and 3 immediate actionable steps.`;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            strategy: { type: Type.STRING, description: "A high-level strategic summary." },
            keyPillars: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "Three major focus areas."
            },
            immediateActions: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "Specific next steps."
            }
          },
          required: ["strategy", "keyPillars", "immediateActions"]
        }
      }
    });

    // Access the .text property directly as it is not a method.
    const result = JSON.parse(response.text || '{}');
    return result as InsightResult;
  } catch (error) {
    console.error("Gemini Insight Error:", error);
    throw new Error("Failed to generate strategic insight.");
  }
};