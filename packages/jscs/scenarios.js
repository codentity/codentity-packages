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
    plugin: 'npm',
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'jscs',
    version: '1.*'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'gulp-jscs',
    version: '2.*'
  }, {
    plugin: 'npm',
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
    plugin: 'file',
    src: 'filePaths',
    filePath: '.jscsrc'
  }]
}];
