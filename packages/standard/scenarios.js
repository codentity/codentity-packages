module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        'standard': '*',
        'not-standard': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'standard',
    dependencyGroup: 'devDependencies'
  }]
}];
