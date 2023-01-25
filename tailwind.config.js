/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // daisyui: {
  //   themes: [
  //     {
  //       doctorTheme: {
  //         primary: ' #19D3AE'
  //       }
  //     }
  //   ]
  // },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
