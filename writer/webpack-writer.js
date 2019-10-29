const fs = require('fs');
const { write } = require('./writer');

const webpackWriter = path => {
  const newWebpack = fs.readFileSync('template/webpack.config.js');
  write(path, newWebpack);
};

module.exports = webpackWriter;