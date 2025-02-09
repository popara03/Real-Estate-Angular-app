/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  safelist: [
    'w-full',
    'w-fit',
    'w-1/4',
    'font-semibold',
    'font-normal',
    'text-base',
    'text-lg',
    'text-xl',
    'mb-2',
    'flex',
    'p-5',
    'gap-5',
    'gap-2',
    'rounded-xl',
    'bg-gray-100',
    'items-center',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}