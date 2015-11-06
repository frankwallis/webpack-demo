var path = require('path');
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'App'),
    entry: {
        client: [ 'es5-shim', 'es5-shim/es5-sham', 'html5shiv', './client.tsx' ],
        server: './server.ts'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.ts', '.tsx', '.webpack.js', '.web.js', '.js']
    },
    output: {
        path: path.join(__dirname, 'Built'),
        filename: 'bundle.[name].js'
    },
    plugins: [
      new WebpackNotifierPlugin(),
      new webpack.DefinePlugin({
          "process.env": {
              "__BROWSER__": true
          }
      }),
      new ExtractTextPlugin('bundle.[name].css', { allChunks: true }),
    ],
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts", exclude: /node_modules/ },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss') },
            { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.eot$/, loader: "url" },
            { test: /\.html$/, loader: "html" },
            { test: require.resolve('react'), loader: 'expose?React' },
            { test: /server.ts$/, loader: 'expose?Components!ts' },
            { test: /client.tsx$/, loader: 'expose?Components!ts' }
        ]
    }
    
};
