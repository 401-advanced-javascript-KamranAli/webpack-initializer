#!/usr/bin/env node

const fs = require('fs');
const folder = process.argv[process.argv.length - 1];

if(folder !== '.'){
  fs.mkdirSync(folder);
}
fs.mkdirSync(`${folder}/src`);

const packageJsonWriter = require('./writer/package-json-writer');
const eslintWriter = require('./writer/eslint-writer');
const babelWriter = require('./writer/babel-writer');
const webpackWriter = require('./writer/webpack-writer');
const gitignoreWriter = require('./writer/gitignore-writer');
const travisWriter = require('./writer/travis-writer');
const srcWriter = require('./writer/src-index-writer');
const devDependsWriter = require('./installer/dev-dependencies-installer');
const dependsWriter = require('./installer/dependencies-installer');

packageJsonWriter(folder);
eslintWriter(folder);
babelWriter(folder);
webpackWriter(folder);
gitignoreWriter(folder);
travisWriter(folder);
srcWriter(folder);
devDependsWriter(folder);
dependsWriter(folder);
