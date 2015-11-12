module.exports = [{
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'jquery': '2.1.0',
        'not-jquery': '*'
      }
    }
  },
  output: [{
    src: 'bowerJson',
    version: '2.1.0',
    packageName: 'jquery',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'jquery': '2.1.0',
        'not-jquery': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '2.1.0',
    packageName: 'jquery',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'vendor/lib/jquery.js',
      'vendor/lib/jquery.min.js',
      'vendor/lib/jquery.css',
      'vendor/lib/jquery.min.css',
      'vendor/lib/not-jquery.js',
      'vendor/lib/jquery.json',
      'jquery.js',
      'jquery.min.js',
      'not-jquery.js',
      'jquery.json'
    ]
  },
  output: [{
    src: 'filePaths',
    filePath: 'vendor/lib/jquery.js'
  }, {
    src: 'filePaths',
    filePath: 'vendor/lib/jquery.min.js'
  }, {
    src: 'filePaths',
    filePath: 'vendor/lib/jquery.css'
  }, {
    src: 'filePaths',
    filePath: 'vendor/lib/jquery.min.css'
  }, {
    src: 'filePaths',
    filePath: 'jquery.js'
  }, {
    src: 'filePaths',
    filePath: 'jquery.min.js'
  }]
}];
