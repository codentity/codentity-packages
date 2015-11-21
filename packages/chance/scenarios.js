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
    src: 'filePaths',
    filePath: 'vendor/lib/chance.js'
  }, {
    src: 'filePaths',
    filePath: 'vendor/lib/chance.min.js'
  }, {
    src: 'filePaths',
    filePath: 'chance.js'
  }, {
    src: 'filePaths',
    filePath: 'chance.min.js'
  }]
}];
