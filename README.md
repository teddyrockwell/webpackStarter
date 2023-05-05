# webpackStarter

This might become a starter for me using webpack in my projects

Dist => Where our static assets are built

Src => Where our source code goes

# commands

We want to run:

(1) `npm init -y`

(2) `npm i -D webpack webpack-cli` (we want to install as dev dependency)

- Inside package.json, can change build script to `webpack --mode production`

(3) We want the js script that we created early on in the index.html of the dist directory, to be pointed towards the `main.js` that's created by default of the webpack build that's ran.

# webpack config

(1) `webpack.config.js` file in the root directory

(2) basic webpack setup

const path = require('path'); // path module

module.exports = {
mode: 'development',
entry: path.resolve(**dirname, 'src/index.js'),
// path resolve => Starting from leftmost {from} parameter, resolves {to} to an absolute path.
output: {
path: path.resolve(**dirname, 'dist'),
filename: 'bundle.js',
},
};

(3) `npm i -D sass style-loader css-loader sass-loader`

- When we do this, that `main.scss` file we make under `styles` folder of the `src` directory, can be imported AFTER we make the right revisions in the `webpack.config.js` file => loaders!!!

(4) after loaders, we get into plugins

- ` npm i -D html-webpack-plugin`

(5) script in `package.json`
`"dev": "webpack serve"` - this'll prompt for installing `webpack-dev-server`

# notes to self

1. Had to run `git config --global core.autocrlf false ` to do add and commits then push

# resources

`https://www.youtube.com/watch?v=IZGNcSuwBZs`
