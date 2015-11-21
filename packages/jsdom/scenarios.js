module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'jsdom': '*',
        'not-jsdom': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'jsdom',
    dependencyGroup: 'dependencies'
  }]
}];
