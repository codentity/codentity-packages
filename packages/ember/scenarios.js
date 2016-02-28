module.exports = [{
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'ember': '*',
        'not-ember': '*'
      }
    }
  },
  output: [{
    plugin: 'bower',
    src: 'bowerJson',
    version: '*',
    packageName: 'ember',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'ember': '*',
        'ember-cli': '*',
        'not-ember': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'ember',
    dependencyGroup: 'dependencies'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'ember-cli',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'vendor/lib/ember.js',
      'vendor/lib/ember.min.js',
      'vendor/lib/ember.prod.js',
      'vendor/lib/ember.debug.js',
      'vendor/lib/not-ember.js',
      'vendor/lib/ember.json',
      'ember.js',
      'ember.min.js',
      'not-ember.js',
      'ember.json'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/ember.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/ember.min.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/ember.prod.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/ember.debug.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'ember.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'ember.min.js'
  }]
}];
