module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'forever': '*',
        'forever-monitor': '*',
        'not-forever': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'forever',
    dependencyGroup: 'dependencies'
  }, {
    src: 'packageJson',
    version: '*',
    packageName: 'forever-monitor',
    dependencyGroup: 'dependencies'
  }]
}];
