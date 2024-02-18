/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'sphone': { 'max': '320px' },
        'phone': '320px',
        'tablet': '640px',
        'desktop': '1024px',
        'wide': '1440px',
      },
      colors: {
        // Custom colors
        darkp: '#150E28',
        light: '#903AFF',
        normal: '#D434FE',
        span: '#FF26B9',
      },
      // Define gradients using backgroundImage property
      backgroundImage: {
        // Gradient background color
        primary: 'linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)',
      },
    },
  },
  // plugins: ,
}

// ["./src/**/*.{js,jsx,ts,tsx}"]
//  [require("daisyui")]