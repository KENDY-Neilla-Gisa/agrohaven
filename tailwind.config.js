/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      'xs': '0.75rem',
      'sm': '0.875rem',
      'base': '1.05rem',  // Increased from 1rem
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        // Light theme colors
        primary: {
          DEFAULT: '#22c55e',
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // Dark theme colors (from the design)
        dark: {
          background: '#0f172a',
          surface: '#1e293b',
          card: '#1e293b',
          'card-hover': '#334155',
          text: '#f8fafc',
          'text-muted': '#94a3b8',
          border: '#334155',
        },
        // Light theme colors (from the design)
        light: {
          background: '#ffffff',
          surface: '#f8fafc',
          card: '#ffffff',
          'card-hover': '#f1f5f9',
          text: '#0f172a',
          'text-muted': '#64748b',
          border: '#e2e8f0',
        },
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card-dark': '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
