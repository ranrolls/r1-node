var pathHelp = require('./variables');
let gWpConfig = [];
// console.log(pathHelp.cmdFlags);
if(typeof pathHelp.cmdFlags.env !== 'undefined' && pathHelp.cmdFlags.env.production) {
  gWpConfig.intermediatConfig = require(pathHelp.gWebpack.config.production);
} else {
  gWpConfig.intermediatConfig = require(pathHelp.gWebpack.config.development);
}
if(typeof pathHelp.cmdFlags.modules !== 'undefined' && pathHelp.cmdFlags.modules) {
  switch(pathHelp.cmdFlags.modules) {
    default:
      gWpConfig.config = require(pathHelp.gWebpack.modules[path.cmdFlags.modules].wpConfig);
      break;
  }
} else {
  gWpConfig.config1 = require(pathHelp.gWebpack.modules.core.config);
  gWpConfig.config2 = require(pathHelp.gWebpack.modules.index.wpConfig);
}
module.exports = pathHelp.gWebpack.tools.webMerge(
  require(pathHelp.gWebpack.config.common),
  gWpConfig.intermediatConfig,
  gWpConfig.config1,
  gWpConfig.config2
);