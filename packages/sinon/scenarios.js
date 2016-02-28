module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'sinon': '*',
        'not-sinon': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'sinon',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'vendor/lib/sinon-1.17.2.js',
      'vendor/lib/sinon.js',
      'sinon-1.11.0.js',
      'sinon.js'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/sinon-1.17.2.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'sinon-1.11.0.js'
  }]
}];
