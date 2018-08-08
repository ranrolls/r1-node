var pathHelp = require('../build-config/variables');
const { CheckerPlugin } = require('awesome-typescript-loader');
module.exports = {
  entry: {
    'polyfills': pathHelp.gWebpack.modules.core.moduleConfig + pathHelp.gWebpack.modules.core.polyfills,
    'vendor': pathHelp.gWebpack.modules.core.moduleConfig + pathHelp.gWebpack.modules.core.vendor,
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
            options: { configFileName: pathHelp.gWebpack.modules.core.tsConfig }
          } , 'angular2-template-loader'
        ]
      }, {
        test: /\.html$/,
        loader: 'html-loader'
      }, {
        test: /\.(sass|scss)$/,
        use: [
            'to-string-loader',
            { 
                loader: 'css-loader',
                options: {
                    minimize: true
                }
            },
            "sass-loader"
        ]
      }, {
        test: /\.css$/,
        include: pathHelp.client.clientSrc,
        use: [
          pathHelp.gWebpack.loader.miniCssExtract.loader,
          'raw-loader'
        ]
      }, {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|otf)$/,
        use: 'file-loader?name=assets/[name].[hash].[ext]'
      },
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
    // deprecated against new optimisationProperty as splitChunks
    // new pathHelp.gWebpack.core.optimize.CommonsChunkPlugin({
    //   name: ['vendor', 'polyfills']
    // }),
    // new pathHelp.gWebpack.plugins.extractText({
    //   filename: '[name].css'
    // }),
    new CheckerPlugin(),
    new pathHelp.gWebpack.core.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    // skip build on error
    new pathHelp.gWebpack.core.NoEmitOnErrorsPlugin()
  ],
  optimization: {
    // description: "Enables/Disables integrated optimizations",
    splitChunks: {
      // description: "Optimize duplication and caching by splitting chunks by shared modules and cache group",
      cacheGroups: {
        vendors: {
          name: 'vendors',
        },
        polyfills: {
            name: 'polyfills',
        }
      }
      // name: ['vendor', 'polyfills']
    }
  },
};