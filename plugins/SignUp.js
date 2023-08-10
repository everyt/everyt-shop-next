const plugin = require('tailwindcss/plugin');

const SignUp = plugin(function ({ addUtilities }) {
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
    '.sign-up-input-wrap': {
      backgroundColor: 'rgb(255 255 255 / 1)',
      padding: '1rem',
      paddingBottom: '0.75rem',
      borderWidth: '2px',
      display: 'flex',
    },
    '.sign-up-input': {
      width: '350px',
      outline: '2px solid transparent',
      outlineOffset: '2px',
    },
    '.sign-up-input-container': {
      marginBottom: '0.5rem',
      display: 'flex',
      alignSelf: 'center',
    },
  });
});

module.exports = SignUp;
