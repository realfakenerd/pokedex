import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { publish } from 'gh-pages';
import viteCompression from 'vite-plugin-compression';
import {generateSW, injectManifest} from 'rollup-plugin-workbox';

export default defineConfig({
    server: {
        port: 5000,
        host: true
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
        injectManifest({
            swSrc:'/sw.js',
            swDest: '/sw.js',
            globDirectory:'/public/sw.js',
            mode: 'production'
        },function render({swDest, count, size}) {
            console.log(
                'dest', swDest,
                'count', count,
                'size', size
            );
        }),
        generateSW({
            swDest:'/sw.js',
            globDirectory:'/public/sw.js',
            mode: 'production'
        }, function render({swDest, count, size}) {
            console.log(
                'dest', swDest,
                'count', count,
                'size', size
            );
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
