import path from 'path'
import { fileURLToPath } from 'url'
import pkg from './package.json' with { type: 'json' }
import typescript from '@rollup/plugin-typescript'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
	input: path.resolve(__dirname, './src/index.ts'),
	output: {
		file: path.resolve(__dirname, pkg.main),
		// dir: 'built',
		// 輸出格式
		format: 'commonjs',
		name: 'cardation',
		chunkFileNames: '[name].aaa.js',
		banner: '/* eslint-disable */',
		// sourcemap: true,
	},
	plugins: [
		typescript({
			cacheDir: './.rts2_cache',
			compilerOptions: {
				// 輸入格式
				module: 'ESNext',
				// outDir: './built/lib/',
				declarationDir: 'built/t',
			},
		}),
	],
}
