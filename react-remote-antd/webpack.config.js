const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require("./package.json").dependencies;

module.exports = {
    entry: './src/index',
    cache: false,
    mode: 'development',
    resolve: {
        extensions: ['.jsx', '.js', '.css']
    },
    devServer: {
        port: 8082,
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
        new ModuleFederationPlugin({
            name: 'reactRemoteAntd',
            filename: 'remoteEntry.js',
            exposes: {
                './Home': './src/pages/Home'
            },
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                antd: {
                    singleton: true,
                    requiredVersion: deps.antd
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"],
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
            manifest: './public/manifest.json'
        })
    ]
}