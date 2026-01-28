/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        'fireweed-magenta': '#C13584',
        'rose-purple': '#B8336A',
        'deep-pink': '#E75480',
        'ash-gray': '#2D2D2D',
        'charcoal': '#3A3A3A',
        'warm-cream': '#F5F1E8',
        'soft-ivory': '#FFFDF7',
        'reddish-stem': '#8B4049',
        'forest-green': '#4A7C59',
      },
      fontFamily: {
        'garamond': ['"EB Garamond"', 'serif'],
        'sans': ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['72px', { lineHeight: '1.1' }],
        'display-mobile': ['48px', { lineHeight: '1.1' }],
        'section': ['48px', { lineHeight: '1.2' }],
        'section-mobile': ['36px', { lineHeight: '1.2' }],
        'subheader': ['32px', { lineHeight: '1.3' }],
        'body': ['24px', { lineHeight: '1.6' }],
        'body-large': ['28px', { lineHeight: '1.6' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        'readable': '70ch',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
