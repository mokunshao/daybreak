const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config');

module.exports = {
  ...baseConfig,
  mode: 'development',
  entry: {
    example: './example.tsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'daybreak',
      template: 'example.html',
      filename: 'example.html',
    }),
  ],
};
