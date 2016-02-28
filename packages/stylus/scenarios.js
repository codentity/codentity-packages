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
    plugin: 'npm',
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
    plugin: 'file',
    src: 'filePaths',
    filePath: 'styles/file.styl'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'file.styl'
  }]
}];
