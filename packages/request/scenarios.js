module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'request': '*',
        'not-request': '*',
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'request',
    dependencyGroup: 'dependencies'
  }]
}];
