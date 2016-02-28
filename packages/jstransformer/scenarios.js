module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'jstransformer': '*',
        'not-jstransformer': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'jstransformer',
    dependencyGroup: 'dependencies'
  }]
}];
