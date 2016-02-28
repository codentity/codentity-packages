module.exports = [{
  description: 'when found in file paths',
  input: {
    filePaths: [
      '.meteor',
      '.meteor/somefile'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: '.meteor/somefile'
  }]
}];
