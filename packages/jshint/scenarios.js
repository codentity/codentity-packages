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
    plugin: 'npm',
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'jshint',
    version: '1.*'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'gulp-jshint',
    version: '2.*'
  }, {
    plugin: 'npm',
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
      '.jshintignore',
      'not-root/.jshintrc',
      '.JSHINT'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: '.jshintrc'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: '.jshintignore'
  }]
}];
