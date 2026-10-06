/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './mentions-legales.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        titre: ['"Urbanist Variable"', 'sans-serif'],
        inter: ['"Inter Variable"', 'sans-serif'],
        mono: ['"Inter Variable"', 'monospace'],
      },
      colors: {
        landing: {
          surface: 'rgba(255,255,255,0.08)',
          'surface-hover': 'rgba(255,255,255,0.13)',
        },
        border: 'rgba(255,255,255,0.10)',
        foreground: '#FFFBF3',
        background: '#0C2100',
        // Charte de Vert Demain, relevée sur clement-vertdemain.com :
        // vert sapin #133201, vert citron #BFFF56, crème #FFFBF3.
        citron: {
          DEFAULT: '#BFFF56',
          // Lisible sur crème (6:1) et visible en filet sur le citron.
          dark: '#3F6B0E',
        },
        sapin: {
          DEFAULT: '#133201',
          deep: '#0C2100',
        },
        creme: '#FFFBF3',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
};
