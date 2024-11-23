/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'bgblue': '#0A66C2',
                'bgorange': '#D9534F'
            },
        },
    },
    plugins: [],
}