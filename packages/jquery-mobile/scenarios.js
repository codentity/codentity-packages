module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'jquery': '*',
        'jquery-mobile': '*',
        'not-jquery-mobile': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'jquery-mobile',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'jquery': '*',
        'jquery-mobile': '*',
        'not-jquery-mobile': '*'
      }
    }
  },
  output: [{
    plugin: 'bower',
    src: 'bowerJson',
    version: '*',
    packageName: 'jquery-mobile',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'vendor/lib/jquery.mobile-1.4.5.js',
      'vendor/lib/jquery.mobile-1.4.5.min.js',
      'vendor/lib/jquery.mobile-1.4.5.css',
      'vendor/lib/jquery.mobile-1.4.5.min.css',
      'vendor/lib/not-jquery.mobile-1.4.5.js',
      'vendor/lib/jquery.mobile-1.4.5.json',
      'jquery.mobile-1.4.5.js',
      'jquery.mobile.js',
      'jquery-mobile.js',
      'jquery.mobile-1.4.5.min.js',
      'not-jquery.mobile-1.4.5.js',
      'jquery.mobile-1.4.5.json'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/jquery.mobile-1.4.5.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/jquery.mobile-1.4.5.min.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/jquery.mobile-1.4.5.css'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/jquery.mobile-1.4.5.min.css'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'jquery.mobile-1.4.5.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'jquery.mobile-1.4.5.min.js'
  }]
}];
