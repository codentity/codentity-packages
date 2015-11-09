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
    src: 'file',
    filePath: 'can.dojo.js'
  }, {
    src: 'file',
    filePath: 'can.dojo.min.js'
  }, {
    src: 'file',
    filePath: 'can.jquery.js'
  }, {
    src: 'file',
    filePath: 'can.jquery.min.js'
  }, {
    src: 'file',
    filePath: 'can.mootools.js'
  }, {
    src: 'file',
    filePath: 'can.mootools.min.js'
  }, {
    src: 'file',
    filePath: 'can.yui.js'
  }, {
    src: 'file',
    filePath: 'can.yui.min.js'
  }, {
    src: 'file',
    filePath: 'can.zepto.js'
  }, {
    src: 'file',
    filePath: 'can.zepto.min.js'
  }, {
    src: 'file',
    filePath: 'vendor/lib/can.zepto.min.js'
  }]
}];
