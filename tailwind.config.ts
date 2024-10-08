/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      poppins: ['var(--font-poppins)'],
      inter: ['var(--font-inter)'],
      pretendard: ['var(--font-pretendard)'],
    },
    extend: {
      boxShadow: {
        user: '0px 15px 24px 0px rgba(0, 0, 0, 0.12)',
        lg: '0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'color-1': '#343741',
        'color-4': '#344054',
        'color-f': '#5e626f',
        'color-2f': '#24252f',
        'color-ff': '#4a77ff',
        'color-8': '#40e2e8',
        'color-fb': '#FBFBFB',
        'color-f6': '#EFF1F6',
        'color-cf': '#C1C5CF',
        'color-96': '#00C696',
        'color-ef': '#E9F7EF',
        'color-4ff': '#8BC4FF',
        'color-23': '#FBFF23',
        'color-f7': '#F2F4F7',
      },
    },
  },
  plugins: [],
};
