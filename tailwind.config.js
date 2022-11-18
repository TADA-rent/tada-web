/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './components/**/*.stories.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        homeshare: "url('/home/share.jpg')",
        homemaintenance: "url('/home/maintenance.jpg')",
        homelandingpage: "url('/home/landingpage.jpg')",
        messaging: "url('/home/messaging.jpg')",
        feature2: "url('/home/feature2bg.jpg')",
        silverphone: "url('/home/iphoneframe-silver.png')",
        goldphone: "url('/home/iphoneframe-gold.png')",
        purplephone: "url('/home/iphoneframe-purple.png')",
        blackphone: "url('/home/iphoneframe-black.png')",
      },
      boxShadow: {
        cool: '0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)',
      },
      fontFamily: {
        sans: ['Satoshi', ...defaultTheme.fontFamily.sans],
        title: ['Magic Ramen', 'Satoshi', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        matte: {
          DEFAULT: '#1B1C19',
          50: '#797D70',
          100: '#6E7266',
          200: '#595D53',
          300: '#45473F',
          400: '#30322C',
          500: '#1B1C19',
          600: '#181917',
          700: '#161714',
          800: '#131412',
          900: '#11110F',
        },
        hunter: {
          DEFAULT: '#1D2110',
          50: '#8A9D4C',
          100: '#7E8F45',
          200: '#657338',
          300: '#4D582B',
          400: '#353C1D',
          500: '#1D2110',
          600: '#1A1E0E',
          700: '#171A0D',
          800: '#14170B',
          900: '#111309',
        },
        punch: {
          DEFAULT: '#F04718',
          50: '#FBD0C4',
          100: '#FAC1B1',
          200: '#F7A38B',
          300: '#F58465',
          400: '#F2663E',
          500: '#F04718',
          600: '#C3340D',
          700: '#8F2609',
          800: '#5A1806',
          900: '#250A02',
        },
        linen: {
          DEFAULT: '#EBE9DE',
          50: '#F4F3EC',
          100: '#F3F1EB',
          200: '#F1EFE8',
          300: '#EFEDE4',
          400: '#EDEBE1',
          500: '#EBE9DE',
          600: '#D6D2BB',
          700: '#C1BA98',
          800: '#ABA375',
          900: '#918858',
        },
      },
    },
  },

  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
