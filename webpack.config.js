const webpack = require('webpack')
//css
const ExtractTextPlugin = require('extract-text-webpack-plugin')

//module.exports faz com que o conteúdo passa ser visível fora do modulo 
module.exports = {
    //modulo de entrada para o projeto
    //entry: './ExerciciosWebPack/ex/index.jsx',
    entry: './ex/index.jsx', 
    //onde gerará a saída .js
    output: {
        parh: __dirname + '/public',
        filename: './bundle.js'
    },
    //Servidor web 
    devServer:{ 
        port: 8080,
        contentBase: './public' //pasta do webpack
    },
    //plugin
    plugins:[
        new ExtractTextPlugin('app.css')
    ],
    //modulos
    module: {
        loaders: [{
            test: /.jsx?$/, //expressão para sabe qual arquivo jsx própria do react
            loader: 'babel-loader', //loader para o babel
            exclude: /node_modules/, // para babel carregar somento o js da aplicação
            query:{
                presets: ['es2015', 'react'],
                plugins:['transform-object-rest-spread']
            }
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader","css-loader")

        }]
    }
}
