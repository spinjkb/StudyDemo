var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/js/app/index.js',
    output: {
        filename: "merge.js",
        path: path.resolve(__dirname, './dist/')
        
    },
      resolve: {
        alias:{
            jquery: '../lib/jquery-3.1.1.min',
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jquery": 'jquery'
        })
    ]
    
    
}