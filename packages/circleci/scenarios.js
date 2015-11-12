module.exports = [{
  description: 'when found in file paths',
  input: {
    filePaths: [
      'circle.yml',
      '.circle.yml',
      'nested/circle.yml'
    ]
  },
  output: [{
    src: 'filePaths',
    filePath: 'circle.yml'
  }]
}];
