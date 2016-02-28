module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        'yo': '*',
        'yeoman': '*',
        'not-yo': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'yo',
    dependencyGroup: 'devDependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'config/.yo-rc.json',
      'config/yo-rc.json',
      'config/.yo-rc',
      '.yo-rc.json',
      'yo-rc.json',
      '.yo-rc'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: '.yo-rc.json'
  }]
}];
