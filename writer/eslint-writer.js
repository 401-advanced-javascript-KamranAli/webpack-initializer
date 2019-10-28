const fs = require('fs');
const { writeJson } = require('./writer');

const eslintWriter = path => {
  const newLint = fs.readFileSync('template/.eslintrc', 'utf8');
  writeJson(path, newLint);
};

module.exports = eslintWriter;