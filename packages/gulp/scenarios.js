module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        gulp: '1.*',
        'gulp-cli': '2.*',
        'not-gulp': '3.*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'gulp',
    version: '1.*'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'gulp-cli',
    version: '2.*'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'Gulpfile',
      'Gulpfile.js',
      'Gulpfile.coffee',
      'gulpfile.js',
      'gulpfile.coffee',
      'not-root/gulpfile.js',
      'GULPFILE.js'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: 'Gulpfile.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'Gulpfile.coffee'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'gulpfile.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'gulpfile.coffee'
  }]
}];
