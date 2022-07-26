/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents(
        {
          '.container': {
            paddingLeft: '20px',
            paddingRight: '20px',
            '@screen xl': {
              maxWidth: '1100px',
            },
          }
        },
        {
          '.section': {
            paddingTop: '40px',
            paddingBottom: '40px'
          }
        },
        {
          '.section-large': {
            paddingTop: '80px',
            paddingBottom: '80px'
          }
        }
      )
    }
  ],
}
