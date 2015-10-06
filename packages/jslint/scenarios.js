module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        jslint: '1.*',
        'gulp-jslint': '2.*',
        'grunt-jslint': '3.*',
        'not-jslint': '4.*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'jslint',
    version: '1.*'
  }, {
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'gulp-jslint',
    version: '2.*'
  }, {
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'grunt-jslint',
    version: '3.*'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      '.jslint.conf',
      'jslint.conf',
      'not-root/.jslint.conf'
    ]
  },
  output: [{
    src: 'file',
    filePath: '.jslint.conf'
  }, {
    src: 'file',
    filePath: 'jslint.conf'
  }]
}];
