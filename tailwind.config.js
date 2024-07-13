/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "border": "hsl(var(--border))",
      "input": "hsl(var(--input))",
      "ring": "hsl(var(--ring))",
      "background": "hsl(var(--background))",
      "foreground": "hsl(var(--foreground))",
      "primary": {
        "DEFAULT": "hsl(var(--primary))",
        "foreground": "hsl(var(--primary-foreground))"
      },
      "secondary": {
        "DEFAULT": "hsl(var(--secondary))",
        "foreground": "hsl(var(--secondary-foreground))"
      },
      "destructive": {
        "DEFAULT": "hsl(var(--destructive))",
        "foreground": "hsl(var(--destructive-foreground))"
      },
      "muted": {
        "DEFAULT": "hsl(var(--muted))",
        "foreground": "hsl(var(--muted-foreground))"
      },
      "accent": {
        "DEFAULT": "hsl(var(--accent))",
        "foreground": "hsl(var(--accent-foreground))"
      },
      "popover": {
        "DEFAULT": "hsl(var(--popover))",
        "foreground": "hsl(var(--popover-foreground))"
      },
      "card": {
        "DEFAULT": "hsl(var(--card))",
        "foreground": "hsl(var(--card-foreground))"
      },
      honeydew: {
        DEFAULT: '#D8FAE9',
        100: '#0b522e',
        200: '#15a45d',
        300: '#32e48b',
        400: '#84efba',
        500: '#d8fae9',
        600: '#dffbed',
        700: '#e7fcf1',
        800: '#effdf6',
        900: '#f7fefa',
      },
      jungle_green: {
        DEFAULT: '#1FAB88',
        100: '#06221b',
        200: '#0d4537',
        300: '#136752',
        400: '#198a6e',
        500: '#1fab88',
        600: '#30d9af',
        700: '#64e3c3',
        800: '#98ecd7',
        900: '#cbf6eb',
      },
      jet: {
        DEFAULT: '#2E2E2E',
        100: '#090909',
        200: '#121212',
        300: '#1c1c1c',
        400: '#252525',
        500: '#2e2e2e',
        600: '#585858',
        700: '#828282',
        800: '#ababab',
        900: '#d5d5d5',
      },
      pistachio: {
        DEFAULT: '#A9C767',
        100: '#232c10',
        200: '#465820',
        300: '#698431',
        400: '#8db041',
        500: '#a9c767',
        600: '#b9d285',
        700: '#cbdda3',
        800: '#dce8c2',
        900: '#eef4e0',
      },
      ash_gray: {
        DEFAULT: '#B1CEC4',
        100: '#1d2f29',
        200: '#3b5e52',
        300: '#588d7b',
        400: '#82b0a0',
        500: '#b1cec4',
        600: '#c0d8d0',
        700: '#d0e2db',
        800: '#e0ebe7',
        900: '#eff5f3',
      },
      // "honeydrew": "#D8FAE9ff",
      // "jungle-green": "#1FAB88ff",
      // "jet": "#2E2E2Eff",
      // "pistachio": "#A9C767ff",
      // "ash-gray": "#B1CEC4ff"
    },
    borderRadius: {
      "lg": "var(--radius)",
      "md": "calc(var(--radius) - 2px)",
      "sm": "calc(var(--radius) - 4px)"
    },
    keyframes: {
      "accordion-down": {
        "from": {
          "height": "0"
        },
        "to": {
          "height": "var(--radix-accordion-content-height)"
        }
      },
      "accordion-up": {
        "from": {
          "height": "var(--radix-accordion-content-height)"
        },
        "to": {
          "height": "0"
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
