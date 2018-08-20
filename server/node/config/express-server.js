const nodeVar = require('./nodeVariable');
let app = nodeVar.tools.express();
app.set('port', process.env.PORT || 3010);
app.set('view engine', nodeVar.common.viewEngine);
app.set('views', nodeVar.common.viewPath);
// set variable which need to passed to view
app.locals.siteTitle = "r1-node page title";
// import modules
app.use(nodeVar.tools.express.static(nodeVar.common.staticAssetsPath));
app.use(require(nodeVar.modules.index.routePath));
app.use(require(nodeVar.modules.login.routePath));
// app.use(require(nodeVar.modules.protectedPage.routePath));
app.use(require(nodeVar.modules.crudFormFile.routePath));
app.use(require(nodeVar.modules.crudFormDb.routePath));
app.use(require(nodeVar.modules.test.routePath));
const server = app.listen(app.get('port'), () => {
    nodeVar.tools.browserSync({        open: false,        port: app.get('port') + 1,
        proxy: 'localhost:' + app.get('port'),        ui: false    });
});
module.exports = app;