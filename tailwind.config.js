const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: {
      mode: 'all',
      content: [
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.jsx',
      ]
    },
    theme: {
      fontFamily: {
        ...defaultTheme.fontFamily,
        'sans': ['Epilogue', ...defaultTheme.fontFamily.sans],
      }
    },
    variants: {},
    plugins: [
      require('@tailwindcss/typography'),
    ],
}