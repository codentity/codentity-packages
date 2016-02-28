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
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'forever',
    dependencyGroup: 'dependencies'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'forever-monitor',
    dependencyGroup: 'dependencies'
  }]
}];
