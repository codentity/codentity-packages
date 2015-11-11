module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'loopback': '*',
        'not-loopback': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'loopback',
    dependencyGroup: 'dependencies'
  }]
}];
