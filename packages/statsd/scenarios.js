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
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'statsd',
    dependencyGroup: 'dependencies'
  }]
}];
