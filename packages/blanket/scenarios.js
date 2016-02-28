module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'blanket': '*',
        'not-blanket': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'blanket',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'vendor/lib/blanket.js',
      'vendor/lib/blanket.min.js',
      'vendor/lib/not-blanket.js',
      'blanket.js',
      'blanket.min.js',
      'not-blanket.js'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/blanket.min.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'blanket.min.js'
  }]
}];
