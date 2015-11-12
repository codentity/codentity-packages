module.exports = [{
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      devDependencies: {
        'vue': '*',
        'not-vue': '*'
      }
    }
  },
  output: [{
    src: 'bowerJson',
    version: '*',
    packageName: 'vue',
    dependencyGroup: 'devDependencies'
  }]
}, {
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        'vue': '*',
        'not-vue': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'vue',
    dependencyGroup: 'devDependencies'
  }]
}];
