module.exports = [{
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'kendo': '*',
        'kendo-ui': '*',
        'kendo-ui-core': '*',
        'not-kendo-ui-core': '*'
      }
    }
  },
  output: [{
    src: 'bowerJson',
    version: '*',
    packageName: 'kendo-ui-core',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'vendor/lib/kendo.all.min.js',
      'vendor/lib/kendo.ui.core.min.js',
      'vendor/lib/kendo.all.js',
      'vendor/lib/kendo.ui.core.js',
      'kendo.all.min.js',
      'kendo.ui.core.min.js',
      'kendo.ui.js'
    ]
  },
  output: [{
    src: 'file',
    filePath: 'vendor/lib/kendo.all.min.js'
  }, {
    src: 'file',
    filePath: 'vendor/lib/kendo.ui.core.min.js'
  }, {
    src: 'file',
    filePath: 'kendo.all.min.js'
  }, {
    src: 'file',
    filePath: 'kendo.ui.core.min.js'
  }]
}];
