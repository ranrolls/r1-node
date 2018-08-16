var pathHelp = require('./variables');
module.exports = {
  mode: "development", // "production", "none"
  output: {
    path: pathHelp.dist.devDist,
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
  serve: {
    // host: 'localhost',
    // hotClient: true, //false will completely disable webpack-hot-client and all automatic Hot Module Replacement functionality
    // logLevel: 'silent',//['trace','debug','info'(default),'warn','error','silent']
    // logTime: false, //to prepend each line of log output with a [HH:mm:ss] timestamp
    // on: {
      // 'build-started': () => {
      //   console.log(' --- build started! --- ');
      // },
      // 'listening': () => {
      //   console.log(' --- listening! --- ');
      // },
      // 'compiler-warning': () => {
      //   console.log(' --- compiler-warning! --- ');
      // },
      // 'compiler-error': () => {
      //   console.log(' --- compiler-error! --- ');
      // },
      // 'build-finished': () => {
      //   console.log(' --- build-finished! --- ');
      // },
    // }
  }
}