const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config');

module.exports = {
  ...baseConfig,
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'daybreak',
      template: 'index.html',
    }),
  ],
};
