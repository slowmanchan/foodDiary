var path = require('path');

module.exports = {
  entry: './src/Components/App.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static')
  }
};
