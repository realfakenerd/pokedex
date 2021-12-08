module.exports = {
    purge: ['./src/**/*.svelte', './src/**/*.css'],
    plugins: [
        require('daisyui'),
        require('@tailwindcss/aspect-ratio')
    ],
    daisyui: {
        themes: [
            {
                'cus-light': {
                    'primary': '#ef4444',
                    'primary-focus': '#B91C1C',
                    'primary-content': '#fafafa',
                    'secondary': '#3B82F6',
                    'secondary-focus': '#1D4ED8',
                    'secondary-content': '#fafafa',
                    'accent': '#fbbf24',
                    'accent-focus': '#fcd34d',
                    'accent-content': '#fafafa',
                    'neutral': '#3d4451',
                    'neutral-focus': '#2a2e37',
                    'neutral-content': '#fff',
                    'base-100': '#fafafa',
                    'base-200': '#f9fafb',
                    'base-300': '#d1d5db',
                    'base-content': '#1f2937',
                    'info': '#818cf8',
                    'success': '#10b981',
                    'warning': '#d97706',
                    'error': '#dc2626',
                }
            },
            'dark'
        ]
    }
}