module.exports = [{
  description: 'when found in file paths',
  input: {
    filePaths: [
      'config/shippable.yml',
      'shippable.yml'
    ]
  },
  output: [{
    src: 'file',
    filePath: 'shippable.yml'
  }]
}];
