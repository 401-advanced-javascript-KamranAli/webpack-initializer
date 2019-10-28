const fs = require('fs').promises;

const write = str => {
  return fs.writeFile(str, 'utf8');
};

const writeJson = path => {
  return 
};

module.exports = write;
