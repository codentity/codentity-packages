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
    plugin: 'npm',
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
    plugin: 'file',
    src: 'filePaths',
    filePath: 'bin/casperjs.exe'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'bin/casperjs'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'casperjs'
  }]
}];
