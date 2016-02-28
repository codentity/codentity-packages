module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        'zepto': '*',
        'not-zepto': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'zepto',
    dependencyGroup: 'devDependencies'
  }]
}, {
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      devDependencies: {
        'zepto': '*',
        'not-zepto': '*'
      }
    }
  },
  output: [{
    plugin: 'bower',
    src: 'bowerJson',
    version: '*',
    packageName: 'zepto',
    dependencyGroup: 'devDependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'vendor/lib/zepto.js',
      'vendor/lib/zepto.min.js',
      'zepto.js',
      'zepto.min.js'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/zepto.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/zepto.min.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'zepto.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'zepto.min.js'
  }]
}];
