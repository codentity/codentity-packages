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
    src: 'packageJson',
    version: '*',
    packageName: 'chalk',
    dependencyGroup: 'dependencies'
  }]
}];
