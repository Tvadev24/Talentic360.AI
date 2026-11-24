/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#070913',
          darker: '#04060b',
          card: 'rgba(13, 17, 30, 0.75)',
          border: 'rgba(0, 240, 255, 0.25)',
          cyan: '#00f0ff',
          neonBlue: '#38bdf8',
          neonPurple: '#a855f7',
          neonPink: '#ec4899',
          neonMagenta: '#d946ef',
          electric: '#8b5cf6',
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 25px rgba(0, 240, 255, 0.45)',
        'neon-pink': '0 0 25px rgba(236, 72, 153, 0.45)',
        'neon-purple': '0 0 30px rgba(168, 85, 247, 0.45)',
        'neon-glow': '0 0 50px rgba(0, 240, 255, 0.25), 0 0 80px rgba(168, 85, 247, 0.2)',
        'card-glow': '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'card-cyan-glow': '0 10px 40px -10px rgba(0, 240, 255, 0.5), inset 0 0 15px rgba(0, 240, 255, 0.2)',
        'card-pink-glow': '0 10px 40px -10px rgba(236, 72, 153, 0.5), inset 0 0 15px rgba(236, 72, 153, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(0, 240, 255, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 30px rgba(236, 72, 153, 0.6))' },
        }
      }
    },
  },
  plugins: [],
}

