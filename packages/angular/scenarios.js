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
    plugin: 'bower',
    src: 'bowerJson',
    version: '~1.2.27',
    packageName: 'angular',
    dependencyGroup: 'dependencies'
  }, {
    plugin: 'bower',
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
    plugin: 'npm',
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
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/angular.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/angular.min.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'angular.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'angular.min.js'
  }]
}];
