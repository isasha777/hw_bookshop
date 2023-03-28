const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    mode: "development",
    output: {
        filename: 'super.js'
    },
    plugins: [new MiniCssExtractPlugin(),
    new TerserWebpackPlugin()],
    optimization:{
        minimize:true,
        minimizer:[new TerserWebpackPlugin()]
    },
    module:{
        rules:[
            {
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        esModule:true,
                      }
                    },'css-loader'],
                    test:/\.css$/
            }
        ]
    }
};