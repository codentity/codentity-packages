module.exports = [{
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'firebase': '*',
        'not-firebase': '*'
      }
    }
  },
  output: [{
    plugin: 'bower',
    src: 'bowerJson',
    version: '*',
    packageName: 'firebase',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'firebase': '*',
        'not-firebase': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'firebase',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'config/firebase.json',
      'firebase.js',
      'firebase.json'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: 'firebase.json'
  }]
}];
