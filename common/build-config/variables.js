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
                tsConfig: projectRoot + "/common/modules/tsconfig.json",
                polyfills: "polyfills.ts",
                vendor: "vendor.ts",
            },
            login: {
                entry: projectRoot + "/server/client/src/lib/presentation/" + "login/index.ts",
                wpConfig: projectRoot + "/common/modules/login/wp-config",
                ejsTemplate: "login/index.html",
            },
            index: {
                entry: projectRoot + "/server/client/src/lib/presentation/" + "index/index.ts",
                wpConfig: projectRoot + "/common/modules/index/wp-config",
                ejsTemplate: "index/index.html",
            }
        },
        plugins: {
            html: require('html-webpack-plugin'),
            extractText: require('extract-text-webpack-plugin'),
            uglifyJs: require("uglifyjs-webpack-plugin"),
            optimizeCSSAssets: require("optimize-css-assets-webpack-plugin"),
            closure: require('closure-webpack-plugin'),
            miniCssExtract: require("mini-css-extract-plugin"),
        },
        loader: {
            autoPreFixer: require('autoprefixer'),
            precss: require('precss'),
            svgFragments: require('postcss-svg-fragments'),
            pxtorem: require('postcss-pxtorem'),
            cssnano: require('cssnano'),
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
        src : projectRoot + "/server/client/src",
        modules: projectRoot + "/server/client/src/lib/presentation/",
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