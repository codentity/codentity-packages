module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        'jasmine-node': '*',
        'jasmine': '*',
        'karma-jasmine': '*',
        'not-jasmine': '*',
        'jasmine-fake': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'jasmine',
    dependencyGroup: 'devDependencies'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'jasmine-node',
    dependencyGroup: 'devDependencies'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'karma-jasmine',
    dependencyGroup: 'devDependencies'
  }]
}, {
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      devDependencies: {
        'jasmine': '*',
        'not-jasmine': '*',
        'jasmine-fake': '*'
      }
    }
  },
  output: [{
    plugin: 'bower',
    src: 'bowerJson',
    version: '*',
    packageName: 'jasmine',
    dependencyGroup: 'devDependencies'
  }]
}];
