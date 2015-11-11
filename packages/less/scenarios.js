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
    src: 'packageJson',
    version: '*',
    packageName: 'less',
    dependencyGroup: 'devDependencies'
  }, {
    src: 'packageJson',
    version: '*',
    packageName: 'grunt-contrib-less',
    dependencyGroup: 'devDependencies'
  }, {
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
    src: 'file',
    filePath: 'styles/file.less'
  }, {
    src: 'file',
    filePath: 'file.less'
  }]
}];
