/**
 * @Author: zhaoFinger
 * @Date: 2017-10-14 13:40:19
 * @Last Modified by:   zhaoFinger
 * @Last Modified time: 2017-10-14 13:40:19
 */
const path = require('path');
const fs = require('fs');

module.exports = {
	getFileNameList(path) {
		let fileList = [];
		let dirList = fs.readdirSync(path);
		dirList.forEach(item => {
			if (item.indexOf('html') > -1) {
				fileList.push(item.split('.')[0]);
			}
		});
		return fileList;
	}
};