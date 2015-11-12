module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        'node-sass': '*',
        'gulp-sass': '*',
        'grunt-contrib-sass': '*',
        'grunt-sass': '*',
        'sass': '*',
        'not-sass': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'node-sass',
    dependencyGroup: 'devDependencies'
  }, {
    src: 'packageJson',
    version: '*',
    packageName: 'gulp-sass',
    dependencyGroup: 'devDependencies'
  }, {
    src: 'packageJson',
    version: '*',
    packageName: 'grunt-contrib-sass',
    dependencyGroup: 'devDependencies'
  }, {
    src: 'packageJson',
    version: '*',
    packageName: 'grunt-sass',
    dependencyGroup: 'devDependencies'
  }, {
    src: 'packageJson',
    version: '*',
    packageName: 'sass',
    dependencyGroup: 'devDependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'styles/file.sass',
      'styles/file.scss',
      'styles/file.css',
      'sass.css',
      'file.sass',
      'file.scss'
    ]
  },
  output: [{
    src: 'filePaths',
    filePath: 'styles/file.sass'
  }, {
    src: 'filePaths',
    filePath: 'file.sass'
  }, {
    src: 'filePaths',
    filePath: 'styles/file.scss'
  }, {
    src: 'filePaths',
    filePath: 'file.scss'
  }]
}];
