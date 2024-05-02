import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import lightningcss from 'vite-plugin-lightningcss';
import removeConsole from 'vite-plugin-remove-console';

const config = {
	define: {
		'process.env.NODE_ENV': '"production"'
	},
	ssr: {
		external: ['rxfire/firestore', 'firebase']
	},
	build: {
		reportCompressedSize: false,
		target: 'esnext',
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				arrows: true,
				dead_code: true,
				drop_debugger: true,
				pure_getters: true,
				keep_infinity: true,
				ie8: false
			},
			module: true,
			parse: {
				html5_comments: false
			},
			output: {
				comments: false
			},
			ecma: 2020,
			ie8: false,
			mangle: true,
			safari10: false
		}
	},
	plugins: [
		sveltekit(),
		lightningcss(),
		removeConsole(),
		viteCompression({
			algorithm: 'brotliCompress',
			verbose: false,
			threshold: 512,
			compressionOptions: {
				level: 3
			}
		})
	]
} satisfies UserConfig;

export default config;
