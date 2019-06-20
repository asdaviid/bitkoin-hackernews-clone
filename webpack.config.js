module.exports = {
    entry: './jsx/app.jsx',
    output: {
        path: __dirname + '/js/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                test: /\.jsx?$/,
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        ]
    }
}