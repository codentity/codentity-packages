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
    plugin: 'file',
    src: 'filePaths',
    filePath: 'config/Dockerfile'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'Dockerfile'
  }]
}];
