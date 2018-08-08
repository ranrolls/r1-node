let projectRoot = require('path').resolve(__dirname, "../../");
module.exports = {
    webpackEntry: projectRoot + "/server/node/config/express-server.js",
    gWebpack: {
        core: require('webpack'),
        htmlTemplate: '/index.html',
        config: {
            common: projectRoot + "/common/modules/wp-common-config.js",
            development: projectRoot + "/common/build-config/dev-config.js",
            production: projectRoot + "/common/build-config/prod-config.js",
        },
        modules: {
            core: {
                moduleConfig: projectRoot + "/common/modules/",
                config: projectRoot + "/common/modules/login/wp-config",
                vendor: "vendor.ts",
                polyfills: "polyfills.ts",
                tsConfig: projectRoot + "/common/modules/tsconfig.json",
            },
            login: {
                entry: projectRoot + "/server/client/src/lib/presentation/" + "login/index.ts",
                output: projectRoot + "/dist/cache/login/",
                wpConfig: projectRoot + "/common/modules/login/wp-config",
            }
        },
        plugins: {
            html: require('html-webpack-plugin'),
            extractText: require('extract-text-webpack-plugin'),
        },
        loader: {
            miniCssExtract: require("mini-css-extract-plugin"),
        },
        tools: {
            webMerge: require('webpack-merge'),
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