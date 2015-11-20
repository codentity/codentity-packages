module.exports = [{
  description: 'when found in file paths',
  input: {
    filePaths: [
      'config/Dockerfile',
      'DOCKERFILE',
      'Dockerfile'
    ]
  },
  output: [{
    src: 'filePaths',
    filePath: 'config/Dockerfile'
  }, {
    src: 'filePaths',
    filePath: 'Dockerfile'
  }]
}];
