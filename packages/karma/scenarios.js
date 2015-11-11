module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        'karma': '*',
        'grunt-karma': '*',
        'gulp-karma': '*',
        'not-karma': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'karma',
    dependencyGroup: 'devDependencies'
  }, {
    src: 'packageJson',
    version: '*',
    packageName: 'grunt-karma',
    dependencyGroup: 'devDependencies'
  }, {
    src: 'packageJson',
    version: '*',
    packageName: 'gulp-karma',
    dependencyGroup: 'devDependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'test/karma.conf.js',
      'test/karma.conf.coffee',
      'test/karma.conf',
      'karma.conf.js',
      'karma.conf.coffee'
    ]
  },
  output: [{
    src: 'file',
    filePath: 'test/karma.conf.js'
  }, {
    src: 'file',
    filePath: 'test/karma.conf.coffee'
  }, {
    src: 'file',
    filePath: 'karma.conf.js'
  }, {
    src: 'file',
    filePath: 'karma.conf.coffee'
  }]
}];
