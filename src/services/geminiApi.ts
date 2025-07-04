import { StoryRequest, StoryResponse, ApiResponse } from '../types/story';

const API_KEY = 'AIzaSyA6v1EnYEYdxUFbne2XZ1SKJJ-Rs-TJpzQ';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const lengthMap = {
  short: '300-500 words',
  medium: '700-1000 words',
  long: '1200-1800 words'
};

export async function generateStory(request: StoryRequest): Promise<StoryResponse> {
  const { prompt, genre, length } = request;
  
  const enhancedPrompt = `Write a ${lengthMap[length as keyof typeof lengthMap]} ${genre} story based on this prompt: "${prompt}". 
  
  Make it engaging, creative, and well-structured with proper pacing. Include vivid descriptions and compelling characters. 
  The story should be complete and satisfying, with a clear beginning, middle, and end. 
  
  Format the response as a story with natural paragraph breaks for readability.`;

  const requestBody = {
    contents: [
      {
        parts: [
          {
            text: enhancedPrompt
          }
        ]
      }
    ],
    generationConfig: {
      temperature: 0.8,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: length === 'long' ? 2048 : length === 'medium' ? 1536 : 1024,
    }
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': API_KEY,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data: ApiResponse = await response.json();
    
    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
      throw new Error('Invalid response format from API');
    }

    const text = data.candidates[0].content.parts[0].text;
    
    return {
      text: text.trim(),
    };
  } catch (error) {
    console.error('Error generating story:', error);
    throw new Error('Failed to generate story. Please try again.');
  }
}