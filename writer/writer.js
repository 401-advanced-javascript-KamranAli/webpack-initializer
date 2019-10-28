const fs = require('fs');

const write = (path, str) => {
  fs.writeFileSync(path, str);
};

const writeJson = (path, obj) => {
  const json = JSON.stringify(obj);
  fs.writeFileSync(path, json);
  console.log(path);
};

module.exports = write, writeJson;
