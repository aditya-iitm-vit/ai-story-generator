export interface StoryRequest {
  prompt: string;
  genre: string;
  length: string;
}

export interface StoryResponse {
  text: string;
  title?: string;
}

export interface ApiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
  }>;
}