var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    context: path.join(__dirname, 'App'),
    entry: './app.ts',
    devtool: 'source-map',
    // Currently we need to add '.ts' to resolve.extensions array.
    resolve: {
        extensions: ['', '.ts', '.tsx', '.webpack.js', '.web.js', '.js']
    },
    output: {
        path: path.join(__dirname, 'Built'),
        filename: '[name].bundle.js'
    },
    plugins: [
      new WebpackNotifierPlugin()
    ],
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: "babel", exclude: /node_modules/ },
            { test: /\.tsx?$/, loader: "ts", exclude: /node_modules/ },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.eot$/, loader: "url" },
            { test: /\.html$/, loader: "html" }
        ]
    }
    
};

//debug: true,
//    devtool: 'cheap-module-eval-source-map',
