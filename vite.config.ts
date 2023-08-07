import { sveltekit } from '@sveltejs/kit/vite';
// @ts-expect-error complaining about not having a type;
import removeConsole from 'vite-plugin-remove-console';
import viteCompression from 'vite-plugin-compression';
import type { UserConfig } from 'vite';

const config = {
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
		minify: 'terser',
		reportCompressedSize: false,
		target: 'esnext',
		terserOptions: {
			compress: {
				keep_infinity: true,
				pure_getters: true,
				drop_console: true
			}
		}
	},
	define: {
		'process.env': process.env
	}
} satisfies UserConfig;

export default config;