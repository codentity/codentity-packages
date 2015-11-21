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
    src: 'packageJson',
    version: '*',
    packageName: 'nodeunit',
    dependencyGroup: 'devDependencies'
  }]
}];
