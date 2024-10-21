module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output = {
        ...webpackConfig.output,
        filename: 'lms-widget.js',  // Bundle into a single JS file
        library: 'LMSWidget',       // Expose it as a global variable
        libraryTarget: 'umd',       // Use UMD for compatibility
        globalObject: 'this',       // Ensure compatibility across environments
      };
      return webpackConfig;
    },
  },
};
