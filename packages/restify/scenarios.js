module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'restify': '*',
        'not-restify': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'restify',
    dependencyGroup: 'dependencies'
  }]
}];
