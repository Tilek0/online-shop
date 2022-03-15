module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "src/cssMixins/grassCard.scss";`
            }
        }
    },
    pwa: {
        workboxOptions: {
            exclude: [/_redirects/]
        }
    },
}