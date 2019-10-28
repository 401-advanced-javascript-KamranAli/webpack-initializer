const fs = require('fs');
const { writeJson } = require('./writer');

const babelWriter = path => {
  const newBabel = fs.readFileSync('template/.babelrc', 'utf8');
  writeJson(path, newBabel);
};

babelWriter('./babel.txt');

module.exports = babelWriter;