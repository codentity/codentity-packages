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
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'karma',
    dependencyGroup: 'devDependencies'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'grunt-karma',
    dependencyGroup: 'devDependencies'
  }, {
    plugin: 'npm',
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
    plugin: 'file',
    src: 'filePaths',
    filePath: 'test/karma.conf.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'test/karma.conf.coffee'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'karma.conf.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'karma.conf.coffee'
  }]
}];
