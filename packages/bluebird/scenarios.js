module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'bluebird': '*',
        'not-bluebird': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'bluebird',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'bluebird': '*',
        'not-bluebird': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'bluebird',
    dependencyGroup: 'dependencies'
  }]
}];
