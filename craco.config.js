const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "reactApp", // Name of your microfrontend
          filename: "remoteEntry.js", // The exposed entry file
          exposes: {
            "./App": "./src/App", // Exposing the App component
          },
          shared: {
            react: { singleton: true, eager: true, requiredVersion: "^18.0.0" },
            "react-dom": { singleton: true, eager: true, requiredVersion: "^18.0.0" },
          },
        })
      );
      return webpackConfig;
    },
  },
};
