module.exports = [{
  description: 'when found in bower.json',
  input: {
    packageJson: {
      dependencies: {
        'passport': '*',
        'not-passport': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'passport',
    dependencyGroup: 'dependencies'
  }]
}];
