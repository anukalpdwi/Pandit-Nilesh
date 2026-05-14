/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Vedic Palette
        saffron: {
          50: '#fff5eb',
          100: '#ffe3c2',
          200: '#ffc685',
          300: '#ffa047',
          400: '#ff7b0a', // Vibrant Saffron - Energy
          500: '#e06000',
          600: '#b34600',
          700: '#8f3300',
          800: '#6b2400',
          900: '#4d1900',
        },
        maroon: {
          500: '#800000', // Classic Maroon - Tradition
          600: '#660000',
          700: '#4d0000',
          800: '#330000',
          900: '#1a0000',
        },
        gold: {
          300: '#FFD700', // Bright Gold - Divinity
          400: '#D4AF37', // Metallic Gold - Premium
          500: '#C5A000',
          600: '#A08000',
        },
        cream: {
          50: '#fdfbf7', // Warm White - Purity
          100: '#f9f5eb',
          200: '#f2ead6', // Parchment
          300: '#e8dcba',
        },
        // Map old colors to new palette for compatibility
        orange: {
          50: '#fff5eb',
          100: '#ffe3c2',
          200: '#ffc685',
          300: '#ffa047',
          400: '#ff7b0a',
          500: '#ff7b0a', // Map standard orange to saffron
          600: '#e06000',
          700: '#b34600',
          800: '#8f3300',
          900: '#6b2400',
        },
        temple: {
          red: '#8B0000', // Depicts Energy & Shakti
          saffron: '#FF9933', // Depicts Sacrifice & Purity
          gold: '#D4AF37', // Depicts Prosperity
          white: '#FFFFFF', // Depicts Peace
          maroon: '#2b0a12',
          cream: '#fcfbf7'
        }
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
        devanagari: ['Noto Sans Devanagari', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shine': 'shine 2s infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        }
      }
    }
  },
  plugins: [],
}
