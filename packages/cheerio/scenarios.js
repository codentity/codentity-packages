module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'cheerio': '*',
        'not-cheerio': '*'
      }
    }
  },
  output: [{
    src: 'packageJson',
    version: '*',
    packageName: 'cheerio',
    dependencyGroup: 'dependencies'
  }]
}];
