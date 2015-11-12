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
    src: 'packageJson',
    version: '*',
    packageName: 'socket.io',
    dependencyGroup: 'devDependencies'
  }]
}];
