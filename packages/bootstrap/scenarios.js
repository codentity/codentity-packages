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
    src: 'filePaths',
    filePath: 'vendor/lib/bootstrap.js'
  }, {
    src: 'filePaths',
    filePath: 'vendor/lib/bootstrap.min.js'
  }, {
    src: 'filePaths',
    filePath: 'vendor/lib/bootstrap.css'
  }, {
    src: 'filePaths',
    filePath: 'vendor/lib/bootstrap.min.css'
  }, {
    src: 'filePaths',
    filePath: 'bootstrap.js'
  }, {
    src: 'filePaths',
    filePath: 'bootstrap.min.js'
  }]
}];
