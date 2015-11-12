module.exports = [{
  description: 'when found in file paths',
  input: {
    filePaths: [
      'config/travis.yml',
      'config/.travis.yml',
      'travis.yml',
      '.travis.yml'
    ]
  },
  output: [{
    src: 'filePaths',
    filePath: '.travis.yml'
  }]
}];
