module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        'vows': '*',
        'not-vows': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'vows',
    dependencyGroup: 'devDependencies'
  }]
}];
