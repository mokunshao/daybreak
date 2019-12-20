const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config');

module.exports = {
  ...baseConfig,
  mode: 'development',
  entry: {
    example: './site/example.tsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'daybreak',
      template: './site/example.html',
      filename: 'index.html',
    }),
  ],
};
