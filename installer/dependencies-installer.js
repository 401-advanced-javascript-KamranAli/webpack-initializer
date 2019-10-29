const installer = require('./installer');

module.exports = function dependsInstall(path) {
  const depends = [
    'react',
    'react-dom'
  ];

  installer(path, depends, false);
};