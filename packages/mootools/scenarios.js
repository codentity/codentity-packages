module.exports = [{
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'mootools': '*',
        'not-mootools': '*'
      }
    }
  },
  output: [{
    src: 'bowerJson',
    version: '*',
    packageName: 'mootools',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'vendor/lib/MooTools-Core-1.5.2.js',
      'MooTools-Core-1.5.2.js',
      'mootools-core-1.5.2.js',
      'MooTools-Core.js',
      'mootools.js'
    ]
  },
  output: [{
    src: 'file',
    filePath: 'vendor/lib/MooTools-Core-1.5.2.js'
  }, {
    src: 'file',
    filePath: 'MooTools-Core-1.5.2.js'
  }]
}];
