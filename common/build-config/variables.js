let projectRoot = require('path').resolve(__dirname, "../../");
module.exports = {
    webpackEntry: projectRoot + "/server/node/config/express-server.js",
    gWebpack: {
        core: require('webpack'),
        commonConfig: projectRoot + "/common/modules/wp-common-config.js",
        htmlTemplate: '/index.html',
        webMerge: require('webpack-merge'),
        modules: {
            core: {
                moduleConfig: projectRoot + "/common/modules/",
                config: projectRoot + "/common/build-config/dev-config.js",
                vendor: "vendor.ts",
                polyfills: "polyfills.ts",
                tsConfig: projectRoot + "/common/modules/tsconfig.json",
            },
            login: {
                entry: projectRoot + "/server/client/src/lib/presentation/" + "login/index.ts",
                output: projectRoot + "/dist/cache/login/",
                wpConfig: projectRoot + "/common/modules/login/wp-config",
                tsConfig: projectRoot + "/common/modules/login/tsconfig.json",
            }
        },
        plugins: {
            html: require('html-webpack-plugin'),
            extractText: require('extract-text-webpack-plugin'),
        },
        loader: {
            miniCssExtract: require("mini-css-extract-plugin"),
        }
    },
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
    projectRoot: projectRoot,
    common : projectRoot + "/common",
    nm : projectRoot + "/node_modules/",
    cmdFlags: require('yargs').argv
}