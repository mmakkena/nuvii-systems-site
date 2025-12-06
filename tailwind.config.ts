import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          dark: "var(--primary-dark)",
        },
        secondary: "var(--secondary)",
        "primary-accent": "var(--primary-accent)",
        "foreground-accent": "var(--foreground-accent)",
        "hero-background": "var(--hero-background)",
        nuvii: {
          blue: '#0BA6E2',
          teal: '#0061C2',
          text: '#1F2A36',
          'dark-bg': '#0b1220',
        },
      },
      backgroundImage: {
        'nuvii-gradient': 'linear-gradient(135deg, #0BA6E2, #0061C2)',
      },
    },
  },
  plugins: [],
};
export default config;
