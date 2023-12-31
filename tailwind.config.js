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
        'destination-desktop':
          "url('~/src/assets/destination/background-destination-desktop.jpg')",
        'destination-mobile':
          "url('~/src/assets/destination/background-destination-mobile.jpg')",
        'destination-tablet':
          "url('~/src/assets/destination/background-destination-tablet.jpg')",
        'crew-desktop': "url('~/src/assets/crew/background-crew-desktop.jpg')",
        'crew-mobile': "url('~/src/assets/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('~/src/assets/crew/background-crew-tablet.jpg')",
        'technology-desktop':
          "url('~/src/assets/technology/background-technology-desktop.jpg')",
        'technology-mobile':
          "url('~/src/assets/technology/background-technology-mobile.jpg')",
        'technology-tablet':
          "url('~/src/assets/technology/background-technology-tablet.jpg')",
      },
    },
  },
  plugins: [],
}
