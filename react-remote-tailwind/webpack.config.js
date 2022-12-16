const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require("./package.json").dependencies;
const depsDev = require("./package.json").devDependencies;

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
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'reactModuleTailwind',
            filename: 'remoteEntry.js',
            exposes: {
                './ReactRemoteApp': './src/pages/Home'
            },
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                tailwindcss: {
                    singleton: true,
                    requiredVersion: depsDev.tailwindcss
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