module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'ampersand': '1.x',
        'not-ampersand': '2.x'
      },
      devDependencies: {
        'ampersand-collection': '3.x',
        'not-ampersand': '4.x'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '1.x',
    packageName: 'ampersand',
    dependencyGroup: 'dependencies'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    version: '3.x',
    packageName: 'ampersand-collection',
    dependencyGroup: 'devDependencies'
  }]
}];
