module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'q': '*',
        'not-q': '*',
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'q',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'q': '*',
        'not-q': '*',
      }
    }
  },
  output: [{
    src: 'bowerJson',
    version: '*',
    packageName: 'q',
    dependencyGroup: 'dependencies'
  }]
}];
