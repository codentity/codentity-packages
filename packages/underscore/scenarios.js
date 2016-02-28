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
    plugin: 'bower',
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
    plugin: 'npm',
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
      'not-underscore.js'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/underscore.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/underscore.min.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'underscore.min.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'underscore.js'
  }]
}];
