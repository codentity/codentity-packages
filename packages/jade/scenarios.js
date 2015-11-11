module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'jade': '*',
        'not-jade': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'jade',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'lib/file.jade.html',
      'lib/file.jade',
      'file.jade',
      'file.JADE'
    ]
  },
  output: [{
    src: 'file',
    filePath: 'lib/file.jade'
  }, {
    src: 'file',
    filePath: 'file.jade'
  }]
}];