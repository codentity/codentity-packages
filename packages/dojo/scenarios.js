module.exports = [{
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'dojo': '*',
        'not-dojo': '*'
      }
    }
  },
  output: [{
    src: 'bowerJson',
    version: '*',
    packageName: 'dojo',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'dojo': '*',
        'not-dojo': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'dojo',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'vendor/lib/dojo.js',
      'vendor/lib/dojo.min.js',
      'vendor/lib/dojo.js.uncompressed.js',
      'vendor/lib/not-dojo.js',
      'vendor/lib/dojo.json',
      'dojo.js',
      'dojo.min.js',
      'dojo.js.uncompressed.js',
      'not-dojo.js',
      'dojo.json'
    ]
  },
  output: [{
    src: 'filePaths',
    filePath: 'vendor/lib/dojo.js'
  }, {
    src: 'filePaths',
    filePath: 'vendor/lib/dojo.js.uncompressed.js'
  }, {
    src: 'filePaths',
    filePath: 'dojo.js'
  }, {
    src: 'filePaths',
    filePath: 'dojo.js.uncompressed.js'
  }]
}];
