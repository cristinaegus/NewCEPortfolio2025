/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Use 'class' strategy for dark mode
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    // Ensure all relevant files are included
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    letterSpacing: {
      // You can keep your letter spacing configuration
      tightest: '-.075em',
      // ... rest of the letter spacings
    },
    extend: {
      filter: ['responsive', 'hover', 'focus'],
      colors: {
        // Define your colors
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
        purple: '#6a0dad', // Added purple color
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'var(--tw-prose-body)',
            lineHeight: '1.75',
            h1: {
              fontSize: '2.5rem',
              marginBottom: '2rem',
              fontWeight: '700',
            },
            h2: {
              fontSize: '1.75rem',
              marginTop: '2.5rem',
              marginBottom: '1.25rem',
              fontWeight: '600',
            },
            p: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              lineHeight: '1.75',
            },
          },
        },
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss-filters'),
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          '--background': theme('colors.background-light'),
          '--grey-200': theme('colors.grey-200-light'),
          '--grey-400': theme('colors.grey-400-light'),
          '--grey-600': theme('colors.grey-600-light'),
          '--grey-900': theme('colors.grey-900-light'),
          '--clr-rose': theme('colors.rose'),
          '--clr-purple': theme('colors.purple'), // Added custom purple variable
        },
        '.dark': {
          '--background': theme('colors.background-dark'),
          '--grey-200': theme('colors.grey-200-dark'),
          '--grey-400': theme('colors.grey-400-dark'),
          '--grey-600': theme('colors.grey-600-dark'),
          '--grey-900': theme('colors.grey-900-dark'),
          '--clr-rose': theme('colors.rose'),
          '--clr-purple': theme('colors.purple'), // Added custom purple variable for dark mode
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
          backgroundColor: 'var(--grey-600)',
          color: 'var(--background)',
        },
      });
    },
  ],
};
