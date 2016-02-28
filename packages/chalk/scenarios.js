module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'chalk': '*',
        'not-chalk': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'chalk',
    dependencyGroup: 'dependencies'
  }]
}];
