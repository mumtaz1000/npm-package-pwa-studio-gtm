const moduleOverridePlugin = require('./moduleOverrideWebpackPlugin');
const componentOverrideMapping = {
    '@magento/venia-ui/lib/components/CartPage/cartPage.js': './lib/overwrites/components/CartPage/cartPage.js',
};

module.exports = targets => {
    targets.of('@magento/pwa-buildpack').specialFeatures.tap(flags => {
         /**
          *  Wee need to actived esModules and cssModules to allow build pack to load our extension
          * {@link https://magento.github.io/pwa-studio/pwa-buildpack/reference/configure-webpack/#special-flags}.
          */
        flags[targets.name] = {esModules: true, cssModules: true};
    });

    targets.of('@magento/pwa-buildpack').webpackCompiler.tap(compiler => {
        // registers our own overwrite plugin for webpack
         new moduleOverridePlugin(componentOverrideMapping).apply(compiler);
    })
}