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
    plugin: 'bower',
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
    plugin: 'npm',
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
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/foundation.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/foundation.min.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/foundation.css'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/foundation.min.css'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'foundation.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'foundation.min.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'foundation.css'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'foundation.min.css'
  }]
}];
