module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'casperjs': '*',
        'not-casperjs': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'casperjs',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'bin/casperjs.exe',
      'bin/casperjs',
      'bin/casper',
      'casperjs.js',
      'casperjs',
      'not-casperjs'
    ]
  },
  output: [{
    src: 'filePaths',
    filePath: 'bin/casperjs.exe'
  }, {
    src: 'filePaths',
    filePath: 'bin/casperjs'
  }, {
    src: 'filePaths',
    filePath: 'casperjs'
  }]
}];
