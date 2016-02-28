module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'coffeelint': '1.1',
        'gulp-coffeelint': '1.2',
        'grunt-coffeelint': '1.3',
        'coffeelint-brunch': '1.4',
        'not-coffeelint': '2.1',
        'coffeelint-nope': '2.2'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '1.1',
    packageName: 'coffeelint',
    dependencyGroup: 'dependencies'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    version: '1.2',
    packageName: 'gulp-coffeelint',
    dependencyGroup: 'dependencies'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    version: '1.3',
    packageName: 'grunt-coffeelint',
    dependencyGroup: 'dependencies'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    version: '1.4',
    packageName: 'coffeelint-brunch',
    dependencyGroup: 'dependencies'
  }]
}];
