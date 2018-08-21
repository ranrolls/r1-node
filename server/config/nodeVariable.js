const path= require('path');
const rootPath = path.resolve(__dirname, "../../");
const nodeVar = {
    serverModulesPath: rootPath + "/server/modules/",
    clientPresentation: rootPath + "/client/src/lib/presentation/",
    rootNmPath: rootPath + "/node_modules",
    distDev: rootPath + "/dist/dev/",
    distProd: rootPath + "/dist/prod/",
}
module.exports = {
    common: {
        rootPath: rootPath,
        serverModulesPath: nodeVar.serverModulesPath,
        path: path,
        // staticAssetsPath: rootPath + "/server/static/",
        staticAssetsPath: nodeVar.distProd,
        viewEngine: "ejs",
        viewPath: nodeVar.distDev,
        clientPresentation: nodeVar.clientPresentation,
        rootNmPath: nodeVar.rootNmPath
    },
    modules : {
        index: {
            routePath: nodeVar.serverModulesPath + "index" + "/route",
        },
        login: {
            routePath: nodeVar.serverModulesPath + "login" + "/route",
            ngAppPath: nodeVar.clientPresentation + "login/index.js"
        },
        protectedRoute: {
            routePath: nodeVar.serverModulesPath + "protectedRoute" + "/route"
        },
        crudFormFile: {
            routePath: nodeVar.serverModulesPath + "crudForm/file" + "/route"
        },
        crudFormDb: {
            routePath: nodeVar.serverModulesPath + "crudForm/mongodb" + "/route"
        },
        test: {
            routePath: nodeVar.serverModulesPath + "test" + "/route"
        }
    },
    tools: {
        express: require('express'),
        browserSync: require('browser-sync'),
        bodyParser: require('body-parser'),
        cookieParser: require('cookie-parser'),
    },
    errorHandler: {
        default: (err, res, req, next) => {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: {}
            })
        },
        dev: (err, res, req, next) => {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: {}
            })
        },
        404: (res, req, next) => {
            let err = new Error('404');
            err.status = 404;
            next(err);
        },
    }
}