//http://jamesknelson.com/build-es6-and-less-with-autorefresh-in-only-26-lines-of-configuration/
//https://webpack.github.io/docs/cli.html

var webpack = require('webpack')
var path = require('path')

module.exports = {
    debug: true,
    entry: {
        main: './js/main.js'
    },
    output: {
        path: path.join(__dirname, 'public/'),
        name: 'main.js'
    },
    modules: {
        loaders: [{
            test: /\.es6.js$/,
            loader: "babel-loader"
        },
        {
            test: /\.scss$/,
            loader: "css-loader!sass-loader"
        },

        ]
    }

}
