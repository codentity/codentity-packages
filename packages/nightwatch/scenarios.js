module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'nightwatch': '*',
        'not-nightwatch': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'nightwatch',
    dependencyGroup: 'dependencies'
  }]
}];
