module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        jshint: '1.*',
        'gulp-jshint': '2.*',
        'grunt-contrib-jshint': '3.*',
        'not-jshint': '4.*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'jshint',
    version: '1.*'
  }, {
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'gulp-jshint',
    version: '2.*'
  }, {
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'grunt-contrib-jshint',
    version: '3.*'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      '.jshintrc',
      'not-root/.jshintrc',
      '.JSHINT'
    ]
  },
  output: [{
    src: 'file',
    filePath: '.jshintrc'
  }]
}];