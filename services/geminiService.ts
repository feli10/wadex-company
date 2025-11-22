import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;
// Initialize the client. 
// Note: In a real production app, you might proxy this through a backend to hide the key,
// but for this client-side demo structure, we use the env var directly as per instructions.
const ai = new GoogleGenAI({ apiKey: apiKey });

const SYSTEM_INSTRUCTION = `
You are the AI assistant for "WADEx", an Intelligent Chemical Waste Management System. 
Your goal is to demonstrate the system's capability to check for chemical compatibility and explain safety protocols.
Keep answers concise, professional, and safety-oriented.
The system focuses on standard 20L waste buckets, IoT sensors (VOC, Temp, Weight), and EPA/RCRA compliance.
If asked about features, mention: Smart Lid scanning, VOC detection, temperature monitoring, and cloud logging.
Do not provide medical advice.
`;

export const checkChemicalCompatibility = async (query: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const response = await ai.models.generateContent({
      model: model,
      contents: query,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.3, // Low temperature for factual safety info
        maxOutputTokens: 300,
      }
    });

    return response.text || "I couldn't verify that chemical interaction right now. Please consult your SDS.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection to WADEx Cloud failed. Please check your internet connection or API key.";
  }
};