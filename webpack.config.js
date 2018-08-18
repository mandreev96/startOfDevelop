let path = require('path'),
    extract = require('extract-text-webpack-plugin')

let conf = {
    mode: 'development',
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "./src/dist"),
        filename: "main.js",
        publicPath: "dist/"
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: extract.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.css$/,
                use: extract.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            }
        ]
    },
    plugins: [
        new extract({
            filename: 'style.css'
        })
    ]
}

module.exports = conf