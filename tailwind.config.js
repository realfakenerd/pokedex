module.exports = {
    purge: ['./src/**/*.svelte', './src/**/*.css'],
    plugins: [
        require('daisyui'),
        require('@tailwindcss/aspect-ratio')
    ],
}