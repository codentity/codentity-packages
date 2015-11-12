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
    src: 'filePaths',
    filePath: '.gitignore'
  }, {
    src: 'filePaths',
    filePath: '.gitattributes'
  }]
}];
