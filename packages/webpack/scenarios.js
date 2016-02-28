module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        webpack: '1.*',
        'gulp-webpack': '2.*',
        'grunt-webpack': '3.*',
        'not-webpack': '4.*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'webpack',
    version: '1.*'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'gulp-webpack',
    version: '2.*'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'grunt-webpack',
    version: '3.*'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'webpack.config.js',
      'nested/webpack.config.js'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: 'webpack.config.js'
  }]
}];
