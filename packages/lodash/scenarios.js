module.exports = [{
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'lodash': '*',
        'not-lodash': '*'
      }
    }
  },
  output: [{
    src: 'bowerJson',
    version: '*',
    packageName: 'lodash',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'lodash': '*',
        'not-lodash': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'lodash',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'vendor/lib/lodash.js',
      'vendor/lib/lodash.min.js',
      'lodash.min.js',
      'lodash.js',
      'not-lodash.js',
    ]
  },
  output: [{
    src: 'filePaths',
    filePath: 'vendor/lib/lodash.js'
  }, {
    src: 'filePaths',
    filePath: 'lodash.js'
  }]
}];
