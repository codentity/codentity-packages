module.exports = [{
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'chai': '*',
        'not-chai': '*'
      }
    }
  },
  output: [{
    src: 'bowerJson',
    version: '*',
    packageName: 'chai',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'chai': '*',
        'karma-chai': '*',
        'not-chai': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'chai',
    dependencyGroup: 'dependencies'
  }, {
    src: 'packageJson',
    version: '*',
    packageName: 'karma-chai',
    dependencyGroup: 'dependencies'
  }]
}];
