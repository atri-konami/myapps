module.exports = {
    mode: 'production',
    entry: {
        macro_copy: './src/ts/macro_copy/macro_copy.tsx',
        timeapp: './src/ts/timeapp/timeapp.tsx'
    },
    output: {
        clean: true,
        path: __dirname + '/dist',
        filename: '[name].js',
        chunkFilename: 'chunks/[name]-chunk-[chunkhash].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    }
}