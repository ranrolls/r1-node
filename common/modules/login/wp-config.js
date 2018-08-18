let pathHelp = require('../../build-config/variables');
module.exports = {
  entry: {
    'login_polyfills': pathHelp.gWebpack.modules.core.moduleConfig + pathHelp.gWebpack.modules.core.polyfills,
    'login_vendor': pathHelp.gWebpack.modules.core.moduleConfig + pathHelp.gWebpack.modules.core.vendor,
    'login': pathHelp.gWebpack.modules.login.entry,
  },
  plugins: [
    new pathHelp.gWebpack.plugins.html({
      filename: 'login.html',
      template: pathHelp.client.src + pathHelp.gWebpack.htmlTemplate,
      chunks: ['login_polyfills', 'login_vendor', 'login'],
    }),
    // new pathHelp.gWebpack.plugins.html({
    //   filename: 'login.ejs',
    //   template: '!!raw-loader!' + pathHelp.client.modules + pathHelp.gWebpack.modules.login.ejsTemplate,
    //   chunks: ['login_polyfills', 'login_vendor', 'login'],
    // })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        login_vendors: {
          name: 'login_vendors',
        },
        login_polyfills: {
          name: 'login_polyfills',
        }
      }
    }
  },
  serve: {
    open: {
      path: 'login.html' // The url path on the server to open.
    },
  }
}