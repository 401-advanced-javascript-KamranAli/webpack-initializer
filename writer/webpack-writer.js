const fs = require('fs');
const { writeJson } = require('./writer');

const webpackWriter = path => {
  const newWebpack = fs.readFileSync('template/webpack.config.js');
  writeJson(path, newWebpack);
};

webpackWriter('./pack.txt');

module.exports = webpackWriter;