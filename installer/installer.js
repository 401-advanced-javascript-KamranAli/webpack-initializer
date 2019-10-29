module.exports = function installer(path, packages, dev) {
  console.log('Installing...');
  const { execSync } = require('child_process');
  let d;
  if(dev) {
    d = '-D';
  } else {
    d = '';
  }

  execSync(`npm i ${d} ${packages.json(' ')}`, {
    cwd: path,
    stdio: 'inherit'
  });
  console.log('Dependencies Installed!');
};