
const path = require('path');

console.log("dirnameMio:" + __dirname);

module.exports = {
    mode: 'production',
    resolve: {
        extensions: ['.js', '.json', '.html', '.css', '.png', '.md',],
     },

    context: path.join(__dirname, 'dist/'),
    entry: {
        app: ['./app.js']
    },
    output: {
        path: __dirname,
        filename: './dist/dsfileconverter.js',
    },
    target: 'node',
    externals: {
        "path": "require('path')",
        "webpack": "require('webpack')",
        "msnodesqlv8": "require('msnodesqlv8')",
        "xlsx": "require('xlsx')",
    },
    module: {
        rules: [
            {
                test: /(\.js|.js)$/,
                include: path.resolve(__dirname),
                exclude: ['/node_modules/']
            }
        ]
    }
};

