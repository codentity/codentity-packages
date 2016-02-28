module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      dependencies: {
        'typescript': '*',
        'not-typescript': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'typescript',
    dependencyGroup: 'dependencies'
  }]
}, {
  description: 'when found in file paths',
  input: {
    filePaths: [
      'lib/example.ts',
      'SAMPLE.ts',
      '1.0.0.ts',
      'sample.TS',
      'sample.typescript'
    ]
  },
  output: [{
    plugin: 'file',
    src: 'filePaths',
    filePath: 'lib/example.ts'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: 'SAMPLE.ts'
  }, {
    plugin: 'file',
    src: 'filePaths',
    filePath: '1.0.0.ts'
  }]
}];
