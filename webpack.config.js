const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports={
    entry:"./src/app.js",
    output:{
        path:path.resolve(__dirname,"dist"),//必须是绝对路径,__dirname代表当前文件夹webpack
        filename:"app.js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:'src/index.html'
        })
    ],
    module:{
        rules:[{
            test:/\.js/,
            use:[{
                loader:"babel-loader",
                options: {
                    presets:['react']
                }
            }]
        }]
    }
};