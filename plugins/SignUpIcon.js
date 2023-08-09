const plugin = require('tailwindcss/plugin');

const SignUpIcon = plugin(function ({ addUtilities }) {
  addUtilities({
    '.sign-up-icon-wrap': {
      backgroundColor: 'rgb(110 231 183 / 1)',
      padding: '1rem',
      borderLeftWidth: '2px',
      borderTopWidth: '2px',
      borderBottomWidth: '2px',
    },
    '.sign-up-icon': {
      marginTop: '.125rem',
    },
  });
});

module.exports = SignUpIcon;
