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
    src: 'file',
    filePath: 'vendor/lib/d3.js'
  }, {
    src: 'file',
    filePath: 'vendor/lib/d3.min.js'
  }, {
    src: 'file',
    filePath: 'd3.js'
  }, {
    src: 'file',
    filePath: 'd3.min.js'
  }]
}];
