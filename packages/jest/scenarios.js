module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        'jest-cli': '*',
        'jest': '*',
        'not-jest-cli': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'jest-cli',
    dependencyGroup: 'devDependencies'
  }]
}];
