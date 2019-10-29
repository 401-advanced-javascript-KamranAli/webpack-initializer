const installer = require('../installer/installer');
const childProcess = require('child_process');

childProcess.execSync = jest.fn();

describe('installer for dependencies', () => {
  it('installs dependencies', () => {
    installer('./data/test.txt', ['pack1', 'pack2'], false);
    expect(childProcess.execSync.mock.calls[0][0]).toBe('npm i pack1 pack2');
  }); 
  it('installs dev dependencies', () => {
    installer('./data/test.txt', ['pack1', 'pack2'], false);
    expect(childProcess.execSync.mock.calls[1][0]).toBe('npm i -D pack1 pack2');
  }); 
});