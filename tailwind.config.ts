import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        store: {
          blue: '#001A6E', // Classic Blockbuster Blue
          yellow: '#FFCC00', // Ticket Yellow
          wood: '#3e2723', // Dark shelf wood
          neon: '#39FF14', // Front Lobby Neon
          dark: '#0a0a0a', // Backgrounds
        }
      },
      backgroundImage: {
        'wood-pattern': "url('/wood-texture.png')", // We will add an image later, falls back to color
      }
    },
  },
  plugins: [],
}
export default config