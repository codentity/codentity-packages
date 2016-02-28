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
    plugin: 'npm',
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
    plugin: 'bower',
    src: 'bowerJson',
    version: '*',
    packageName: 'marionette',
    dependencyGroup: 'dependencies'
  }, {
    plugin: 'bower',
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
      'backbone.marionette.min.js'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/backbone.marionette.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/backbone.marionette.min.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'backbone.marionette.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'backbone.marionette.min.js'
  }]
}];
