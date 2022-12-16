// host/webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index",
    mode: "development",
    devServer: {
        port: 9000,
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
    target: "web",
};
