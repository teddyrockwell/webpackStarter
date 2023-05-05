const path = require('path'); // path module

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  // path resolve => Starting from leftmost {from} parameter, resolves {to} to an absolute path.
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js', // array / [name] becomes the name of the key value inside entry object (bundle)
  },
};
