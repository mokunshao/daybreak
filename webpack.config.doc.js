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
    path: path.resolve(__dirname, 'doc'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'daybreak',
      template: 'example.html',
      filename: 'example.html',
    }),
  ],
};
