const fs = require('fs');
const { write } = require('./writer');

const newIndexHtml = path => {
  const newHtml = fs.readFileSync('template/src/index.html', 'utf8');
  write(path, newHtml);
};
const newIndexJs = path => {
  const newJs = fs.readFileSync('template/src/index.js', 'utf8');
  write(path, newJs);
};

module.exports = {
  newIndexHtml,
  newIndexJs
};

