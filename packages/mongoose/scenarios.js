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
    src: 'packageJson',
    version: '*',
    packageName: 'mongoose',
    dependencyGroup: 'dependencies'
  }]
}];
