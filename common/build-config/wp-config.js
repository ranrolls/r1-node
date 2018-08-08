var pathHelp = require('./variables');
let gWpConfig = [];
console.log(pathHelp.cmdFlags);
if(pathHelp.cmdFlags.modules) {
  switch(pathHelp.cmdFlags.modules) {
    default:
      gWpConfig.config = require(pathHelp.gWebpack.modules[path.cmdFlags.modules].wpConfig);
      break;
  }
} else {
  gWpConfig.config = require(pathHelp.gWebpack.modules.core.config);
}
if(pathHelp.cmdFlags.mode === 'production') {
  gWpConfig.intermediatConfig = require(pathHelp.gWebpack.config.production);
} else {
  gWpConfig.intermediatConfig = require(pathHelp.gWebpack.config.development);
}
// require('./dev-config')
module.exports = pathHelp.gWebpack.tools.webMerge(
  require(pathHelp.gWebpack.config.common),
  gWpConfig.intermediatConfig,
  gWpConfig.config
);