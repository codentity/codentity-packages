module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'jquery': '*',
        'jquery-ui': '*',
        'not-jquery-ui': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'jquery-ui',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'jquery': '*',
        'jquery-ui': '*',
        'not-jquery-ui': '*'
      }
    }
  },
  output: [{
    plugin: 'bower',
    src: 'bowerJson',
    version: '*',
    packageName: 'jquery-ui',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'vendor/lib/jquery-ui.js',
      'vendor/lib/jquery-ui.min.js',
      'vendor/lib/jquery-ui.css',
      'vendor/lib/jquery-ui.min.css',
      'jquery-ui.js',
      'jquery.ui.js',
      'jquery-ui.js',
      'jquery-ui.min.js',
      'not-jquery-ui.js',
      'jquery-ui.json'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/jquery-ui.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/jquery-ui.min.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/jquery-ui.css'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/jquery-ui.min.css'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'jquery-ui.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'jquery-ui.min.js'
  }]
}];
