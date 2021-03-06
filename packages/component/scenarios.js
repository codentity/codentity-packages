module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        component: '1.*',
        'not-component': '2.*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    dependencyGroup: 'devDependencies',
    packageName: 'component',
    version: '1.*'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'component.json',
      'not-in-root/component.json',
      'component.JSON'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: 'component.json'
  }]
}];
