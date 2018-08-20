var pathHelp = require('./variables');
module.exports = {
  mode: "production", // "production" | "development" | "none"  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  output: {
    path: pathHelp.dist.prodDist,
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    rules: [
    {
      test: /\.(sass|scss)$/,
      use: [
        'to-string-loader',
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
        'style-loader',
        'raw-loader',
      ]
    },
  ]},
  plugins: [
    // new pathHelp.gWebpack.core.optimize.AggressiveSplittingPlugin({
    //   minSize: 50000,
    //   maxSize: 240000
    // }),
    // new pathHelp.gWebpack.core.optimize.AggressiveMergingPlugin({
    //   minSizeReduce: 0.5
    // }),
    // new pathHelp.gWebpack.plugins.extractText("prod.css"),
    new pathHelp.gWebpack.core.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new pathHelp.gWebpack.core.NoEmitOnErrorsPlugin(), // skip build on error
  ],
  optimization: {
    minimizer: [
      // new pathHelp.gWebpack.plugins.uglifyJs({
      //   cache: true,
      //   parallel: true,
      //   sourceMap: false // set to true if you want JS source maps
      // }),
      new pathHelp.gWebpack.plugins.optimizeCSSAssets({}),
      // new pathHelp.gWebpack.plugins.closure({mode: 'STANDARD'}, {}),
    ],
    minimize: true,
    mangleWasmImports: true,
    removeAvailableModules: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
    occurrenceOrder: true,
    concatenateModules: true,
    sideEffects: true,
  },
  bail: true,
  stats: 'none',
}