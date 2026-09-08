/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#06101E',
          900: '#0A1E3F',
          800: '#0F274E',
          700: '#163668',
          600: '#1E498A',
        },
        ocean: {
          950: '#030712',
          900: '#06101E',
          850: '#0A192F',
          800: '#0E223D',
          700: '#14355E',
          600: '#1D4ED8',
        },
        azure: {
          DEFAULT: '#0284C7',
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
        },
        gold: {
          DEFAULT: '#C5A880',
          light: '#E5D6C0',
          dark: '#9E7E55',
        },
        frost: {
          DEFAULT: '#F8FAFC',
          ice: '#F1F5F9',
          muted: '#64748B',
          glass: 'rgba(255, 255, 255, 0.85)',
          border: 'rgba(226, 232, 240, 0.8)',
          highlight: 'rgba(255, 255, 255, 0.6)',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Poppins', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'lux-sm': '0 2px 10px rgba(10, 30, 63, 0.03)',
        'lux': '0 10px 30px -5px rgba(10, 30, 63, 0.05)',
        'lux-hover': '0 20px 45px -10px rgba(10, 30, 63, 0.10)',
        'bottle-light': '0 25px 45px -15px rgba(10, 30, 63, 0.15), 0 0 35px -10px rgba(2, 132, 199, 0.12)',
        'water-glow': '0 0 60px -10px rgba(2, 132, 199, 0.18)',
        'caustic': '0 0 50px -10px rgba(2, 132, 199, 0.15)',
        'caustic-lg': '0 0 90px -15px rgba(2, 132, 199, 0.25)',
      },
      animation: {
        'wave-slow': 'wave 12s ease-in-out infinite alternate',
        'float-slow': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'drop': 'drop 3.2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'ripple-expand': 'rippleExpand 3.2s cubic-bezier(0, 0.2, 0.8, 1) infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '100%': { transform: 'translateY(-15px) rotate(1.5deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        drop: {
          '0%': { transform: 'translateY(-40px) scale(0.8)', opacity: '0' },
          '15%': { opacity: '1' },
          '45%': { transform: 'translateY(0px) scale(1)', opacity: '1' },
          '50%': { transform: 'translateY(2px) scale(1.4, 0.6)', opacity: '0' },
          '100%': { transform: 'translateY(2px) scale(1.4, 0.6)', opacity: '0' },
        },
        rippleExpand: {
          '0%, 45%': { transform: 'scale(0.1)', opacity: '0' },
          '46%': { opacity: '0.8' },
          '85%': { transform: 'scale(2.4)', opacity: '0.1' },
          '100%': { transform: 'scale(3)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
};
