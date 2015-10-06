module.exports = [{
  description: 'when found in file paths',
  input: {
    filePaths: [
      'nested/.gitignore',
      '.gitignore',
      '.gitignore/etc'
    ]
  },
  output: [{
    src: 'file',
    filePath: '.gitignore'
  }]
}];
