module.exports = [{
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'foundation': '*',
        'not-foundation': '*'
      }
    }
  },
  output: [{
    src: 'bowerJson',
    version: '*',
    packageName: 'foundation',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'foundation': '*',
        'not-foundation': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'foundation',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'vendor/lib/foundation.js',
      'vendor/lib/foundation.min.js',
      'vendor/lib/foundation.css',
      'vendor/lib/foundation.min.css',
      'vendor/lib/not-foundation.js',
      'vendor/lib/foundation.json',
      'foundation.js',
      'foundation.min.js',
      'foundation.css',
      'foundation.min.css',
      'not-foundation.js',
      'foundation.json'
    ]
  },
  output: [{
    src: 'filePaths',
    filePath: 'vendor/lib/foundation.js'
  }, {
    src: 'filePaths',
    filePath: 'vendor/lib/foundation.min.js'
  }, {
    src: 'filePaths',
    filePath: 'vendor/lib/foundation.css'
  }, {
    src: 'filePaths',
    filePath: 'vendor/lib/foundation.min.css'
  }, {
    src: 'filePaths',
    filePath: 'foundation.js'
  }, {
    src: 'filePaths',
    filePath: 'foundation.min.js'
  }, {
    src: 'filePaths',
    filePath: 'foundation.css'
  }, {
    src: 'filePaths',
    filePath: 'foundation.min.css'
  }]
}];
