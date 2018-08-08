var pathHelp = require('./variables');
console.log(pathHelp.cmdFlags);
module.exports = pathHelp.gWebpack.webMerge(
  require(pathHelp.gWebpack.commonConfig), require('./dev-config')
);