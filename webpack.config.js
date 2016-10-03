module.exports = {
    entry: './src/AppRenderer.js',
    output: {
        path: './build',
        filename: 'app.bundle.js'
    },

    module: {
        loaders:[
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: {presets: ['es2015']} }
        ]
    }
};
