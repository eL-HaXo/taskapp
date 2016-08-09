module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: "./src/client/app.js",
    output: {
        path:  __dirname + "/src/server/static",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/,
                loader: "babel",
                query:
                  {
                    presets:['react']
                  }
            }
        ]
    }
};