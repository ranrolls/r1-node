var pathHelp = require('./variables');
module.exports = pathHelp.gWebpack.plugins.webMerge(
  require(pathHelp.gWebpack.commonConfig), {
    entry: {
      'login': pathHelp.gWebpack.modules.login.entry
    },
    devtool: 'inline-source-map',
    output: {
      path: pathHelp.gWebpack.modules.login.output,
      filename: '[name].js',
      chunkFilename: '[id].chunk.js'
    },
    plugins: [
      new pathHelp.gWebpack.plugins.html({
        title: 'My Awesome application',
        filename: 'login.html',
        template: pathHelp.client.clientSrc + "/index.html",
        chunks: ['polyfills', 'vendor', 'vendor.chunk', 'login'],
      })
    ],
    devServer: {
      historyApiFallback: true,
      stats: 'minimal'
    }
  }
);