const fs = require('fs');
const { writeJson } = require('./writer');

const packageJsonWrite = path => {
  const newPack = fs.readFileSync('template/package.json', 'utf8');
  writeJson(path, newPack);
};

module.exports = packageJsonWrite;