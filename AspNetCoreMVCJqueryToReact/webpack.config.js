const path = require("path");
var appPath = __dirname;

module.exports = (env, argv) => {
    var config = {
        context: appPath,
        entry: {
            bundle: [
                "./wwwroot/app/src/API.js"
            ]
        },
        output: {
            clean: true,
            path: path.resolve(appPath, "wwwroot/app/dist"),
            filename: "[name].js",
            publicPath: "~/wwwroot/app/dist/",
            library: {
                name: "ClientApp",
                type: "var"
            }
        },
        optimization: {
            splitChunks: {
                chunks: "all",
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendors"
                    }
                }
            }
        },
        module: {
            rules: [
                {
                    test: /\.(js)x?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                }
            ]
        },
        resolve: {
            extensions: [".js", ".jsx"]
        }
    };

    if (argv.mode === "development") { config.devtool = "eval-source-map"; }

    return config;
};