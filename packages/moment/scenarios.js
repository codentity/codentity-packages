module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'moment': '*',
        'not-moment': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'moment',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'moment': '*',
        'not-moment': '*'
      }
    }
  },
  output: [{
    src: 'bowerJson',
    version: '*',
    packageName: 'moment',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'vendor/lib/moment.js',
      'vendor/lib/moment+locales.js',
      'vendor/lib/moment.min.js',
      'moment.js',
      'moment+locales.js',
      'moment.min.js',
      'not-moment.js'
    ]
  },
  output: [{
    src: 'filePaths',
    filePath: 'vendor/lib/moment.js'
  }, {
    src: 'filePaths',
    filePath: 'vendor/lib/moment+locales.js'
  }, {
    src: 'filePaths',
    filePath: 'moment.js'
  }, {
    src: 'filePaths',
    filePath: 'moment+locales.js'
  }]
}];
