const { write } = require('./writer');

const javascript = `
import React from 'react';
import { render } from 'react-dom';
import App from './components/App;

render(
  <App />,
  document.getElementById('root')
);
`;

const HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>starter-code</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>`;

const srcIndexWriter = (jsPath, htmlPath) => {
  write(javascript, jsPath);
  write(HTML, htmlPath);
};

module.exports = srcIndexWriter;

