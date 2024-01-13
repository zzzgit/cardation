import path from 'path'
import { fileURLToPath } from 'url'
import pkg from './package.json' assert { type: 'json' }
import typescript from '@rollup/plugin-typescript'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
	input: path.resolve(__dirname, './src/index.ts'),
	output: {
		file: path.resolve(__dirname, pkg.main),
		// dir: 'built',
		format: 'commonjs', // 輸出格式
		name: 'cardation',
		chunkFileNames: '[name].aaa.js',
		banner: '/* eslint-disable */',
		// sourcemap: true,
	},
	plugins: [
		typescript({
			cacheDir: './.rts2_cache',
			compilerOptions: {
				module: 'ESNext', // 輸入格式
				// outDir: './built/lib/',
				declarationDir: 'built/t',
			},
		}),
	],
}
