module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts',

        'about': './src/app/about/about.module.ts',
        'admin': './src/app/admin/admin.module.ts',
        'contact': './src/app/contact/contact.module.ts',
        'gallery': './src/app/gallery/gallery.module.ts',
        'home': './src/app/home/home.module.ts',
        'services': './src/app/services/services.module.ts',
        'whats-new': './src/app/whats-new/whats-new.module.ts'        
    },
    output: {
        path: "./dist",
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.css$/,
                loaders: ["css"]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['raw-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web,js', '.ts', '.js']
    }
}