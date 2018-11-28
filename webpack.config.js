const webpack = require('webpack')

module.exports = {
    entry: './ex/index.jsx',
    output: {
        parh: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer:{ 
        port: 8080,
        contentBase: './public' //pasta do webpack
    },
    module: {
        loaders: [{
            test: /.jsx?$/, //expressão para sabe qual arquivo jsx própria do react
            loader: 'babel-loader',
            exclude: /node_modules/,
            query:{
                presets: ['es2015', 'react']
            }
        }]
    }
}
