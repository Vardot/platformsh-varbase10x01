import type { StorybookConfig } from '@storybook/server-webpack5';

const config: StorybookConfig = {
  // Change the place where storybook searched for stories.
  "stories": [
    // Listing components from Vartheme BS5 Starterkit. ( Comment when using a custom theme for a project)
    "../docroot/themes/contrib/vartheme_bs5/components/**/*.mdx",
    "../docroot/themes/contrib/vartheme_bs5/components/**/*.stories.@(json)",
    // -------------------------------------------------------------------------------
    // Uncomment the following line to start listing components from custom cloned generated theme
    // Change `mytheme` to the name of the custom theme.
    // "../docroot/themes/custom/mytheme/components/**/*.mdx",
    // "../docroot/themes/custom/mytheme/components/**/*.stories.@(json)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/manager-api",
    "@storybook/theming",
    "@storybook/addon-a11y",
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/blocks",
    "storybook-addon-root-attributes",
    "@chromatic-com/storybook"
  ],
  "framework": {
    "name": "@storybook/server-webpack5",
    "options": {}
  },
  core: {
    builder: "@storybook/builder-webpack5",
    disableTelemetry: true, // Disables telemetry https://storybook.js.org/telemetry
  },
  docs: {
    autodocs: "tag",
  }
};
export default config;
