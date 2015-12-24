var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports= {
        entry: [
            './src/Main.jsx'
        ],
        output: {
            filename: 'bundle.js',
            path: __dirname + '/dist'
        },
        plugins: [new webpack.NoErrorsPlugin(), new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                hash: false,
                filename: 'index.html',
                inject: 'body',
                minify: {
                    collapseWhitespace: true
                }
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
                },{
                    test: /\.css$/,
                    loader: 'style!css'
                }]
        }
    };
