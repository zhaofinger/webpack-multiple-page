/**
 * @Author: zhaoFinger
 * @Date: 2017-10-14 13:40:10
 * @Last Modified by: zhaoFinger
 * @Last Modified time: 2017-10-28 17:13:56
 */
/**
 * @Author: zhaoFinger
 * @Date: 2017-10-14 13:32:11
 * @Last Modified by: zhaoFinger
 * @Last Modified time: 2017-10-14 13:40:08
 */

const fs = require('fs');
const inquirer = require('inquirer');
const webpack = require('webpack');

const webpackConfig = require('./webpack.config.prod');

inquirer.prompt([
	{
		type: 'list',
		name: 'PLATFORM',
		message: 'Please choose build platform:',
		choices: ['H5', 'IOS', 'ANDROID']
	},
	{
		type: 'list',
		name: 'ENV',
		message: 'Please choose build environment:',
		choices: ['DEV', 'PROD']
	}
]).then(answers => {
	fs.writeFileSync('./build/run-env.js', `module.exports = ${JSON.stringify(answers)};`, error => {
		if (error) {
			console.log(error);
		} else {
			console.log('env write ok!');
		}
	});
	webpack(webpackConfig, (err, stats) => {
		if (err) {
			console.log(err);
			return;
		}
		process.stdout.write(stats.toString({
			colors: true,
			modules: false,
			children: false,
			chunks: false,
			chunkModules: false
		}) + '\n');
	});
});