module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        'jake': '*',
        'not-jake': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'jake',
    dependencyGroup: 'devDependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'config/Jakefile',
      'Jakefile',
      'JAKEFILE',
      'Jakefile.json'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: 'Jakefile'
  }]
}];
