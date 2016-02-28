module.exports = [{
  description: 'when found in file paths',
  input: {
    filePaths: [
      'config/appveyor.yml',
      'appveyor.yml'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: 'appveyor.yml'
  }]
}];
