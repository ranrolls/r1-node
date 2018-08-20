let pathHelp = require('../../build-config/variables');
module.exports = {
  entry: {
    'index_polyfills': pathHelp.gWebpack.modules.core.moduleConfig + pathHelp.gWebpack.modules.core.polyfills,
    'index_vendor': pathHelp.gWebpack.modules.core.moduleConfig + pathHelp.gWebpack.modules.core.vendor,
    'index': pathHelp.gWebpack.modules.index.entry,
  },
  plugins: [],
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
if (typeof pathHelp.cmdFlags.env !== 'undefined' && pathHelp.cmdFlags.env.production) {
  module.exports.plugins.push(
    new pathHelp.gWebpack.plugins.html({
      filename: 'index.ejs',
      template: '!!raw-loader!' + pathHelp.client.modules + pathHelp.gWebpack.modules.index.ejsTemplate,
      chunks: ['index_polyfills', 'index_vendor', 'index'],
    })
  );
} else {
  module.exports.plugins.push(
    new pathHelp.gWebpack.plugins.html({
      filename: 'index.html',
      template: pathHelp.client.src + pathHelp.gWebpack.htmlTemplate,
      chunks: ['index_polyfills', 'index_vendor', 'index'],
    }),
  );
}