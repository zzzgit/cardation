/* eslint-env node */
import path from 'path'
import pkg from './package.json'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'

export default {
	input: path.resolve(__dirname, './src/index.ts'),
	output: {
		file: path.resolve(__dirname, pkg.main),
		format: 'commonjs',
		name: 'cardation',
		banner: '/* eslint-disable */',
		// sourcemap: true,
	},
	plugins: [
		replace({
			NODE_ENV: JSON.stringify(
				process.env.NODE_ENV === 'production' ? 'production' : 'develop'
			),
		}),
		typescript({
			cacheDir: './.rts2_cache',
			compilerOptions: { module: 'ESNext' },
		}),
	],
}
