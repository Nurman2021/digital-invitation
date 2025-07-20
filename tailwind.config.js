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
                    primary: '#146b57',        // Main teal green
                    'primary-content': '#ffffff',
                    secondary: '#2dd4bf',      // Lighter teal
                    'secondary-content': '#0f172a',
                    accent: '#0891b2',         // Blue teal
                    'accent-content': '#ffffff',
                    neutral: '#374151',        // Gray
                    'neutral-content': '#f9fafb',
                    'base-100': '#ffffff',     // White background
                    'base-200': '#f8fafc',     // Light gray
                    'base-300': '#e2e8f0',     // Medium gray
                    'base-content': '#1e293b', // Dark text
                    info: '#0ea5e9',          // Blue
                    'info-content': '#ffffff',
                    success: '#10b981',       // Green
                    'success-content': '#ffffff',
                    warning: '#f59e0b',       // Orange
                    'warning-content': '#ffffff',
                    error: '#ef4444',         // Red
                    'error-content': '#ffffff'
                }
            }
        ],
        darkTheme: false,
        base: true,
        styled: true,
        utils: true,
        rtl: false,
        prefix: '',
        logs: false
    }
};
