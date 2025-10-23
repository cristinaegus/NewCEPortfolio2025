/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
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
        // Modern color palette with better contrast and harmony
        'background-light': '#fafbfc',
        'background-dark': '#0f1419',
        'surface-light': '#ffffff',
        'surface-dark': '#1a202c',
        'grey-200-light': '#1a202c',
        'grey-200-dark': '#f7fafc',
        'grey-400-light': '#4a5568',
        'grey-400-dark': '#cbd5e0',
        'grey-600-light': '#2d3748',
        'grey-600-dark': '#ffffff',
        'grey-900-light': '#171923',
        'grey-900-dark': '#ffffff',
        'accent-primary': '#6366f1', // Modern indigo
        'accent-secondary': '#8b5cf6', // Modern purple
        'accent-tertiary': '#06b6d4', // Modern cyan
        rose: '#f43f5e',
        purple: '#8b5cf6',
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
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          '--background': theme('colors.background-light'),
          '--surface': theme('colors.surface-light'),
          '--grey-200': theme('colors.grey-200-light'),
          '--grey-400': theme('colors.grey-400-light'),
          '--grey-600': theme('colors.grey-600-light'),
          '--grey-900': theme('colors.grey-900-light'),
          '--clr-rose': theme('colors.rose'),
          '--clr-purple': theme('colors.purple'),
          '--clr-accent-primary': theme('colors.accent-primary'),
          '--clr-accent-secondary': theme('colors.accent-secondary'),
          '--clr-accent-tertiary': theme('colors.accent-tertiary'),
        },
        '.dark': {
          '--background': theme('colors.background-dark'),
          '--surface': theme('colors.surface-dark'),
          '--grey-200': theme('colors.grey-200-dark'),
          '--grey-400': theme('colors.grey-400-dark'),
          '--grey-600': theme('colors.grey-600-dark'),
          '--grey-900': theme('colors.grey-900-dark'),
          '--clr-rose': theme('colors.rose'),
          '--clr-purple': theme('colors.purple'),
          '--clr-accent-primary': theme('colors.accent-primary'),
          '--clr-accent-secondary': theme('colors.accent-secondary'),
          '--clr-accent-tertiary': theme('colors.accent-tertiary'),
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
