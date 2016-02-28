module.exports = [{
  description: 'when found in file paths',
  input: {
    filePaths: [
      'config/shippable.yml',
      'shippable.yml'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: 'shippable.yml'
  }]
}];
