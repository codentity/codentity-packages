module.exports = [{
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'angular': '~1.2.27',
        'not-angular': '*'
      },
      devDependencies: {
        'angular-latest': '*',
        'not-angular': '*'
      }
    }
  },
  output: [{
    src: 'bowerJson',
    version: '~1.2.27',
    packageName: 'angular',
    dependencyGroup: 'dependencies'
  }, {
    src: 'bowerJson',
    version: '*',
    packageName: 'angular-latest',
    dependencyGroup: 'devDependencies'
  }]
}, {
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'angular': '~1.2.27',
        'not-angular': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '~1.2.27',
    packageName: 'angular',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'vendor/lib/angular.js',
      'vendor/lib/angular.min.js',
      'vendor/lib/not-angular.js',
      'vendor/lib/angular.json',
      'angular.js',
      'angular.min.js',
      'not-angular.js',
      'angular.json'
    ]
  },
  output: [{
    src: 'filePaths',
    filePath: 'vendor/lib/angular.js'
  }, {
    src: 'filePaths',
    filePath: 'vendor/lib/angular.min.js'
  }, {
    src: 'filePaths',
    filePath: 'angular.js'
  }, {
    src: 'filePaths',
    filePath: 'angular.min.js'
  }]
}];
