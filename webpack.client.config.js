var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

module.exports = {
    entry: {
        client: './lib/client.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
    }
};