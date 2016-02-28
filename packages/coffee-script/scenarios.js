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
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'coffee-script',
    dependencyGroup: 'dependencies'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'grunt-contrib-coffee',
    dependencyGroup: 'dependencies'
  }, {
    plugin: 'npm',
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
    plugin: 'file',
    src: 'filePaths',
    filePath: 'example.coffee'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'nested/example.coffee'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'deep/nested/example.coffee'
  }]
}];
