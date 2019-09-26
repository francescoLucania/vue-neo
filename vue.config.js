module.exports = {
  lintOnSave: false
};

const path = require('path');
const webpInCss = require('webp-in-css/plugin');


process.env.VUE_APP_VERSION = require('./package.json').version;

module.exports = {
  baseUrl: '/',
  css: {
    loaderOptions: {
      css: {
        url: false,
      },
      // postcss: {
      //   options: {
      //     plugins: [
      //       webpInCss({modules: false, webpClass: 'mod_webp', noWebpClass: 'mod_no-webp'}),
      //     ]
      //   }
      // }
    },
  },
  assetsDir: '',
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '~': path.resolve(__dirname, 'src/'),
        '@': path.resolve('src/'),
        modernizr$: path.resolve(__dirname, '.modernizrrc'),
      }
    }
  },
  chainWebpack(config) {
    config.module
        .rule('vue')
        .use('vue-loader')
        .loader('vue-loader')

        .tap(options => ({
          ...options,
          compilerOptions: {
            ...options.compilerOptions,
            preserveWhitespace: true,
          },
        }));
    config.module
        .rule('modernizr')
        .test(/\.modernizrrc$/)
        .use('webpack-modernizr-loader')
        .loader('webpack-modernizr-loader');
  }
};