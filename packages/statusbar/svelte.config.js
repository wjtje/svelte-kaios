const sveltePreprocess = require('svelte-preprocess')

const preprocessOptions = {
	sourceMap: true,
	defaults: {
		script: "typescript",
		style: "scss",
	},
	postcss: {
		plugins: [require('autoprefixer')()]
	}
}

module.exports = {
	preprocess: sveltePreprocess(preprocessOptions),
	preprocessOptions,
}