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
    plugin: 'bower',
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
    plugin: 'npm',
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
      'not-lodash.js'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/lodash.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'lodash.js'
  }]
}];
