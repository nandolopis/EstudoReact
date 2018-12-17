const webpack = require('webpack')

//module.exports faz com que o conteúdo passa ser visível fora do modulo 
module.exports = {
    //modulo de entrada para o projeto
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
    //modulos
    module: {
        loaders: [{
            test: /.jsx?$/, //expressão para sabe qual arquivo jsx própria do react
            loader: 'babel-loader', //loader para o babel
            exclude: /node_modules/, // para babel carregar somento o js da aplicação
            query:{
                presets: ['es2015', 'react']
            }
        }]
    }
}
