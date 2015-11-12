module.exports = [{
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'underscore': '*',
        'not-underscore': '*'
      }
    }
  },
  output: [{
    src: 'bowerJson',
    version: '*',
    packageName: 'underscore',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'underscore': '*',
        'not-underscore': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'underscore',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'vendor/lib/underscore.js',
      'vendor/lib/underscore.min.js',
      'underscore.min.js',
      'underscore.js',
      'not-underscore.js',
    ]
  },
  output: [{
    src: 'filePaths',
    filePath: 'vendor/lib/underscore.js'
  }, {
    src: 'filePaths',
    filePath: 'vendor/lib/underscore.min.js'
  }, {
    src: 'filePaths',
    filePath: 'underscore.min.js'
  }, {
    src: 'filePaths',
    filePath: 'underscore.js'
  }]
}];
