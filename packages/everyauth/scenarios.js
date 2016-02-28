module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'everyauth': '*',
        'not-everyauth': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'everyauth',
    dependencyGroup: 'dependencies'
  }]
}];
