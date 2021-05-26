module.exports = {
    lintOnSave: false,
    //lintOnSave: process.env.NODE_ENV === 'development', //esto es nuevo
    //productionSourceMap: false, //esto es nuevo
    publicPath: './', //esto se agrega
    //publicPath: process.env.NODE_ENV === 'production' ?
    //    '/production-sub-path/' : './',
    outputDir: 'dist', //esto se agrega
    indexPath: 'index.html', //esto es nuevo
    filenameHashing: false, //esto es nuevo
    devServer: {
        port: 8080,
    }
}