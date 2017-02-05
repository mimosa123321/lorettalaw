const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
    entry: ['./src/AppRenderer.js'],
    output: {
        path: './build',
        filename: 'app.bundle.js'
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
        })
    ],

    module: {
        loaders:[
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: {presets: ['es2015']} },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'], exclude: /node_modules/ },
            { test: /\.jpg$|\.gif$|\.png$|\.mp4$|\.svg$|\.woff$|\.ttf$|\.eot$|\.ico$/, loader: 'file?name=[path][name].[ext]', exclude: /node_modules/ }
        ]
    }
};
