const { execSync } = require('child_process');

const installer = (path, arr, dev) => {
  arr.forEach(element => {
    execSync('npm i', {
      cwd: path,
      stdio: 'inherit'
    }, element);
  });
};

module.exports = installer;