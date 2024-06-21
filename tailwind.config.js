/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode with class strategy
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'background-light': 'white',
        'background-dark': 'black',
        'grey-200-light': '#222222',
        'grey-200-dark': '#eaeaeaea',
        'grey-400-light': '#444444',
        'grey-400-dark': '#acacacac',
        'grey-600-light': '#333333',
        'grey-600-dark': '#ffffff',
        'grey-900-light': '#111111',
        'grey-900-dark': '#fafafa',
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          '--background': theme('colors.background-light'),
          '--grey-200': theme('colors.grey-200-light'),
          '--grey-400': theme('colors.grey-400-light'),
          '--grey-600': theme('colors.grey-600-light'),
          '--grey-900': theme('colors.grey-900-light'),
        },
        '.dark': {
          '--background': theme('colors.background-dark'),
          '--grey-200': theme('colors.grey-200-dark'),
          '--grey-400': theme('colors.grey-400-dark'),
          '--grey-600': theme('colors.grey-600-dark'),
          '--grey-900': theme('colors.grey-900-dark'),
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
  ],
};
