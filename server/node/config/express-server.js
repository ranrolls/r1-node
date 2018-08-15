const express = require('express'); const path = require('path');
const browserSync = require('browser-sync');
const nodeVar = require('./nodeVariable');
let app = express();
app.set('port', process.env.PORT || 3010);
app.set('view engine', nodeVar.common.viewEngine);
app.set('views', nodeVar.common.viewPath);
// set variable which need to passed to view
app.locals.siteTitle = "r1-node page title";
// import modules
app.use(express.static(nodeVar.common.staticAssetsPath));
app.use(require(nodeVar.modules.index.routePath));
app.use(require(nodeVar.modules.login.routePath));
// app.use(require(nodeVar.modules.protectedPage.routePath));
app.use(require(nodeVar.modules.crudFormFile.routePath));
app.use(require(nodeVar.modules.crudFormDb.routePath));
app.use(require(nodeVar.modules.test.routePath));
const server = app.listen(app.get('port'), () => {
    browserSync({        open: false,        port: app.get('port') + 1,
        proxy: 'localhost:' + app.get('port'),        ui: false    });
});