var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
        devtool: 'eval-source-map',
        entry: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080',
            './src/Main.jsx'
        ],
        output: {
            filename: 'bundle.js',
            path: __dirname + '/dist'
        },
        plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin(),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                hash: false,
                filename: 'index.html',
                inject: 'body'
            })],
        resolve: {
            extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx", ".less"]
        },
        module: {
            loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0'
            },
                {
                    test: /\.less$/,
                    exclude: /node_modules/,
                    loader: 'style!css!less'
                },
                {
                    test: /\.css$/,
                    loader: 'style!css'
                }]
        }
    };

