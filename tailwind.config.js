const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./components/**/*.tsx', './layouts/**/*.tsx', './pages/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.900') + ' !important',
              },
              code: { color: theme('colors.blue.400') },
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
            'code:not(.code-highlight)': {
              color: theme('colors.pink.500'),
              padding: '0.125rem 0.25rem',
              'border-radius': '0.375rem',
              border: `1px solid #e5e7eb`,
              'background-color': theme('colors.gray.100'),
            },
            pre: {
              'background-color': theme('colors.gray.50'),
              border: `1px solid ${theme('colors.gray.200')}`,
            },
            'code::before': {
              content: '',
            },
            'code::after': {
              content: '',
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.500') + ' !important',
              },
              code: { color: theme('colors.blue.400') },
            },
            'code:not(.code-highlight)': {
              'border-color': theme('colors.gray.800'),
              'background-color': theme('colors.gray.900'),
            },
            pre: {
              'background-color': theme('colors.gray.900'),
              border: `1px solid ${theme('colors.gray.700')}`,
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300'),
            },
            'h2,h3,h4': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[32],
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.500') },
              },
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') },
              },
            },
            strong: { color: theme('colors.gray.300') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
};
