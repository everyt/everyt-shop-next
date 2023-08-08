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
        '220px': '220px',
        '230px': '230px',
        '231px': '231px',
        '800px': '800px',
        '900px': '900px',
        '1000px': '1000px',
        '1200px': '1200px',
        '1920px': '1920px',
        '100': '24rem',
        '100px': '100px',
      },
      padding: {
        '9px': '9px',
        '0.8rem': '0.8rem',
        '0.9rem': '0.9rem',
      },
      margin: {
        26: '6.5rem',
        37: '9.125rem',
        38: '9.25rem',
      },
      maxWidth: {
        1920: '1920px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        LINETh: 'LINESeedKR-Th',
        LINERg: 'LINESeedKR-Rg',
        LINEBd: 'LINESeedKR-Bd',
      },
      rotate: {
        m45: '-45deg',
      },
    },
  },
  plugins: [],
};
