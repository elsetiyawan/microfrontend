const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    entry: './src/index',
    cache: false,
    mode: 'development',
    resolve: {
        extensions: ['.jsx', '.js', '.css']
    },
    devServer: {
        port: 8080,
        historyApiFallback: true
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
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        // new ModuleFederationPlugin({
        //     name: 'host',
        //     filename: 'remoteEntry.js',
        //     remotes: {
        //         remote: 'remote@http://localhost:8082/remoteEntry.js'
        //     }
        // }),
        new ModuleFederationPlugin({
            name: 'host',
            filename: 'remoteEntry.js',
            remotes: {
                remote: 'remote@http://localhost:8081/remoteEntry.js',
            },
            exposes: {},
            shared: {},
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            manifest: './public/manifest.json',
            favicon: './public/favicon.ico'
        })
    ]
}