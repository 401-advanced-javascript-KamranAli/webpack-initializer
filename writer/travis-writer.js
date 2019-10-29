const fs = require('fs');
const { write } = require('./writer');

const travisWriter = path => {
  const newTravis = fs.readFileSync('template/.travis.yml', 'utf8');
  write(path, newTravis);
};

module.exports = travisWriter;