module.exports = [{
  description: 'when found in package.json',
  input: {
    packageJson: {
      devDependencies: {
        'socket.io': '*',
        'socketio': '*',
        'socket-io': '*',
        'not-socket.io': '*'
      }
    }
  },
  output: [{
    plugin: 'npm',
    src: 'packageJson',
    version: '*',
    packageName: 'socket.io',
    dependencyGroup: 'devDependencies'
  }]
}];
