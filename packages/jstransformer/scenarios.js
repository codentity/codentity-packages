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
    src: 'packageJson',
    version: '*',
    packageName: 'jstransformer',
    dependencyGroup: 'dependencies'
  }]
}];
