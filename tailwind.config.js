/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      gray: '#9D9D9D',
      green: '#A5D364',
      white: '#fff',
      black: '#000',
      lightGray: '#BDBDBD',
    },

    container: {
      center: true, // Автоматическое центрирование
      padding: '2rem', // Отступы по умолчанию
      screens: {
        xs: '480px',
        sm: '600px', // Устанавливаем ширину для small
        md: '720px', // Устанавливаем ширину для medium
        lg: '960px', // Устанавливаем ширину для large
        xl: '1240px', // Устанавливаем ширину для extra large
      },
    },
  },
  plugins: [],
};
