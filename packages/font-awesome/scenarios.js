module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'font-awesome': '*',
        'fontawesome': '*',
        'not-fontawesome': '*',
        'not-font-awesome': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'font-awesome',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'font-awesome': '*',
        'fontawesome': '*',
        'not-fontawesome': '*',
        'not-font-awesome': '*'
      }
    }
  },
  output: [{
    plugin: 'bower',
    src: 'bowerJson',
    version: '*',
    packageName: 'font-awesome',
    dependencyGroup: 'dependencies'
  }, {
    plugin: 'bower',
    src: 'bowerJson',
    version: '*',
    packageName: 'fontawesome',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'vendor/lib/font-awesome.css',
      'vendor/lib/font-awesome.min.css',
      'font-awesome.css',
      'font-awesome.min.css',
      'fontawesome.css',
      'fontawesome.min.css'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/font-awesome.css'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/font-awesome.min.css'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'font-awesome.css'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'font-awesome.min.css'
  }]
}];
