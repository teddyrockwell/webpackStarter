const path = require('path'); // path module
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  // path resolve => Starting from leftmost {from} parameter, resolves {to} to an absolute path.
  output: {
    path: path.resolve(__dirname, 'dist'),
    // contenthash for caching => why would we want to do this though???
    filename: '[name][contenthash].js', // array / [name] becomes the name of the key value inside entry object (bundle)
    clean: true, // will only keep one file
  },
  // npm run dev settings / logic
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  // loaders compilers
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  // plugins => Think about what our template is doing here for us.
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/template.html',
    }),
  ],
};

/*
So when I set up my webpack config file, what's the first  steps I have to take?

1. I should get the path module.

2. Set up the file as module.exports = {

}

3. Inside that object, set the mode

4. Set the entry: {
  bundle: path.resolve(__dirnane, 'src/index.js')
}

5. Set the output {
  path: 
  filename:
}

*/
