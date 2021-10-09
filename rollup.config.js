import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

const production = !process.env.ROLLUP_WATCH;
const legacy = !!process.env.LEGACY;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default {
	input: 'src/main.ts',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		svelte({
			preprocess: sveltePreprocess({ sourceMap: !production }),
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production
			}
		}),
		legacy && babel({
			extensions: ['.ts, .js', '.mjs', '.html', '.svelte'],
			runtimeHelpers: true,
			exclude: ['node_modules/@babel/**', 'node_modules/core-js/**'], // <= /!\ NOT 'node_mobules/**'
			presets: [
				['@babel/preset-env', {
					// adapter to ensure IE 11 support
					targets: '> 0.25%, not dead, IE 11',
					useBuiltIns: 'usage'
				}]
			],
			plugins: [
				'@babel/plugin-syntax-dynamic-import',
				'@babel/plugin-syntax-import-meta',
				['@babel/plugin-transform-runtime', {
					useESModules: true
				}]
			]
		}),
		css({ output: 'bundle.css' }),
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
		typescript({
			sourceMap: !production,
			inlineSources: !production
		}),

		!production && serve(),
		!production && livereload('public'),
		production && terser()
	],
	watch: {
		clearScreen: false
	},
	onwarn: function (warning, superOnWarn) {
		/*
         * skip certain warnings
         * https://github.com/openlayers/openlayers/issues/10245
         */
		if (warning.code === 'THIS_IS_UNDEFINED') {
			return;
		}
		superOnWarn(warning);
	}
};
