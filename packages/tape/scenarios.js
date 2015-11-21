module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'tape': '*',
        'not-tape': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'tape',
    dependencyGroup: 'dependencies'
  }]
}];
