module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        browserify: '1.0',
        'gulp-browserify': '1.1',
        'grunt-browserify': '1.2',
        'not-browserify': '2.*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'browserify',
    version: '1.0'
  }, {
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'gulp-browserify',
    version: '1.1'
  }, {
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'grunt-browserify',
    version: '1.2'
  }]
}];
