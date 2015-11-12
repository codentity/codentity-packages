module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'requirejs': '*',
        'not-requirejs': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'requirejs',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'requirejs': '*',
        'not-requirejs': '*'
      }
    }
  },
  output: [{
    src: 'bowerJson',
    version: '*',
    packageName: 'requirejs',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'vendor/lib/require.js',
      'scripts/require.js',
      'require.js'
    ]
  },
  output: [{
    src: 'filePaths',
    filePath: 'vendor/lib/require.js'
  }, {
    src: 'filePaths',
    filePath: 'scripts/require.js'
  }]
}];
