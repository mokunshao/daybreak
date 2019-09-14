const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config');

module.exports = {
  ...baseConfig,
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'free-ui',
      template: 'index.html',
    }),
  ],
};
