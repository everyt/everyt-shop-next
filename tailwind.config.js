/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        '29px': '29px',
        '40px': '40px',
        '50px': '50px',
        '70px': '70px',
        '90px': '90px',
        '100px': '100px',
        '9.5': '2.35rem',
      },
      width: {
        '70px': '70px',
        '155px': '155px',
        '200px': '200px',
        '1000px': '1000px',
        '1200px': '1200px',
        '1920px': '1920px',
      },
      padding: {
        '9px': '9px',
        '0.8rem': '0.8rem',
        '0.9rem': '0.9rem',
      },
      margin: {
        26: '6.5rem',
      },
      maxWidth: {
        1920: '1920px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
