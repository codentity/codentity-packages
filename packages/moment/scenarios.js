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
    plugin: 'npm',
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
    plugin: 'bower',
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
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/moment.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/moment+locales.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'moment.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'moment+locales.js'
  }]
}];
