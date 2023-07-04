module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily:{
      info:['Fantasy'],
      heading:['Shadows Into Light'],
      navbar:['Indie Flower'],
      about:['Cardo']
    }
  },
  plugins: [require('flowbite/plugin')],
}