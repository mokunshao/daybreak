const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    kaka: './lib/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'kaka',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel',
        test: /\.jsx?$/,
      },
      {
        exclude: [path.resolve(__dirname, 'node_modules')],
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
