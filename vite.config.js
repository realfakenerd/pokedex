import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { publish } from 'gh-pages';

export default defineConfig({
    server: {
        port: 5000,
        host: true
    },

    plugins: [
        svelte(),
        // @ts-ignore
        publish('dist', {
            message: 'Gerado automáticamente pelo ghPages'
        }, (err) => {
            if (err) {
                console.error(err)
            } else {
                console.log('Published to Github!!!')
            }
        })
    ],
});
