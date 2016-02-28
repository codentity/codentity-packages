module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'mongoose': '*',
        'not-mongoose': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'mongoose',
    dependencyGroup: 'dependencies'
  }]
}];
