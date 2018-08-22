let path = require('path'),
    miniCss = require('mini-css-extract-plugin')

let conf = {
    mode: 'development',
    entry: "./App/src/js/index.js",
    output: {
        path: path.resolve(__dirname, "./App/dist"),
        filename: "main.js",
        publicPath: "./"
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: [
                    'style-loader',
                    miniCss.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    miniCss.loader,
                    'css-loader'
                ]
            },

            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'file-loader?name=./fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new miniCss({
            filename: 'style.css'
        })
    ]
}

module.exports = conf