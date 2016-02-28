module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        duo: '1.*',
        'not-duo': '2.*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'duo',
    version: '1.*'
  }]
}];
