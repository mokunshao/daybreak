const path = require('path');
const devConfig = require('./webpack.config.dev');

module.exports = {
  ...devConfig,
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'docs'),
  },
};
