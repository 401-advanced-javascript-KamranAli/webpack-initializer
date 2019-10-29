const { write, writeJson } = require('../writer/writer');
const fs = require('fs');

fs.writeFileSync = jest.fn();

describe('writer tests', () => {
  it('writes a file with a path and string', () => {
    write('test', './data_test/test.txt');
    expect(fs.writeFileSync.mock.calls[0][0]).toBe('./data_test/test.txt');
    expect(fs.writeFileSync.mock.calls[0][1]).toBe('test');
  });
  it('writes a file with json string', () => {
    writeJson({ name: 'Ryan Mehta' }, './data_test/test_json.txt');
    expect(fs.writeFileSync.mock.calls[1][0]).toBe('./data_test/test_json.txt.txt');
    expect(fs.writeFileSync.mock.calls[1][1]).toBe(JSON.stringify({ name: 'Ryan Mehta' }, null, 2));
  });
});