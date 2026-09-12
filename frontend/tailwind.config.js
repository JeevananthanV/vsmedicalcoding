/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#07080B', // Level 1: Deepest Obsidian Black
          900: '#0E1118', // Level 1.5: Deep Background
          850: '#141824', // Level 2: Slate Navy Charcoal
          800: '#1A2133', // Level 3: Card Surface
          750: '#222B42', // Level 3.5: Elevated interactive
          700: '#2E3954', // Subtle borders
        },
        gold: {
          50: '#FFFDF5',
          100: '#FDF8E2',
          200: '#F9EBB5',
          300: '#F3D87F',
          400: '#E5BE4A',
          500: '#D4AF37', // Royal Gold (used strictly for CTA & key stats)
          600: '#B88F28',
          700: '#946E1D',
        },
        medical: {
          teal: '#0D9488',
          emerald: '#10B981',
          cyan: '#06B6D4',
          blue: '#3B82F6',
        }
      },
      fontFamily: {
        display: ['Cinzel', 'Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)',
        'gold-subtle': 'linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, transparent 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.25)',
        'luxury-card': '0 8px 30px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
