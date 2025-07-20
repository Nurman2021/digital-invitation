import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                body: [
                    'Figtree',
                    'Arial',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Roboto',
                    'Oxygen',
                    'Ubuntu',
                    'Cantarell',
                    'Open Sans',
                    'Helvetica Neue',
                    'sans-serif'
                ],
                mono: ['Fira Mono', 'monospace']
            },
            colors: {
                theme: {
                    1: '#ff3e00',
                    2: '#4075a6'
                }
            }
        }
    },
    plugins: [daisyui],
    daisyui: {
        themes: [
            {
                light: {
                    primary: '#ff3e00',
                    secondary: '#4075a6',
                    accent: '#37cdbe',
                    neutral: '#3d4451',
                    'base-100': '#ffffff',
                    info: '#3abff8',
                    success: '#36d399',
                    warning: '#fbbd23',
                    error: '#f87272'
                }
            },
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula',
            'cmyk',
            'autumn',
            'business',
            'acid',
            'lemonade',
            'night',
            'coffee',
            'winter'
        ],
        darkTheme: 'dark',
        base: true,
        styled: true,
        utils: true,
        rtl: false,
        prefix: '',
        logs: false
    }
};
