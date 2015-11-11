module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'backbone.marionette': '*',
        'marionette': '*',
        'backbone-marionette': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'backbone.marionette',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'backbone.marionette': '*',
        'marionette': '*',
        'not-marionette': '*'
      }
    }
  },
  output: [{
    src: 'bowerJson',
    version: '*',
    packageName: 'marionette',
    dependencyGroup: 'dependencies'
  }, {
    src: 'bowerJson',
    version: '*',
    packageName: 'backbone.marionette',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'vendor/lib/backbone.marionette.js',
      'vendor/lib/backbone.marionette.min.js',
      'vendor/lib/marionette.min.js',
      'backbone.marionette.js',
      'backbone.marionette.min.js',
    ]
  },
  output: [{
    src: 'file',
    filePath: 'vendor/lib/backbone.marionette.js'
  }, {
    src: 'file',
    filePath: 'vendor/lib/backbone.marionette.min.js'
  }, {
    src: 'file',
    filePath: 'backbone.marionette.js'
  }, {
    src: 'file',
    filePath: 'backbone.marionette.min.js'
  }]
}];
