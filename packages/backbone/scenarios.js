module.exports = [{
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'backbone': '1.*',
        'not-backbone': '*'
      }
    }
  },
  output: [{
    src: 'bowerJson',
    version: '1.*',
    packageName: 'backbone',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'backbone': '1.*',
        'not-backbone': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '1.*',
    packageName: 'backbone',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'vendor/lib/backbone.js',
      'vendor/lib/backbone-min.js',
      'vendor/lib/backbone.min.js',
      'vendor/lib/not-backbone.js',
      'vendor/lib/backbone.json',
      'backbone.js',
      'backbone-min.js',
      'not-backbone.js',
      'backbone.json'
    ]
  },
  output: [{
    src: 'file',
    filePath: 'vendor/lib/backbone.js'
  }, {
    src: 'file',
    filePath: 'vendor/lib/backbone-min.js'
  }, {
    src: 'file',
    filePath: 'backbone.js'
  }, {
    src: 'file',
    filePath: 'backbone-min.js'
  }]
}];
