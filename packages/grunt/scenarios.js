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
    plugin: 'npm',
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'grunt',
    version: '1.*'
  }, {
    plugin: 'npm',
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
    plugin: 'file',
    src: 'filePaths',
    filePath: 'Gruntfile.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'Gruntfile.coffee'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'gruntfile.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'gruntfile.coffee'
  }]
}];
