import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    fontSize: {
      vueling: '1rem'
    },
    fontFamily: {sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans]},
    extend: {
      height: {200: '50rem', ...defaultTheme.height},
      screens: {
        '3xl': '1792px',
        '4xl': '2048px'
      },
      spacing: {
        128: '32rem',
        160: '40rem',
        192: '48rem',
        224: '56rem',
        256: '64rem',
        288: '72rem',
        320: '80rem',
        352: '88rem',
        384: '96rem',
      },
      colors: {
        colors,
        vueling: {
          yellow: "#fecc01",
          gray: '#757575',
          links: {
            color: '#999900',
            over: '#898900'
          },
          button: {
            over: '#e9bb01'
          },
          dark: '#4D4D4D',
          green: '#61CE70'
        }
      }
    }
  },
  plugins: [],
};
export default config;
