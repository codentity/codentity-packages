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
    src: 'filePaths',
    filePath: '.bowerrc'
  }, {
    src: 'filePaths',
    filePath: 'bower.json'
  }]
}];
