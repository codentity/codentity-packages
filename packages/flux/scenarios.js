module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'flux': '*',
        'not-flux': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'flux',
    dependencyGroup: 'dependencies'
  }]
}];
