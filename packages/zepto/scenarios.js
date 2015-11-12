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
      'zepto.min.js',
    ]
  },
  output: [{
    src: 'file',
    filePath: 'vendor/lib/zepto.js'
  }, {
    src: 'file',
    filePath: 'vendor/lib/zepto.min.js'
  }, {
    src: 'file',
    filePath: 'zepto.js'
  }, {
    src: 'file',
    filePath: 'zepto.min.js'
  }]
}];
