module.exports = [{
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'canjs': '*',
        'not-canjs': '*'
      }
    }
  },
  output: [{
    src: 'bowerJson',
    version: '*',
    packageName: 'canjs',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'canjs': '*',
        'not-canjs': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'canjs',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      "can.dojo.js",
      "can.dojo.min.js",
      "can.jquery.js",
      "can.jquery.min.js",
      "can.mootools.js",
      "can.mootools.min.js",
      "can.yui.js",
      "can.yui.min.js",
      "can.zepto.js",
      "can.zepto.min.js",
      "vendor/lib/can.zepto.min.js",
      "can.not-really-canjs.min.js"
    ]
  },
  output: [{
    src: 'filePaths',
    filePath: 'can.dojo.js'
  }, {
    src: 'filePaths',
    filePath: 'can.dojo.min.js'
  }, {
    src: 'filePaths',
    filePath: 'can.jquery.js'
  }, {
    src: 'filePaths',
    filePath: 'can.jquery.min.js'
  }, {
    src: 'filePaths',
    filePath: 'can.mootools.js'
  }, {
    src: 'filePaths',
    filePath: 'can.mootools.min.js'
  }, {
    src: 'filePaths',
    filePath: 'can.yui.js'
  }, {
    src: 'filePaths',
    filePath: 'can.yui.min.js'
  }, {
    src: 'filePaths',
    filePath: 'can.zepto.js'
  }, {
    src: 'filePaths',
    filePath: 'can.zepto.min.js'
  }, {
    src: 'filePaths',
    filePath: 'vendor/lib/can.zepto.min.js'
  }]
}];
