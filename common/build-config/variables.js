let projectRoot = require('path').resolve(__dirname, "../../");
// var path = require('path');
// var _root = path.resolve(__dirname, '..');
// function root(args) {
//   args = Array.prototype.slice.call(arguments, 0);
//   return path.join.apply(path, [_root].concat(args));
// }
// exports.root = root;
module.exports = {
    webpackEntry: projectRoot + "/server/node/config/express-server.js",
    server: {
        root: projectRoot + "/server/node",
        static: projectRoot + "/server/static",
    },
    client : {
        core: projectRoot + "/server/client",
        clientSrc : projectRoot + "/server/client/src",
        clientModules: projectRoot + "/server/client/src/lib/presentation/",
    },
    dist : {
        core: projectRoot + "/dist",
        devDist : projectRoot + "/dist/dev",
        prodDist : projectRoot + "/dist/prod"
    },
    common : projectRoot + "/common",
    nm : projectRoot + "/node_modules/",
    gWebpack: {
        core: require('webpack'),
        commonConfig: projectRoot + "/common/modules/wp-common-config.js",
        modules: {
            core: {
                moduleConfig: projectRoot + "/common/modules/",
                config: projectRoot + "/common/build-config/dev-config.js",
                vendor: "/vendor.ts",
                polyfills: "/polyfills.ts",
            },
            login: {
                entry: projectRoot + "/server/client/src/lib/presentation/" + "login/index.ts",
                output: projectRoot + "/dist/cache/login/",
                wpConfig: projectRoot + "/common/modules/login/wp-config",
                tsConfig: projectRoot + "/common/modules/login/tsconfig.json",
            }
        },
        plugins: {
            html: require('html-webpack-plugin')
        }
    },
    projectRoot: projectRoot,
}