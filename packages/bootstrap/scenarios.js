module.exports = [{
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'bootstrap': '3.0',
        'not-bootstrap': '*'
      }
    }
  },
  output: [{
    plugin: 'bower',
    src: 'bowerJson',
    version: '3.0',
    packageName: 'bootstrap',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'bootstrap': '3.0',
        'not-bootstrap': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '3.0',
    packageName: 'bootstrap',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'vendor/lib/bootstrap.js',
      'vendor/lib/bootstrap.min.js',
      'vendor/lib/bootstrap.css',
      'vendor/lib/bootstrap.min.css',
      'vendor/lib/not-bootstrap.js',
      'vendor/lib/bootstrap.json',
      'bootstrap.js',
      'bootstrap.min.js',
      'not-bootstrap.js',
      'bootstrap.json'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/bootstrap.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/bootstrap.min.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/bootstrap.css'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/bootstrap.min.css'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'bootstrap.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'bootstrap.min.js'
  }]
}];
