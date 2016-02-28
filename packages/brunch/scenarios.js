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
    plugin: 'npm',
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
    plugin: 'file',
    src: 'filePaths',
    filePath: 'brunch-config.coffee'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'brunch-config.js'
  }]
}];
