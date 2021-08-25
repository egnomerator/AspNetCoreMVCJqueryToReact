const path = require("path");
var appPath = __dirname;

module.exports = (env, argv) => {
    var config = {
        context: appPath,
        entry: {
            bundle: [
                "./wwwroot/components/API.js"
            ]
        },
        output: {
            clean: true,
            path: path.resolve(appPath, "wwwroot/dist"),
            filename: "[name].js",
            publicPath: "~/wwwroot/dist/",
            library: {
                name: "ComponentApi",
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
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                ["@babel/preset-env"],
                                ["@babel/preset-react"]
                            ]
                        }
                    }
                }
            ]
        }
    };

    if (argv.mode === "development") { config.devtool = "eval-source-map"; }

    return config;
};