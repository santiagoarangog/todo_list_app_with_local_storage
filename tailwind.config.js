/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'redhat': ['"Red Hat Display"', 'sans-serif']
    },
    extend: {
      fontFamily: {
        'fontawesome': ['Font Awesome 5 Free']
      },
      fontSize: {
        '3xl': '2rem',
        '4xl': '2.5rem'
      },
    }
    },
  plugins: [],
}

