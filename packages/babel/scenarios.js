module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        'babel': '1.0',
        'gulp-babel': '1.1',
        'grunt-babel': '1.2',
        'babel-preset-react': '1.3',
        'babel-preset-es2015': '1.4',
        'not-babel': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '1.0',
    packageName: 'babel',
    dependencyGroup: 'devDependencies'
  }, {
    src: 'packageJson',
    version: '1.1',
    packageName: 'gulp-babel',
    dependencyGroup: 'devDependencies'
  }, {
    src: 'packageJson',
    version: '1.2',
    packageName: 'grunt-babel',
    dependencyGroup: 'devDependencies'
  }, {
    src: 'packageJson',
    version: '1.3',
    packageName: 'babel-preset-react',
    dependencyGroup: 'devDependencies'
  }, {
    src: 'packageJson',
    version: '1.4',
    packageName: 'babel-preset-es2015',
    dependencyGroup: 'devDependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      '.babelrc',
      '.BABELRC',
      'nested/.babelrc'
    ]
  },
  output: [{
    src: 'file',
    filePath: '.babelrc'
  }]
}];
