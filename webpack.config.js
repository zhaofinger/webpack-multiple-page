/**
 * @Author: zhaoFinger
 * @Date: 2017-10-14 13:39:45
 * @Last Modified by: zhaoFinger
 * @Last Modified time: 2017-10-28 15:25:53
 */
const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

// 根据环境使用相应文件
module.exports = require(`./build/webpack.config.${env}.js`);