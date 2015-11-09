module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        traceur: '1.0',
        'gulp-traceur': '1.1',
        'not-traceur': '2.*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'traceur',
    version: '1.0'
  }, {
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'gulp-traceur',
    version: '1.1'
  }]
}];
