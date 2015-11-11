module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        'protractor': '*',
        'not-protractor': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'protractor',
    dependencyGroup: 'devDependencies'
  }]
}];
