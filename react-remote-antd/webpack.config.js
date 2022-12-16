const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index',
    cache: false,
    mode: 'development',
    resolve: {
        extensions: ['.jsx', '.js', '.css']
    },
    devServer: {
        port: 8083,
        historyApiFallback: true // so yu can go to direct url
    },
    module: {
        rules: [
            //loader for jsx
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
            manifest: './public/manifest.json'
        })
    ]
}