module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        jslint: '1.*',
        'gulp-jslint': '2.*',
        'grunt-jslint': '3.*',
        'not-jslint': '4.*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'jslint',
    version: '1.*'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'gulp-jslint',
    version: '2.*'
  }, {
    plugin: 'npm',
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'grunt-jslint',
    version: '3.*'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      '.jslint.conf',
      'jslint.conf',
      'not-root/.jslint.conf'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: '.jslint.conf'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'jslint.conf'
  }]
}];
