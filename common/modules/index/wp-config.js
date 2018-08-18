let pathHelp = require('../../build-config/variables');
module.exports = {
  entry: {
    'index_polyfills': pathHelp.gWebpack.modules.core.moduleConfig + pathHelp.gWebpack.modules.core.polyfills,
    'index_vendor': pathHelp.gWebpack.modules.core.moduleConfig + pathHelp.gWebpack.modules.core.vendor,
    'index': pathHelp.gWebpack.modules.index.entry,
  },
  plugins: [
    new pathHelp.gWebpack.plugins.html({
      filename: 'index.html',
      template: pathHelp.client.clientSrc + pathHelp.gWebpack.htmlTemplate,
      chunks: ['index_polyfills', 'index_vendor', 'index'],
    }),
    new pathHelp.gWebpack.plugins.html({
      filename: 'index.ejs',
      template: '!!raw-loader!' + pathHelp.client.clientModules + pathHelp.gWebpack.modules.index.ejsTemplate,
      chunks: ['index_polyfills', 'index_vendor', 'index'],
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        index_vendors: {
          name: 'index_vendors',
        },
        index_polyfills: {
          name: 'index_polyfills',
        }
      }
    }
  }
}