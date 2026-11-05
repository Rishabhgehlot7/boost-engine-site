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
        engine: {
          dark: '#030712',
          card: '#0B0F19',
          border: 'rgba(255, 255, 255, 0.08)',
          cyan: '#00F0FF',
          blue: '#3B82F6',
          purple: '#A855F7',
          neon: '#10B981',
          accent: '#FF0055'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      animation: {
        'glow-pulse': 'glow 3s infinite alternate ease-in-out',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        glow: {
          '0%': { filter: 'drop-shadow(0 0 10px rgba(0, 240, 255, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(168, 85, 247, 0.7))' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
}

