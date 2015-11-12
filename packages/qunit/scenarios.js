module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        'qunit': '*',
        'qunitjs': '*',
        'not-qunitjs': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'qunitjs',
    dependencyGroup: 'devDependencies'
  }]
}, {
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      devDependencies: {
        'qunit': '*',
        'qunitjs': '*',
        'not-qunitjs': '*'
      }
    }
  },
  output: [{
    src: 'bowerJson',
    version: '*',
    packageName: 'qunit',
    dependencyGroup: 'devDependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'vendor/lib/qunit-1.20.0.js',
      'vendor/lib/qunit-1.20.0.css',
      'vendor/lib/qunit.js',
      'vendor/lib/qunit.css',
      'qunit-1.20.0.js',
      'qunit-1.20.0.css',
      'qunit.js'
    ]
  },
  output: [{
    src: 'filePaths',
    filePath: 'vendor/lib/qunit-1.20.0.js'
  }, {
    src: 'filePaths',
    filePath: 'vendor/lib/qunit-1.20.0.css'
  }, {
    src: 'filePaths',
    filePath: 'qunit-1.20.0.js'
  }, {
    src: 'filePaths',
    filePath: 'qunit-1.20.0.css'
  }]
}];
