/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        // => @media (min-width: 320px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },

      colors: {
        transparent: 'transparent',

        primary: '#000000',
        primaryLow: '#222223',
        secondary: '#377DFF',
        outline: '#4a5568',

        btnColorPrimary: '#1278bf', 

        blueMid: '#118FCF',
        blueLight: '#1da7e0',
        blueExtraLight: '#007185',

        greenDark: '#036938',
        greenMid: '#46ae4e',
        greenLight: '#CBE4B4',

        orangeDark: '#fbbf24',
        orangeLow: '#E04E39',

        redDark: '#EF3340',
        redLow: '#f87171',

        //BASE
        grays1: '#141718',
        grays2: '#333638',
        grays3: '#333F48',
        grays4: '#5C6265',
        grays5: '#B9BBBC',

        grays6: '#DDDEDF',
        grays7: '#F3F5F7',
        grays8: '#FAFAFA',
        white: '#FFFFFF',

        //PAGINATOR
        textColorNotSelected: '#141718',
      },

      fontSize: {
        '3': '3px',
        '7': '7px',
        '9': '9px',
        '10': '10px',
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '22': '22px',
        '24': '24px',
        '28': '28px',
        '32': '32px',
        '35': '35px',
        '40': '40px',
        '45': '45px',
        '50': '50px',
        '55': '55px',
        '60': '60px',
        '70': '70px',
        '80': '80px',
        'small': '14px', // Tamanho da fonte menor
      },

      padding: {
        'small': '8px 16px', // Espaçamento menor
      },

      width: {
        '41': '41px',
        '200': '200px',
        '314': '314px',
        '400': '400px',
        '500': '500px',
      },

      height: {
        '24': '24px',
        '30': '30px',
        '55': '55px',
        '170': '170px',
        '200': '200px',
        '300': '300px',
        '400': '400px',
        '600': '600px',
      },
      backgroundColor: {
        'button': 'inherit',
      },

      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
    },
  },
  plugins: [],
}

