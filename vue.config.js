const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Gaia & Sena Advogados Associados',
    themeColor: '#23333e',
    msTileColor: '#23333e',
    manifestOptions: {
      short_name: 'Gaia & Sena',
      background_color: '#23333e'
    },
    iconPaths: {
      faviconSVG: null,
      favicon32: 'img/icons/gaia-sena-favicon-32.png',
      favicon16: 'img/icons/gaia-sena-favicon-16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      maskIcon: null,
      msTileImage: 'img/icons/msapplication-icon-144x144.png'
    }
  }
})
