module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        'coveralls': '*',
        'grunt-coveralls': '*',
        'gulp-coveralls': '*',
        'not-coveralls': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'coveralls',
    dependencyGroup: 'devDependencies'
  }, {
    src: 'packageJson',
    version: '*',
    packageName: 'gulp-coveralls',
    dependencyGroup: 'devDependencies'
  }, {
    src: 'packageJson',
    version: '*',
    packageName: 'grunt-coveralls',
    dependencyGroup: 'devDependencies'
  }]
}];
