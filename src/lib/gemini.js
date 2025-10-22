import { GoogleGenerativeAI } from '@google/generative-ai';

// Get the API key from environment variables
const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error('Gemini API key not found. Please add it to your .env.local file.');
}

const genAI = new GoogleGenerativeAI(API_KEY);

export async function generateText(prompt) {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

export async function generateTextFromImage(prompt, image, mimeType) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
  const imagePart = {
    inlineData: {
      data: image,
      mimeType
    }
  };
  const result = await model.generateContent([prompt, imagePart]);
  const response = await result.response;
  return response.text();
}
