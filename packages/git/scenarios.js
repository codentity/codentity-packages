module.exports = [{
  description: 'when found in file paths',
  input: {
    filePaths: [
      'nested/.gitignore',
      '.gitignore',
      '.gitattributes',
      '.gitsomethingelse',
      '.gitignore/etc'
    ]
  },
  output: [{
    src: 'file',
    filePath: '.gitignore'
  }, {
    src: 'file',
    filePath: '.gitattributes'
  }]
}];
