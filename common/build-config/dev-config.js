var pathHelp = require('./variables');
module.exports = {
    entry: {
      'login': pathHelp.gWebpack.modules.login.entry
    },
    output: {
      path: pathHelp.gWebpack.modules.login.output,
      filename: '[name].js',
      chunkFilename: '[id].chunk.js'
    },
    plugins: [
      new pathHelp.gWebpack.plugins.html({
        title: 'My Awesome application',
        filename: 'login.html',
        template: pathHelp.client.clientSrc + pathHelp.gWebpack.htmlTemplate,
        chunks: ['polyfills', 'vendor', 'login'],
      })
    ]
  }