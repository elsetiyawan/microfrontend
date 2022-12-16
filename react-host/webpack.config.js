const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index',
    cache: false,
    mode: 'development',
    resolve: {
        extensions: ['.jsx', '.js', '.css']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                type: 'javascript/auto',
                resolve: {
                    fullySpecified: false
                }
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react']
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(({
            template: './public/index.html',
            manifest: "./public/manifest.json",
            favicon: './public/favicon.ico'
        }))
    ]
}