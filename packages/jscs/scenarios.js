module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        jscs: '1.*',
        'gulp-jscs': '2.*',
        'grunt-jscs': '3.*',
        'not-jscs': '4.*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'jscs',
    version: '1.*'
  }, {
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'gulp-jscs',
    version: '2.*'
  }, {
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'grunt-jscs',
    version: '3.*'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      '.jscsrc',
      'not-root/.jscsrc',
      '.JSCSRC'
    ]
  },
  output: [{
    src: 'filePaths',
    filePath: '.jscsrc'
  }]
}];
