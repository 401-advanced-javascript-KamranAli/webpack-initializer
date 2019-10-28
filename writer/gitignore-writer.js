const fs = require('fs');
const { write } = require('./writer');

const gitIgnoreWriter = path => {
  const newGitIgnore = fs.readFileSync('template/.gitignore', 'utf8');
  write(path, newGitIgnore);
};

module.exports = gitIgnoreWriter;