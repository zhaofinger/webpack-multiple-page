/**
 * @Author: zhaoFinger
 * @Date: 2017-10-13 16:21:20
 * @Last Modified by: zhaoFinger
 * @Last Modified time: 2017-10-28 15:27:52
 */

const fs = require('fs');
const inquirer = require('inquirer');

const generateFile = (fileName, title) => {
	let html =
		`<!DOCTYPE html>
<html>
	<head>
		<meta charset='UTF-8'>
		<title>${title}</title>
		<meta name='viewport' content='width=750, user-scalable=no, target-densitydpi=device-dpi'>
	</head>
	<body>
		<div class='header'>
		</div>
		<div class='content'>
		</div>
		<script src='//cdn.bootcss.com/zepto/1.2.0/zepto.min.js'></script>
		<script src='//res.wx.qq.com/open/js/jweixin-1.2.0.js'></script>
	</body>
</html>
`;

	let css =
		`@import 'base.scss';
@import 'var.scss';
`;

	let js = `require('../../css/${fileName}.scss');`;

	fs.writeFile(`./src/html/${fileName}.html`, html, err => {
		if (err) {
			console.log(err);
		} else {
			console.log(`Generate ${fileName}.html file ok!`);
		}
	});

	fs.writeFile(`./src/css/${fileName}.scss`, css, err => {
		if (err) {
			console.log(err);
		} else {
			console.log(`Generate ${fileName}.css file ok!`);
		}
	});

	fs.writeFile(`./src/js/app/${fileName}.js`, js, err => {
		if (err) {
			console.log(err);
		} else {
			console.log(`Generate ${fileName}.js file ok!`);
		}
	});
};

inquirer.prompt([
	{
		type: 'input',
		name: 'fileName',
		message: 'Please input page file name:',
		default: 'index'
	},
	{
		type: 'input',
		name: 'title',
		message: 'Please input page title:',
		default: '赵的拇指'
	}
]).then(answers => {
	generateFile(answers.fileName, answers.title);
});
