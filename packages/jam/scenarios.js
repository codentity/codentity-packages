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
    plugin: 'npm',
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
    plugin: 'file',
    src: 'filePaths',
    filePath: 'jam/jam.json'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'jam/require.config.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'jam/require.js'
  }]
}];
