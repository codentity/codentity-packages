module.exports = [{
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'chance': '*',
        'not-chance': '*'
      }
    }
  },
  output: [{
    plugin: 'bower',
    src: 'bowerJson',
    version: '*',
    packageName: 'chance',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'chance': '*',
        'not-chance': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'chance',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'vendor/lib/chance.js',
      'vendor/lib/chance.min.js',
      'chance.js',
      'chance.min.js',
      'chance.jsx'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/chance.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/chance.min.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'chance.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'chance.min.js'
  }]
}];
