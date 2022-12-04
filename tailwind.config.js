/** @type {import('tailwindcss').Config} */
/** @type {import('flowbite')} */
module.exports = {
  plugins: [
    require('flowbite/plugin')
  ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    screens:{
      'lg': {'max': '992px'},
      'md': {'max': '768px'},
      'sm': {'max': '480px'},
    },
    extend: {},
    container:{
      padding: '20px',
      center: true
    }
  },
  variants: {
    extend: {
      display: ['group-focus']
    },
  },

  content: [
    "./node_modules/flowbite/**/*.js"
]

}
