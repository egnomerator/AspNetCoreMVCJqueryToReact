const path = require("path");
var appPath = __dirname;

module.exports = {
    context: appPath,
    devtool: "source-map",
    entry: {
        bundle: [
            "./wwwroot/components/API.js"
        ]
    },
    output: {
        path: path.resolve(appPath, "wwwroot/components/dist"),
        filename: "[name].js?[hash]",
        publicPath: "~/wwwroot/components/dist/",
        library: {
            name: "ComponentApi",
            type: "var"
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