module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'colors': '*',
        'not-colors': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'colors',
    dependencyGroup: 'dependencies'
  }]
}];
