import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        store: {
          blue: '#001A6E',   // Blockbuster Blue
          yellow: '#FFCC00', // Blockbuster Yellow
          neon: '#39FF14',   // Lobby Neon
        }
      }
    },
  },
  plugins: [],
}
export default config