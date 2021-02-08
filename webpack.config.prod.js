const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new MiniCSSExtractPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCSSExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                }, {
                    loader: 'postcss-loader',
                    ident: 'postcss',
                    options: {
                        postcssOptions: {
                            plugins: [
                                require('autoprefixer'),
                                require('tailwindcss')
                            ]
                        }
                    }
                }
            ]
        }]
    }
}