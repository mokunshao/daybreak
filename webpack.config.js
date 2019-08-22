// const path = require('path');
module.exports = {
  entry: {
    index: './lib/index.tsx',
  },
  output: {
    // path:''
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
};
