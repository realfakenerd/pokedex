import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { publish } from 'gh-pages';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
    server: {
        port: 5000,
        host: true
    },
    build:{
        reportCompressedSize: false,
    },
    plugins: [
        svelte(),
        viteCompression({
            algorithm: 'brotliCompress',
            threshold: 512,
            compressionOptions:{
                level: 11
            }
        }),
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
