module.exports = [{
  description: 'when found in file paths',
  input: {
    filePaths: [
      'config/Procfile',
      'Procfile',
      'Procfile.json'
    ]
  },
  output: [{
    src: 'file',
    filePath: 'Procfile'
  }]
}];