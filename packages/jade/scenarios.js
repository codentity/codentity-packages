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
    plugin: 'npm',
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
    plugin: 'file',
    src: 'filePaths',
    filePath: 'lib/file.jade'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'file.jade'
  }]
}];
