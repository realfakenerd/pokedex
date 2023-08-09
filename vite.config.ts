import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import removeConsole from 'vite-plugin-remove-console';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
	plugins: [
		sveltekit(),
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
		minify: 'esbuild',
		reportCompressedSize: false,
		target: 'esnext'
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
