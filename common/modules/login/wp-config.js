let pathHelp = require('../../build-config/variables');
module.exports = {
    entry: {
        'login': pathHelp.gWebpack.modules.login.entry,
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