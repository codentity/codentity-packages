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
    src: 'file',
    filePath: 'Gruntfile.js'
  }, {
    src: 'file',
    filePath: 'Gruntfile.coffee'
  }, {
    src: 'file',
    filePath: 'gruntfile.js'
  }, {
    src: 'file',
    filePath: 'gruntfile.coffee'
  }]
}];
