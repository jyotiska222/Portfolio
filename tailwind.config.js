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
        primary: {
          DEFAULT: 'var(--color-primary)',
          50: '#eff6ff',
          100: '#dbeafe',
          500: 'var(--color-primary)',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          50: '#ecfdf5',
          100: '#d1fae5',
          500: 'var(--color-secondary)',
          600: '#059669',
          700: '#047857',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          50: '#faf5ff',
          100: '#f3e8ff',
          500: 'var(--color-accent)',
          600: '#7c3aed',
          700: '#6d28d9',
        },
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'surface-elevated': 'var(--color-surfaceElevated)',
        'text-primary': 'var(--color-text)',
        'text-secondary': 'var(--color-textSecondary)',
        'text-muted': 'var(--color-textMuted)',
        'border-color': 'var(--color-border)',
        'border-light': 'var(--color-borderLight)',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'typewriter': 'typewriter 2s steps(40) 1s 1 normal both',
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}