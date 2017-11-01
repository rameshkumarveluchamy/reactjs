const webpack = require('webpack')
const path = require('path');

module.exports = {
    entry: './src/hello.js',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                  presets: ['react'],
                }
            }
        ]
    },
    output:{
        path: __dirname + "/src/",
        filename: "hello.min.js"
    }
};