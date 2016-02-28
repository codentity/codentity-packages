module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        'nodeunit': '*',
        'not-nodeunit': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'nodeunit',
    dependencyGroup: 'devDependencies'
  }]
}];
