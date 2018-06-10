const path = require ('path');
module.exports = {
    entry: './source/store/index.jsx',
    output: {
       path:  __dirname + '/dist',
       filename: 'bundle.js'
    },
    module : {
        rules : [
            {
                test: /\.jsx?$/,
                use:'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve : {
        extensions : ['.js', '.json', '.jsx', '.css']
    },
    devtool : 'source-map'
}
