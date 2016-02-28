module.exports = [{
  description: 'when found in bower.json',
  input: {
    bowerJson: {
      dependencies: {
        'handlebars': '*',
        'handlebars.js': '*',
        'not-handlebars': '*'
      }
    }
  },
  output: [{
    plugin: 'bower',
    src: 'bowerJson',
    version: '*',
    packageName: 'handlebars',
    dependencyGroup: 'dependencies'
  }, {
    plugin: 'bower',
    src: 'bowerJson',
    version: '*',
    packageName: 'handlebars.js',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'handlebars': '*',
        'hbs': '*',
        'not-handlebars': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'handlebars',
    dependencyGroup: 'dependencies'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'hbs',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'vendor/lib/handlebars-v4.js',
      'vendor/lib/handlebars.js',
      'vendor/lib/handlebars-v4.0.4.js',
      'handlebars-v4.0.4.js'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: 'vendor/lib/handlebars-v4.0.4.js'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'handlebars-v4.0.4.js'
  }]
}];
