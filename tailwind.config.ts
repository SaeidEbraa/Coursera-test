import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,tsx,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#333333',
          secondary: '#4A4A4A',
        },
        gold: '#B18972',
        green: '#39783D',
        cream: '#F2EFEA',
        canvas: '#F8F7F5',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      borderRadius: {
        DEFAULT: '3px',
      },
    },
  },
  plugins: [],
};

export default config;
