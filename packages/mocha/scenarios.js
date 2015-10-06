module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        mocha: '1.*',
        'gulp-mocha': '2.*',
        'grunt-mocha': '3.*',
        'grunt-mocha-test': '4.*',
        'not-mocha': '5.*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'mocha',
    version: '1.*'
  }, {
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'gulp-mocha',
    version: '2.*'
  }, {
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'grunt-mocha',
    version: '3.*'
  }, {
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'grunt-mocha-test',
    version: '4.*'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'test/mocha.opts',
      'mocha.opts',
      'other-dir/mocha.opts'
    ]
  },
  output: [{
    src: 'file',
    filePath: 'test/mocha.opts'
  }]
}];
