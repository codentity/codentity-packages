module.exports = [{
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'd3': '*',
        'not-d3': '*'
      }
    }
  },
  output: [{
    plugin: 'bower',
    src: 'bowerJson',
    version: '*',
    packageName: 'd3',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'd3': '*',
        'not-d3': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'd3',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'vendor/lib/d3.js',
      'vendor/lib/d3.min.js',
      'vendor/lib/not-d3.js',
      'vendor/lib/d3.json',
      'd3.js',
      'd3.min.js',
      'not-d3.js',
      'd3.json'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/d3.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/d3.min.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'd3.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'd3.min.js'
  }]
}];
