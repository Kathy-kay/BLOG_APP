/** @type {import('tailwindcss').Config} */


 export const  darkMode = ["class"];
  export const content = [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ];

  export const theme = {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'dark-1': '#000000',
      'dark-2': '#09090A',
      'dark-3': '#101012',
      'dark-4': '#1F1F22',
      'light-1': '#FFFFFF',
      'light-2': '#EFEFEF',
      'light-3': '#7878A3',
      'light-4': '#5C5C7B',
      },
      screens: {
        'xs': '480px',
      },
      width: {
        '420': '420px',
        '465': '465px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  }
 export const plugins =  [import("tailwindcss-animate")];