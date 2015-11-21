module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'statsd': '*',
        'not-statsd': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'statsd',
    dependencyGroup: 'dependencies'
  }]
}];
