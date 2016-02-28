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
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'node-sass',
    dependencyGroup: 'devDependencies'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'gulp-sass',
    dependencyGroup: 'devDependencies'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'grunt-contrib-sass',
    dependencyGroup: 'devDependencies'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'grunt-sass',
    dependencyGroup: 'devDependencies'
  }, {
    plugin: 'npm',
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
    plugin: 'file',
    src: 'filePaths',
    filePath: 'styles/file.sass'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'file.sass'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'styles/file.scss'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'file.scss'
  }]
}];
