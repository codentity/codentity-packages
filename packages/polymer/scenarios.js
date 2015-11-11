module.exports = [{
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'polymer': '*',
        'not-polymer': '*'
      }
    }
  },
  output: [{
    src: 'bowerJson',
    version: '*',
    packageName: 'polymer',
    dependencyGroup: 'dependencies'
  }]
}];
