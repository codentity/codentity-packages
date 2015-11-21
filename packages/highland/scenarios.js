module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'highland': '*',
        'not-highland': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'highland',
    dependencyGroup: 'dependencies'
  }]
}];
