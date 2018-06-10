var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    entry: {
        app: './lib/serverevent.js',
        client: './lib/client.js'
    },
    target: 'node',
    externals: nodeModules,
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs2'
    }
};