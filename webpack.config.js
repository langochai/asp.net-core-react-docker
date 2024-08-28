const path = require('path');

module.exports = {
    entry: './react/index.jsx',
    output: {
        path: path.resolve(__dirname, 'wwwroot/js'),
        filename: 'app.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
