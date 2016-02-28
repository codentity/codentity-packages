module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        'sails': '*',
        'not-sails': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'sails',
    dependencyGroup: 'devDependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'nested/.sailsrc',
      '.sailsrc'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: '.sailsrc'
  }]
}];
