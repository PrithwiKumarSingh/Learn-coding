import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyCAJOFaFcu2EHe2a8Qh0bXU6TmJx9pS3k8" });

export async function main(msg) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: msg,
    
  });
  return response.text;
}

