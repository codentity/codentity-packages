module.exports = [{
  description: 'when found in file paths',
  input: {
    filePaths: [
      'config/appveyor.yml',
      'appveyor.yml'
    ]
  },
  output: [{
    src: 'file',
    filePath: 'appveyor.yml'
  }]
}];
