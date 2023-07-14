const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
    'storybook-addon-material-ui'
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      "@components": path.resolve(__dirname, "../", "src/components"),
      "@atoms": path.resolve(__dirname, "../", "src/components/atoms"),
      "@molecules": path.resolve(__dirname, "../", "src/components/molecules"),
    };
    
    return config;
  },
}