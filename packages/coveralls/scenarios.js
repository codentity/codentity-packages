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
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'coveralls',
    dependencyGroup: 'devDependencies'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'gulp-coveralls',
    dependencyGroup: 'devDependencies'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'grunt-coveralls',
    dependencyGroup: 'devDependencies'
  }]
}];
