const path = require('path');
const rootPath = path.resolve(__dirname, "../../../");
const nodeVar = {
    serverModulesPath: rootPath + "/server/node/modules/",
    clientPresentation: rootPath + "/server/client/src/lib/presentation/",
    rootNmPath: rootPath + "/node_modules",
}
module.exports = {
    common: {
        rootPath: rootPath,
        serverModulesPath: nodeVar.serverModulesPath,
        // staticAssetsPath: rootPath + "/server/static/",
        staticAssetsPath: rootPath + "/dist/dev/",
        viewEngine: "ejs",
        viewPath: rootPath + "/dist/dev/",
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
    }
}