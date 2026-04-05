/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                background: 'rgb(var(--color-bg) / <alpha-value>)',
                surface: 'rgb(var(--color-surface) / <alpha-value>)',
                primary: 'rgb(var(--color-primary) / <alpha-value>)',
                accent: 'rgb(var(--color-accent) / <alpha-value>)',
                warning: 'rgb(var(--color-warning) / <alpha-value>)',
                text: 'rgb(var(--color-text) / <alpha-value>)',
                heading: 'rgb(var(--color-heading) / <alpha-value>)',
                muted: 'rgb(var(--color-muted) / <alpha-value>)',
                border: 'rgb(var(--color-border) / <alpha-value>)',
                'card-border': 'rgb(var(--color-card-border) / <alpha-value>)',
            },
            fontFamily: {
                sans: ['Inter', 'Outfit', 'sans-serif'],
                serif: ['Space Grotesk', 'Bricolage Grotesque', 'serif'],
                display: ['Space Grotesk', 'Bricolage Grotesque', 'serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'blob': 'blob 7s infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' }
                }
            }
        },
    },
    plugins: [],
}
