module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        jamjs: '1.*',
        'not-jamjs': '2.*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'jamjs',
    version: '1.*'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'jam/jam.json',
      'jam/require.config.js',
      'jam/require.js',
      'jam/jquery/jquery.min.js',
      'nested/jam/require.js'
    ]
  },
  output: [{
    src: 'filePaths',
    filePath: 'jam/jam.json'
  }, {
    src: 'filePaths',
    filePath: 'jam/require.config.js'
  }, {
    src: 'filePaths',
    filePath: 'jam/require.js'
  }]
}];
