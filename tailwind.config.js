/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'], // Enable dark mode with class strategy
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    },
    extend: {
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
      colors: {
        'background-light': '#f8fafc',
        'background-dark': '#18181b',
        'grey-200-light': '#222222',
        'grey-200-dark': '#eaeaea',
        'grey-400-light': '#444444',
        'grey-400-dark': '#acacac',
        'grey-600-light': '#333333',
        'grey-600-dark': '#ffffff',
        'grey-900-light': '#111111',
        'grey-900-dark': '#fafafa',
        rose: '#e11d48',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          '--background': theme('colors.background-light'),
          '--grey-200': theme('colors.grey-200-light'),
          '--grey-400': theme('colors.grey-400-light'),
          '--grey-600': theme('colors.grey-600-light'),
          '--grey-900': theme('colors.grey-900-light'),
          '--clr-rose': theme('colors.rose'), // Light mode
        },
        '.dark': {
          '--background': theme('colors.background-dark'),
          '--grey-200': theme('colors.grey-200-dark'),
          '--grey-400': theme('colors.grey-400-dark'),
          '--grey-600': '#ffffff', // White for dark mode icons
          '--grey-900': theme('colors.grey-900-dark'),
          '--clr-rose': theme('colors.rose'), // Dark mode
        },
        body: {
          fontFamily: "'Inter', sans-serif",
          padding: '0 0.5rem',
          color: 'var(--grey-600)',
          backgroundColor: 'var(--background)',
        },
        h1: {
          fontSize: '3rem',
          lineHeight: '1',
        },
        'h1 + h2': {
          fontSize: '1.1rem',
          marginTop: '-1.4rem',
          opacity: '0.9',
          fontWeight: '400',
        },
        main: {
          maxWidth: '40rem',
          margin: '0 auto',
        },
        'p, li': {
          fontSize: '1rem',
          color: 'var(--grey-400)',
          opacity: '0.8',
        },
        li: {
          margin: '1rem 0',
        },
      });
    },
    function ({ addComponents, theme }) {
      addComponents({
        '.active-link': {
          backgroundColor: theme('colors.grey-600-light'),
          color: theme('colors.background-light'),
        },
      });
    },
  ],
};
