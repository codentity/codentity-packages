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
    plugin: 'npm',
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'mocha',
    version: '1.*'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'gulp-mocha',
    version: '2.*'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'grunt-mocha',
    version: '3.*'
  }, {
    plugin: 'npm',
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
    plugin: 'file',
    src: 'filePaths',
    filePath: 'test/mocha.opts'
  }]
}];
