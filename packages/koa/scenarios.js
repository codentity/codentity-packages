module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        'koa': '*',
        'not-koa': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'koa',
    dependencyGroup: 'devDependencies'
  }]
}];
