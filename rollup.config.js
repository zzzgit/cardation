/* eslint-env node */
const path = require("path")
const pkg = require("./package.json")
const replace = require("@rollup/plugin-replace")
const typescript = require("@rollup/plugin-typescript")

module.exports = {
	input: path.resolve(__dirname, "./src/index.ts"),
	output: {
		file: path.resolve(__dirname, pkg.main),
		format: "commonjs",
		name: "cardation",
		banner: "/* eslint-disable */",
		// sourcemap: true,
	},
	plugins: [
		replace({
			NODE_ENV: JSON.stringify(process.env.NODE_ENV === "production" ? "production" : "develop"),
		}),
		typescript({
			cacheDir: "./.rts2_cache",
			compilerOptions: {"module": "ESNext"},
		}),
	],

}
