module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        'stylus': '*',
        'not-stylus': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'stylus',
    dependencyGroup: 'devDependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'styles/file.styl',
      'styles/file.stylus',
      'stylus.css',
      'file.styl',
      'file.stylus'
    ]
  },
  output: [{
    src: 'file',
    filePath: 'styles/file.styl'
  }, {
    src: 'file',
    filePath: 'file.styl'
  }]
}];