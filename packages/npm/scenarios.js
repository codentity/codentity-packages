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
    src: 'filePaths',
    filePath: 'package.json'
  }]
}];
