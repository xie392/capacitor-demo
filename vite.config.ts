import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pages from 'vite-plugin-pages'
import { fileURLToPath } from 'node:url'

export default defineConfig({
	plugins: [react(), pages({ exclude: ['**/components/*.tsx'], routeStyle: 'next' })],
	build: {
		minify: 'terser',
		terserOptions: {
			/**
			 * @description 去除console.log和debugger
			 * @link https://github.com/terser/terser#compress-options
			 */
			compress: {
				drop_console: true,
				drop_debugger: true
			}
		}
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
