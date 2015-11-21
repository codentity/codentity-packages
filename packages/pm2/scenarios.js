module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        'pm2': '*',
        'not-pm2': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'pm2',
    dependencyGroup: 'devDependencies'
  }]
}];
