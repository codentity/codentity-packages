module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'coffee-script': '*',
        'coffeescript': '*',
        'grunt-contrib-coffee': '*',
        'gulp-coffee': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'coffee-script',
    dependencyGroup: 'dependencies'
  }, {
    src: 'packageJson',
    version: '*',
    packageName: 'grunt-contrib-coffee',
    dependencyGroup: 'dependencies'
  }, {
    src: 'packageJson',
    version: '*',
    packageName: 'gulp-coffee',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'coffee.js',
      'example.coffee',
      'nested/example.coffee',
      'deep/nested/example.coffee',
      'not-correct.coffee.js'
    ]
  },
  output: [{
    src: 'file',
    filePath: 'example.coffee'
  }, {
    src: 'file',
    filePath: 'nested/example.coffee'
  }, {
    src: 'file',
    filePath: 'deep/nested/example.coffee'
  }]
}];
