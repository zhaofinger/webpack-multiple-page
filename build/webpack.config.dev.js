/**
 * @Author: zhaoFinger
 * @Date: 2017-10-14 13:40:01
 * @Last Modified by:   zhaoFinger
 * @Last Modified time: 2017-10-14 13:40:01
 */
const webpackBase = require('./webpack.config.base');
const webpackMerge = require('webpack-merge');
const config = require('./config');

module.exports = webpackMerge(webpackBase, {
	devServer: {
		contentBase: config.devServerOutputPath,
		overlay: {
			errors: true,
			warnings: true
		}
	}
});