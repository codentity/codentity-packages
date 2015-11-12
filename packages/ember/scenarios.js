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
    src: 'packageJson',
    version: '*',
    packageName: 'ember',
    dependencyGroup: 'dependencies'
  }, {
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
    src: 'filePaths',
    filePath: 'vendor/lib/ember.js'
  }, {
    src: 'filePaths',
    filePath: 'vendor/lib/ember.min.js'
  }, {
    src: 'filePaths',
    filePath: 'vendor/lib/ember.prod.js'
  }, {
    src: 'filePaths',
    filePath: 'vendor/lib/ember.debug.js'
  }, {
    src: 'filePaths',
    filePath: 'ember.js'
  }, {
    src: 'filePaths',
    filePath: 'ember.min.js'
  }]
}];
