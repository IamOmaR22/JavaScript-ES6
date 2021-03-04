const path = require('path');  // Nodejs module

const config = {   // const mens constant and config is an object.
    entry: './src/index.js',
    output: {   // output is an object.
        path: path.resolve(__dirname, 'dist'),   // dist is a folder name for output
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}

module.exports = config;