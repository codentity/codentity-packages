module.exports = [{
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'ionic': '*',
        'not-ionic': '*'
      }
    }
  },
  output: [{
    plugin: 'bower',
    src: 'bowerJson',
    version: '*',
    packageName: 'ionic',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'ionic': '*',
        'not-ionic': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'ionic',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'config/ionic.project',
      'ionic.project',
      'not-ionic.project'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: 'ionic.project'
  }]
}];
