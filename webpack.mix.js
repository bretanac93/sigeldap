const { mix } = require('laravel-mix');
let LiveReloadPlugin = require('webpack-livereload-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
	plugins: [
		new LiveReloadPlugin()
	]
});

mix.js('dev/js/app.js', 'dist/js')
   .sass('dev/sass/app.scss', 'dist/css');