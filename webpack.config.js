const path = require('path');
const babelOptions = require('./babel.config');

module.exports = {
    context: path.resolve(__dirname, './decorator'),
    entry: {
        app: './class.ts',
    },
    plugins: [],
    output: {
        path: path.resolve(__dirname, './assets'),
        filename: '[name].bundle.js',
        publicPath: '/assets',
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                test: /(\.(t|j)s|.(t|j)sx$)/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelOptions
                    },
                ],
            },
        ],
    },
};
