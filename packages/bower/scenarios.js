module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        bower: '1.*',
        'not-bower': '2.*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'bower',
    version: '1.*'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      '.bowerrc',
      'bower.json',
      'not-in-root/.bowerrc',
      'not-in-root/bower.json',
      'BOWER.JSON'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: '.bowerrc'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'bower.json'
  }]
}];
