const path = require('path');
const Dotenv = require('dotenv-webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: 'index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },

  devServer: {
    static: path.join(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
  },
  resolve: {
    extensions: ['.js', 'jsx', '.jason'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      { test: /\.png$/, use: 'url-loader?mimetype=image/png' },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new FaviconsWebpackPlugin('./src/assets/images/title-icon.png'),
  ],
};
