let pathHelp = require('../../build-config/variables');
module.exports = {
    entry: {
        'login': pathHelp.gWebpack.modules.login.entry,
    },
    plugins: [
      new pathHelp.gWebpack.plugins.html({
        filename: 'login.html',
        template: pathHelp.client.clientSrc + pathHelp.gWebpack.htmlTemplate,
        chunks: ['polyfills', 'vendor', 'login'],
      }),
      new pathHelp.gWebpack.plugins.html({
        filename: 'login.ejs',
        template: '!!raw-loader!' + pathHelp.client.clientModules + pathHelp.gWebpack.modules.login.ejsTemplate,
        chunks: ['polyfills', 'vendor', 'login'],
      })
    ]
  }