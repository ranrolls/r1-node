module.exports = {
  mode: "development", // "production", "none"
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
  },
}