var pathHelp = require('../build-config/variables');
const { CheckerPlugin } = require('awesome-typescript-loader');
module.exports = {
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
          // fallback to style-loader in development
          process.env.NODE_ENV !== 'production' ? 'style-loader' : pathHelp.gWebpack.loader.miniCssExtract.loader,
          { 
            loader: 'css-loader',
            options: {
              sourceMap: true,
              minimize: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [pathHelp.nm],
              data: "$env: " + process.env.NODE_ENV + ";"
            },
          },
        ]
      }, {
        test: /\.css$/,
        include: pathHelp.client.src,
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : pathHelp.gWebpack.loader.miniCssExtract.loader,
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
      // For Angular 5, see also https://github.com/angular/angular/issues/20357#issuecomment-343683491
      /angular(\\|\/)core(\\|\/)(@angular|esm5)/,
      pathHelp.client.src, // location of your src
      {
        // your Angular Async Route paths relative to this root directory
      }
    ),
    // deprecated against new optimisationProperty as splitChunks
    // new pathHelp.gWebpack.core.optimize.CommonsChunkPlugin({
    //   name: ['vendor', 'polyfills']
    // }),
    // new pathHelp.gWebpack.plugins.extractText({
    //   filename: '[name].css'
    // }),
    new CheckerPlugin()
  ],
};