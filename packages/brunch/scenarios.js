module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        brunch: '1.*',
        'not-brunch': '2.*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'brunch',
    version: '1.*'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'brunch-config.coffee',
      'brunch-config.js',
      'not-in-root/brunch-config.js',
      'not-in-root/brunch-config.coffee',
      'BRUNCH-CONFIG.js'
    ]
  },
  output: [{
    src: 'file',
    filePath: 'brunch-config.coffee'
  }, {
    src: 'file',
    filePath: 'brunch-config.js'
  }]
}];
