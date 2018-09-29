const path = require('path');

module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader"
          ]
      }
    ]
  }
};
