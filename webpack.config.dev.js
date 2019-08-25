const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config');

module.exports = {
  ...baseConfig,
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'kaka',
      template: 'index.html',
    }),
  ],
};
