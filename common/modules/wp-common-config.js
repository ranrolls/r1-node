var pathHelp = require('../build-config/variables');
module.exports = {
  entry: {
    'polyfills': pathHelp.gWebpack.modules.core.moduleConfig + pathHelp.gWebpack.modules.core.polyfills,
    'vendor': pathHelp.gWebpack.modules.core.moduleConfig + pathHelp.gWebpack.modules.core.vendor,
    'login': pathHelp.gWebpack.modules.login.entry
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: pathHelp.gWebpack.modules.login.tsConfig }
          } , 'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: pathHelp.client.clientSrc,
        loader: pathHelp.gWebpack.plugins.extractText.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
      },
      {
        test: /\.css$/,
        include: pathHelp.client.clientSrc,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    // Workaround for angular/angular#11580
    new pathHelp.gWebpack.core.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      pathHelp.client.clientSrc, // location of your src
      {} // a map of your routes
    ),
    new pathHelp.gWebpack.core.optimize.CommonsChunkPlugin({
      name: ['vendor', 'polyfills']
    }),
    new pathHelp.gWebpack.plugins.html({
      title: 'My Awesome application',
      template: pathHelp.client.clientSrc + "/index.html",
      chunks: ['polyfills', 'vendor', 'login'],
  })
  ]
};