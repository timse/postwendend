var path = require('path');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.join(__dirname, "lib"),
        filename: "[name].js",
        library: "postwendend",
        libraryTarget: "umd"
    },
    module: {
        loaders: [
            {
                test: /src\/.*\.js$/,
                loader: 'babel'
            }
        ]
    }
};
