module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'immutable': '*',
        'not-immutable': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'immutable',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'immutable': '*',
        'not-immutable': '*'
      }
    }
  },
  output: [{
    src: 'bowerJson',
    version: '*',
    packageName: 'immutable',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'vendor/lib/immutable.js',
      'vendor/lib/immutable.min.js',
      'immutable.js',
      'immutable.min.js',
      'not-immutable.js'
    ]
  },
  output: [{
    src: 'filePaths',
    filePath: 'vendor/lib/immutable.min.js'
  }, {
    src: 'filePaths',
    filePath: 'immutable.min.js'
  }]
}];
