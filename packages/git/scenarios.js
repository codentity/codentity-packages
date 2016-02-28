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
    plugin: 'file',
    src: 'filePaths',
    filePath: '.gitignore'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: '.gitattributes'
  }]
}];
