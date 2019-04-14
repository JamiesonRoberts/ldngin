const mix = require('laravel-mix');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminJpegoptim = require('imagemin-jpegoptim');
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

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .version();

mix.webpackConfig({
    plugins: [
        new CopyWebpackPlugin([
            {
                context: 'resources/img',
                from: '**/*',
                to: 'img',
            },
        ]),
        new ImageminPlugin({
            disable: process.env.NODE_ENV !== 'production',
            test: /\.(jpe?g|png|gif|svg)$/i,
            gifsicle: {
                interlaced: true,
            },
            optipng: {
                optimizationLevel: 5,
            },
            svgo: {
                plugins: [
                    {
                        cleanupIDs: false,
                        removeEmptyAttrs: false,
                        removeViewBox: false,
                    },
                ],
            },
            jpegtran: null,
            plugins: [
                ImageminJpegoptim({
                    max: 85,
                    progressive: true,
                }),
            ],
        }),
    ],
});
