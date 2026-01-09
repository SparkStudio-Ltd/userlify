import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: {
          DEFAULT: '#e86a54',
          50: '#fef5f3',
          100: '#fde9e4',
          200: '#fad0c9',
          300: '#f6afa0',
          400: '#f08367',
          500: '#e86a54',
          600: '#d54a31',
          700: '#b23a23',
          800: '#933321',
          900: '#7a2f21',
          950: '#42150d',
        },
        accent: {
          DEFAULT: '#2a0e63',
          50: '#f4f3ff',
          100: '#ebe9fe',
          200: '#d9d6fe',
          300: '#beb6fd',
          400: '#9d8cfa',
          500: '#7c5af6',
          600: '#6838ed',
          700: '#5826d9',
          800: '#4a1fb6',
          900: '#3e1a95',
          950: '#2a0e63',
        },
        gray: {
          DEFAULT: '#030712',
          50: '#f8f8f7',
          100: '#efeeec',
          200: '#dfddd9',
          300: '#c9c6bf',
          400: '#b6b8be',
          500: '#8d8a85',
          600: '#716e68',
          700: '#5e5b56',
          800: '#504d49',
          900: '#46443f',
          950: '#030712',
        },
        badge: {
          dark: '#3c3e44',
        },
        background: {
          DEFAULT: '#FDF8F6',
          light: '#FFFFFF',
          gradient: {
            start: '#FFE5DC',
            end: '#FDF8F6',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-nohemi)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-nohemi)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-instrument)', 'Georgia', 'serif'],
        nav: ['var(--font-public-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-2': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-2': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'heading-3': ['1.875rem', { lineHeight: '1.3' }],
        'heading-4': ['1.5rem', { lineHeight: '1.35' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        body: ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 10px 40px -3px rgba(0, 0, 0, 0.08)',
        button: '0 4px 14px 0 rgba(232, 90, 60, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.6s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
