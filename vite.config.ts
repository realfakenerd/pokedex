import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import removeConsole from 'vite-plugin-remove-console';
import viteCompression from 'vite-plugin-compression';
import lightningcss from 'vite-plugin-lightningcss';
export default defineConfig({
	plugins: [
		sveltekit(),
		lightningcss({
			browserslist: 'last 1 versions'
		}),
		removeConsole(),
		viteCompression({
			algorithm: 'brotliCompress',
			verbose: false,
			threshold: 512,
			compressionOptions: {
				level: 3
			}
		})
	],
	build: {
		minify: 'terser',
		reportCompressedSize: false,
		target: 'esnext'
	},
	define: {
		'process.env': {}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
