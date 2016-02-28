// NOTE we do not attempt to cover `config.js` as the file naming convention is too general.
module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        jspm: '1.*',
        'not-jspm': '2.*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'jspm',
    version: '1.*'
  }]
}];
