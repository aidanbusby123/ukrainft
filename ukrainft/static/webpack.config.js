const webpack = require('webpack');
const config = {
    entry:  __dirname + '/static/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
  
    module: {
        rules: [
            {
            test: /\.(js|jsx)?/,
                exclude: /node_modules/,
                use: 'babel-loader'     
            }        
        ]
    }
};
module.exports = config;