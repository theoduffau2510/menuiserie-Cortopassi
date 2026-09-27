/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    borderRadius: {
      none: '0px',
      sm: '0.75rem',
      DEFAULT: '1rem',
      md: '1.25rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '2.5rem',
      '3xl': '3rem',
      full: '9999px',
    },
    boxShadow: {
      none: 'none',
      sm: '0 8px 20px rgb(33 26 20 / 0.12)',
      DEFAULT: '0 14px 32px rgb(33 26 20 / 0.16)',
      md: '0 20px 44px rgb(33 26 20 / 0.2)',
      lg: '0 30px 70px rgb(33 26 20 / 0.24)',
      inner: 'inset 0 0 0 1px rgb(255 255 255 / 0.22)',
    },
    extend: {
      colors: {
        kraft: '#E8E1D0',
        'kraft-light': '#F5F1E6',
        noyer: '#211A14',
        bois: '#8C5A34',
        cordeau: '#2F4C6B',
      },
      fontFamily: {
        display: ['"Big Shoulders Condensed"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Work Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
