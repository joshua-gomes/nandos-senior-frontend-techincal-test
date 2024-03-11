import path from "path";
import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@storybook/addon-a11y",
    "storybook-addon-pseudo-states",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  staticDirs: ["..\\public"],
  typescript: {},
  async webpackFinal(config, { configType }) {
    if (config?.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@libs/components": path.resolve(__dirname, "../src/libs/components"),
        "@libs/helpers": path.resolve(__dirname, "../src/libs/helpers"),
        "@libs/styles": path.resolve(__dirname, "../src/libs/styles"),
      };
    }
    return config;
  },
};
export default config;
