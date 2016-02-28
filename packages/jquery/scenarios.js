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
    plugin: 'bower',
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
    plugin: 'npm',
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
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/jquery.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/jquery.min.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/jquery.css'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/jquery.min.css'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'jquery.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'jquery.min.js'
  }]
}];
