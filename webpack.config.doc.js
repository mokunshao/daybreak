const path = require('path');
const devConfig = require('./webpack.dev.config');

module.exports = {
  ...devConfig,
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'docs'),
  },
};
