module.exports = [{
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'react': '0.14.0',
        'not-react': '*'
      }
    }
  },
  output: [{
    src: 'bowerJson',
    version: '0.14.0',
    packageName: 'react',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'react': '0.14.0',
        'not-react': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '0.14.0',
    packageName: 'react',
    dependencyGroup: 'dependencies'
  }]
}];
