module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'istanbul': '*',
        'not-istanbul': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'istanbul',
    dependencyGroup: 'dependencies'
  }]
}];
