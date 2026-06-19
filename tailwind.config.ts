import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy-darkest': '#021A33',
        'navy-dark': '#042C53',
        'navy-mid': '#0C447C',
        'navy': '#185FA5',
        'navy-light': '#378ADD',
        'navy-lighter': '#85B7EB',
        'navy-lightest': '#B5D4F4',
        'navy-bg': '#E6F1FB',
        'gold-dark': '#412402',
        'gold-darker': '#633806',
        'gold-mid': '#854F0B',
        'gold': '#BA7517',
        'gold-bright': '#EF9F27',
        'gold-light': '#FAC775',
        'gold-lightest': '#FAEEDA',
        'off-white': '#F1EFE8',
        'gray-text': '#5F5E5A',
        'gray-muted': '#888780',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
