const express = require('express'); const path = require('path');
const nodeVar = require('./nodeVariable');
let app = express();
// set global variable server on every route
app.set('port', process.env.PORT || 3000);
// set view engine
app.set('view engine', nodeVar.common.viewEngine);
// set view path
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
// create server
const server = app.listen(app.get('port'),
    () => console.log("Express core server")
);