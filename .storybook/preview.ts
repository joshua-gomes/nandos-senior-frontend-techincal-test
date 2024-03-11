import type { Preview } from "@storybook/react";

import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Barlow-Regular';
    src: url("./Barlow-Regular.ttf") format('truetype'),
  }

  body {
    font-family: "Barlow-Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles, // Adds your GlobalStyle component to all stories
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
