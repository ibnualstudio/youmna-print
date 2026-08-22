import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light theme (default)
        bg: '#FBFBFA',
        surface: '#FFFFFF',
        ink: '#1C1A19',
        'ink-2': '#5A5550',
        'ink-3': '#8A847D',
        line: '#E9E5E1',
        accent: '#0F56D3',
        'accent-strong': '#0B3FA6',
        'accent-soft': '#E8F0FE',
        cyan: '#0E9BB8',
        yellow: '#E5A800',
        dark: '#1C1A19',
      },
      fontFamily: {
        sans: ['var(--font-geist)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '16px',
        sm: '10px',
        lg: '24px',
        pill: '999px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(28, 26, 25, 0.05)',
        md: '0 8px 24px -8px rgba(28, 26, 25, 0.12)',
        lg: '0 24px 48px -16px rgba(28, 26, 25, 0.18)',
      },
      container: {
        center: true,
        padding: '24px',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s ease-out infinite',
        'slide-up': 'slide-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-9px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.92)', opacity: '1' },
          '70%, 100%': { transform: 'scale(1.28)', opacity: '0' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;