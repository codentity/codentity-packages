module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        eslint: '1.*',
        'gulp-eslint': '2.*',
        'grunt-eslint': '3.*',
        'not-eslint': '4.*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'eslint',
    version: '1.*'
  }, {
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'gulp-eslint',
    version: '2.*'
  }, {
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'grunt-eslint',
    version: '3.*'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      '.eslintrc',
      'not-in-root/.eslintrc',
      '.ESLINTRC'
    ]
  },
  output: [{
    src: 'file',
    filePath: '.eslintrc'
  }]
}];
