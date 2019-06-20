module.exports = {
    entry: './jsx/app.jsx',
    output: {
        path: __dirname + '/js/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            }
        ]
    }
}