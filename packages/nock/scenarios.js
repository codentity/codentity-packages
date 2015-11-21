module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        'nock': '*',
        'not-nock': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'nock',
    dependencyGroup: 'devDependencies'
  }]
}];
