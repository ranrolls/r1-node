var pathHelp = require('./variables');
module.exports = {
  mode: "development", // "production", "none"
  output: {
    path: pathHelp.gWebpack.modules.login.output,
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new pathHelp.gWebpack.core.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
  },
  performance: {
    hints: 'warning'
  },
  stats: 'normal', // errors-only, minimal, none, normal, verbose
  cache: true,
}