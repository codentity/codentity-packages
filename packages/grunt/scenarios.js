module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        grunt: '1.*',
        'grunt-cli': '2.*',
        'not-grunt': '3.*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'grunt',
    version: '1.*'
  }, {
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'grunt-cli',
    version: '2.*'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'Gruntfile',
      'Gruntfile.js',
      'Gruntfile.coffee',
      'gruntfile.js',
      'gruntfile.coffee',
      'not-root/gruntfile.js',
      'GRUNTFILE.js'
    ]
  },
  output: [{
    src: 'filePaths',
    filePath: 'Gruntfile.js'
  }, {
    src: 'filePaths',
    filePath: 'Gruntfile.coffee'
  }, {
    src: 'filePaths',
    filePath: 'gruntfile.js'
  }, {
    src: 'filePaths',
    filePath: 'gruntfile.coffee'
  }]
}];
