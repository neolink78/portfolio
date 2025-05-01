import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '350px',
        'lg': '950px',
        'xl': '1200px'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        inspiration: ["Dancing Script"],
        text: ["Roboto"]
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
        bounceUp: {
          '0%': { transform: 'translateY(0)' },
          '20%': { transform: 'translateY(-100%)' },
          '40%': { transform: 'translateY(0)' },
          '60%': { transform: 'translateY(-40%)' },
          '80%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.3s ease-in-out',
        bounceUp: 'bounceUp 0.6s ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
