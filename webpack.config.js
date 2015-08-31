//http://jamesknelson.com/build-es6-and-less-with-autorefresh-in-only-26-lines-of-configuration/
//https://webpack.github.io/docs/cli.html

var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: [
        'babel/polyfill',
        './src/js/main',
        './src/css/main',
        'webpack-dev-server/client?http://localhost:8080'
    ],
    output: {
        path: '/',
        publicPath: '/',
        filename: 'main.min.js'
    },
    devtool: 'source-map',
    modules: {
        loaders: [{
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader'
            }, {
                test: /\.scss$/,
                loader: "style!css!autoprefixer!sass"
            },

        ]
    },
    debug: true,
    devServer: {
       contentBase: "./src"
     }
}
