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
        ink: '#1a1a1a',
        'ink-card': '#222222',
        'ink-elevated': '#2b2b2b',
        gold: '#C9A24E',
        green: '#39783D',
        cream: '#F2EFEA',
        canvas: '#1a1a1a',
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
