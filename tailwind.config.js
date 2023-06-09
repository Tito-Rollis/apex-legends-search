/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                custom: ['Technor', 'sans-serif'],
            },
            boxShadow: {
                inner: 'inset 0px -3px 0px 0px rgba(224, 11, 11, 1)',
            },
        },
    },
    plugins: [],
};
