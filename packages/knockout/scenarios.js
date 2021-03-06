module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'knockout': '*',
        'not-knockout': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'knockout',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'knockout': '*',
        'not-knockout': '*'
      }
    }
  },
  output: [{
    plugin: 'bower',
    src: 'bowerJson',
    version: '*',
    packageName: 'knockout',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'vendor/lib/knockout-3.3.0.js',
      'vendor/lib/knockout.js',
      'knockout-3.3.0.js',
      'knockout.js'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/knockout-3.3.0.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'knockout-3.3.0.js'
  }]
}];
