module.exports = [{
  description: 'when found in file paths',
  input: {
    filePaths: [
      '.meteor',
      '.meteor/somefile'
    ]
  },
  output: [{
    src: 'filePaths',
    filePath: '.meteor/somefile'
  }]
}];
