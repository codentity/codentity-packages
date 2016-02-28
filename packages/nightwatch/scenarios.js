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
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'nightwatch',
    dependencyGroup: 'dependencies'
  }]
}];
