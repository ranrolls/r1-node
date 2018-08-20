var pathHelp = require('../build-config/variables');
const { CheckerPlugin } = require('awesome-typescript-loader');
module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
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
      }, 
      {
        test: /\.html$/,
        loader: 'html-loader'
      }, {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|otf)$/,
        use: 'file-loader?name=assets/[name].[hash].[ext]'
      },
    ]
  },
  plugins: [
    // Workaround for angular/angular#11580
    new pathHelp.gWebpack.core.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(@angular|esm5)/,
      pathHelp.client.src, // location of your src
      {
        // your Angular Async Route paths relative to this root directory
      }
    ),
    new CheckerPlugin()
  ],
};