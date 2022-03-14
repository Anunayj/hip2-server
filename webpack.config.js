const path = require('path');

module.exports = {
  entry: ['./src/polyfills.js','./src/derive.js'],
  target: 'node',
  mode: 'production',
  output: {
    filename: 'hip2-server.js',
    path: path.resolve(__dirname, 'build'),
  },
  optimization:{
    minimize: false,
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['-browser.js', '.js', '.json']
  },
};
