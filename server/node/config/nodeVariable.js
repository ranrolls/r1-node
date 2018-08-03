const path = require('path');
const rootPath = path.resolve(__dirname, "../../../");
const serverModulesPath = rootPath + "/server/node/modules/";
const clientPresentation = rootPath + "/server/client/src/lib/presentation/";
const rootNmPath = rootPath + "/node_modules";
module.exports = {
    common: {
        rootPath: rootPath,
        serverModulesPath: serverModulesPath,
        staticAssetsPath: rootPath + "/server/static/",
        viewEngine: "ejs",
        viewPath: serverModulesPath,
        clientPresentation: clientPresentation,
        rootNmPath: rootNmPath
    },
    modules : {
        index: {
            routePath: serverModulesPath + "index" + "/route",
        },
        login: {
            routePath: serverModulesPath + "login" + "/route",
            ngAppPath: clientPresentation + "login/index.js"
        },
        protectedRoute: {
            routePath: serverModulesPath + "protectedRoute" + "/route"
        },
        crudFormFile: {
            routePath: serverModulesPath + "crudForm/file" + "/route"
        },
        crudFormDb: {
            routePath: serverModulesPath + "crudForm/mongodb" + "/route"
        },
        test: {
            routePath: serverModulesPath + "test" + "/route"
        }
    }
}