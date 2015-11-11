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
    src: 'file',
    filePath: 'vendor/lib/jquery.mobile-1.4.5.js'
  }, {
    src: 'file',
    filePath: 'vendor/lib/jquery.mobile-1.4.5.min.js'
  }, {
    src: 'file',
    filePath: 'vendor/lib/jquery.mobile-1.4.5.css'
  }, {
    src: 'file',
    filePath: 'vendor/lib/jquery.mobile-1.4.5.min.css'
  }, {
    src: 'file',
    filePath: 'jquery.mobile-1.4.5.js'
  }, {
    src: 'file',
    filePath: 'jquery.mobile-1.4.5.min.js'
  }]
}];
