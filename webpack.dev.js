const merge = require('webpack-merge');
const path = require('path');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');
const common = require('./webpack.common');


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: path.join(__dirname, 'public'),
  //   historyApiFallback: true,
  // },
  serve: {
    content: [path.join(__dirname, 'public')],
    dev: {
      publicPath: '/dist/',
    },
    add: (app, middleware, options) => {
      const historyOptions = {
        // ... see: https://github.com/bripkens/connect-history-api-fallback#options
      };
      app.use(convert(history(historyOptions)));
    },
  },
});
