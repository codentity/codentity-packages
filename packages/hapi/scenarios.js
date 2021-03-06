module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'hapi': '*',
        'not-hapi': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'hapi',
    dependencyGroup: 'dependencies'
  }]
}];
