const webpack = require('webpack');
const path = require('path');

const config = {
	entry: './src/quill-emoji.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'quill-emoji.js'
	},
	module: {
	    loaders: [
	      { test: /\.json$/, loaders: ['json'], },
	      { test: /\.js$/,  loader: 'babel-loader', exclude: /node_modules/ }
	    ]
  	},
};

module.exports = config;