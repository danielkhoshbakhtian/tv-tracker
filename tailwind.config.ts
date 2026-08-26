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
          blue: '#001A6E',   
          yellow: '#FFCC00', 
          neon: '#39FF14',   
        }
      }
    },
  },
  plugins: [],
}
export default config