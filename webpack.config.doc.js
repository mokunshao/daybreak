const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const baseConfig = require('./webpack.config');

module.exports = {
  ...baseConfig,
  mode: 'production',
  entry: {
    example: './example.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'daybreak',
      template: 'example.html',
      filename: 'index.html',
    }),
  ],
};
