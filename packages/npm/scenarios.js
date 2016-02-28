module.exports = [{
  description: 'when found in file paths',
  input: {
    filePaths: [
      'package.json',
      'not-dir/package.json',
      'PACKAGE.json'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: 'package.json'
  }]
}];
