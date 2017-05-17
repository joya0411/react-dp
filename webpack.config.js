const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //自动生成 html
const autoprefixer = require('autoprefixer');   //postcss中的用法
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //生成CSS文件
// const OpenBrowserPlugin = require('open-browser-webpack-plugin'); //打开浏览器



const isDev = process.env.NODE_ENV == 'dev' ? true : false;

console.log('==============================');
console.log('NODE_ENV:'+ process.env.NODE_ENV );
console.log('==============================');


module.exports = {
    entry:{
        app:path.resolve(__dirname, 'app/index.jsx'),
        // 将 第三方依赖 单独打包
        common: [
            'react', 
            'react-dom'
        ]
    },
    output:{
        path: __dirname + '/dist',
        filename:'js/[name].js',
        publicPath: ''   //上线以后服务器的路径
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    devServer: {
            contentBase: path.join(__dirname, 'app'),
            compress: true,//压缩
            port: 9000,
            inline:true,////实时刷新
            hot:true//使用热加载插件 HotModuleReplacementPlugin

    },
    devtool:isDev ? 'source-map' : false,
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'app'),
                exclude: path.resolve(__dirname, 'node_modules'),
                use:{
                    loader:'babel-loader',
                    options:{
                        presets: ['react', 'es2015'],
                        plugins:['react-html-attrs']
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                // 分离CSS文件
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?sourceMap','postcss-loader']
                })
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                // 分离CSS文件
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?sourceMap','postcss-loader', 'sass-loader?sourceMap']
                })
            },
            {
                test:/\.(png|jpg|jpeg|gif|bmp)$/i,
                exclude: /node_modules/,
                use:{
                    loader: 'url-loader',
                    options: {
                        limit: 10 ,
                        name: '[name]-[hash:5].[ext]',
                        outputPath:'images/',
                        publicPath: '../'
                    }
                }
            },
            {
                test:/\.(woff|woff2|svg|ttf|eot)($|\?)/i,
                exclude: /node_modules/,
                use:{
                    loader: 'url-loader',
                    options: {
                        limit: 10,
                        name: 'fonts/[name]-[hash:5].[ext]',
                        publicPath: '../'
                    }
                }
            }
        ]
    },
    plugins:[
        // webpack 内置的 banner-plugin
        // new webpack.BannerPlugin("Copyright by joya"),
        //热加载
        new webpack.HotModuleReplacementPlugin(), 
        // html 模板插件
        new HtmlWebpackPlugin({
            title:'It is index',
            filename:'index.html',
            template:'./app/index.tmpl.html',
            inject:true  
        }),
        // 提供公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        //分离CSS
        new ExtractTextPlugin({
            filename:'css/[name].css',
        }),
        //postcss
        new webpack.LoaderOptionsPlugin({
            options: { 
                postcss: [ autoprefixer ] 
            } 
        }),
        //打开浏览器
        // new OpenBrowserPlugin({ url: 'http://localhost:9000' }),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
          __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        }),

    /*
        // 有些JS库有自己的依赖树，并且这些库可能有交叉的依赖，DedupePlugin可以找出他们并删除重复的依赖。
        new webpack.optimize.DedupePlugin(),
        // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        new webpack.optimize.OccurrenceOrderPlugin(),
        //压缩JS
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            }
        })
    */





    ]
};