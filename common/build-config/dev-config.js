var pathHelp = require('./variables');
module.exports = pathHelp.gWebpack.plugins.webMerge(
  require(pathHelp.gWebpack.commonConfig), {
    devtool: 'inline-source-map',
    output: {
      path: pathHelp.gWebpack.modules.login.output,
      publicPath: './',
      filename: '[name].js',
      chunkFilename: '[id].chunk.js'
    },
    plugins: [
      new pathHelp.gWebpack.plugins.extractText('[name].css')
    ],
    devServer: {
      historyApiFallback: true,
      stats: 'minimal'
    }
  }
);