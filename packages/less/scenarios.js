module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        'less': '*',
        'grunt-contrib-less': '*',
        'gulp-less': '*',
        'not-less': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'less',
    dependencyGroup: 'devDependencies'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'grunt-contrib-less',
    dependencyGroup: 'devDependencies'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'gulp-less',
    dependencyGroup: 'devDependencies'
  }]
}, {
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      devDependencies: {
        'less': '*',
        'not-less': '*'
      }
    }
  },
  output: [{
    plugin: 'bower',
    src: 'bowerJson',
    version: '*',
    packageName: 'less',
    dependencyGroup: 'devDependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'styles/file.less',
      'styles/file.css',
      'less.css',
      'file.less'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: 'styles/file.less'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'file.less'
  }]
}];
