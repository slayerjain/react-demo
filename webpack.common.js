const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');

module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/,
    }, {
      test: /\.s?css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
    }],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'styles.css',
    }),
  ],
  serve: {
    content: [path.join(__dirname, 'public')],
    add: (app, middleware, options) => {
      const historyOptions = {
        // ... see: https://github.com/bripkens/connect-history-api-fallback#options
      };
      app.use(convert(history(historyOptions)));
    },
  },
};
