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
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'gulp',
    version: '1.*'
  }, {
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
    src: 'file',
    filePath: 'Gulpfile.js'
  }, {
    src: 'file',
    filePath: 'Gulpfile.coffee'
  }, {
    src: 'file',
    filePath: 'gulpfile.js'
  }, {
    src: 'file',
    filePath: 'gulpfile.coffee'
  }]
}];
