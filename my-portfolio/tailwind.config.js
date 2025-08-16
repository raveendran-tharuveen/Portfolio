/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'fade-in': { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        'slide-up': {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'shimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        'fade-in': 'fade-in .5s ease-out both',
        'slide-up': 'slide-up .6s ease-out both',
        'shimmer': 'shimmer 2.5s linear infinite'
      },
      boxShadow: {
        'card': '0 1px 0 0 rgba(255,255,255,.04), 0 1px 12px -6px rgba(0,0,0,.7)'
      }
    },
  },
  plugins: [],
}