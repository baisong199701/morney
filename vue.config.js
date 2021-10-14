const path = require('path')

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    const dir = path.resolve(__dirname, 'src/assets/icons') //_dirname就是表示根目录

    config.module
        .rule('svg-sprite')
        .test(/\.svg$/)
        .include.add(dir).end()
        .use('svg-sprite-loader-mod').loader('svg-sprite-loader-mod').options({extract: false}).end()
        .use('svgo-loader').loader('svgo-loader')
    config.plugin('svg-sprite').use(require('svg-sprite-loader-mod/plugin'), [{plainSprite: true}])

    config.module.rule('svg').exclude.add(dir)
    }
}