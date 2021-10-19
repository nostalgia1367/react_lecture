const path = require('path');
const webpack = require('webpack');


/**
 * 
 * devtool options
 *  https://webpack.js.org/configuration/devtool/
 *  https://perfectacle.github.io/2016/11/14/Webpack-devtool-option-Performance/
 * 
 * 
 */

module.exports = {
    name: 'webpack-gugudan',
    mode: 'development',    //개발:development, 배포:production
    devtool: 'eval',        //개발:eval, 배포:hidden-source-map'
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        //app: ['./client.jsx', 'WordRelay.jsx'],
        app: ['./client'], 
    },  // 입력

    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env',{
                        targets: {
                            browsers: ['> 1% in KR'],   //browserslist
                        },
                        debug: true,
                    }],
                    '@babel/preset-react'
                ],
                plugins : ['@babel/plugin-proposal-class-properties'],
            },
        }],
    },
    
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),   //module(Loader)에 전체적으로 debug : true 속성을 적용
    ],
    

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
    },
}