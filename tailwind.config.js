/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'overlay-show': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'overlay-show': 'overlay-show 400ms',
      },
      fontFamily: {
        sans: 'var(--font-barlow)',
        'sans-condensed': 'var(--font-barlow-condensed)',
        alt: 'var(--font-bellefair)',
      },
      colors: {
        primary: '#0B0D17',
        secondary: '#D0D6F9',
      },
      backgroundImage: {
        'home-desktop': "url('~/src/assets/home/background-home-desktop.jpg')",
        'home-mobile': "url('~/src/assets/home/background-home-mobile.jpg')",
        'home-tablet': "url('~/src/assets/home/background-home-tablet.jpg')",
      },
    },
  },
  plugins: [],
}
