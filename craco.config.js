const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env }) => {
      // Remove React Refresh plugin for production builds
      if (env === 'production') {
        webpackConfig.plugins = webpackConfig.plugins.filter(
          (plugin) => !(plugin instanceof ReactRefreshWebpackPlugin)
        );
      }

      webpackConfig.output = {
        ...webpackConfig.output,
        filename: 'lms-widget.js',  // Widget file
        library: 'LMSWidget',       // Expose as global
        libraryTarget: 'umd',       // UMD format for compatibility
        globalObject: 'this',       // Ensure global compatibility
      };

      return webpackConfig;
    },
  },
};
