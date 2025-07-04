# AI Story Generator

A modern, AI-powered story generation web application that transforms your creative prompts into engaging narratives using Google Gemini AI.

## Features

- **Natural Language Prompts**: Input any story idea in plain English
- **Genre Selection**: Choose from 8 different genres including Science Fiction, Fantasy, Mystery, Romance, Horror, Drama, Adventure, and Thriller
- **Customizable Length**: Generate short (300-500 words), medium (700-1000 words), or long (1200-1800 words) stories
- **Download Stories**: Save generated stories as text files
- **Responsive Design**: Beautiful, modern UI that works on all devices
- **Real-time Generation**: Watch your stories come to life with loading animations

## Technologies Used

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS for modern, responsive design
- **Icons**: Lucide React for beautiful iconography
- **AI Integration**: Google Gemini 2.0 Flash API
- **Build Tool**: Vite for fast development and optimized builds
- **Deployment**: Netlify for seamless hosting

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Google Gemini API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/ai-story-generator.git
cd ai-story-generator
```

2. Install dependencies:
```bash
npm install
```

3. Set up your Google Gemini API key:
   - Visit the [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Replace the API key in `src/services/geminiApi.ts`

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Enter Your Prompt**: Describe your story idea in the text area. Be as creative as you want!
   - Example: "A robot gains consciousness in a future war"
   - Example: "A lost dog finds its way home across the country"

2. **Select Genre**: Choose from available genres to set the tone and style of your story

3. **Choose Length**: Pick the desired length for your story

4. **Generate**: Click the "Generate Story" button and watch the AI create your story

5. **Download**: Save your generated story as a text file for later reading

## Project Structure

```
src/
├── components/
│   └── StoryGenerator.tsx    # Main story generation component
├── services/
│   └── geminiApi.ts         # Google Gemini API integration
├── types/
│   └── story.ts             # TypeScript type definitions
├── App.tsx                  # Root application component
├── main.tsx                 # Application entry point
└── index.css                # Global styles
```

## API Integration

This application uses the Google Gemini 2.0 Flash API for story generation. The API integration includes:

- Intelligent prompt enhancement for better story quality
- Configurable generation parameters (temperature, topK, topP)
- Dynamic token limits based on story length
- Error handling and user feedback

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Aditya Nair**

## Acknowledgments

- Google Gemini AI for powering the story generation
- React and Tailwind CSS communities for excellent documentation
- Lucide React for beautiful icons

## Live Demo

Check out the live application: [AI Story Generator](https://elaborate-basbousa-4724b2.netlify.app)

---

*Transform your imagination into captivating stories with the power of AI.*