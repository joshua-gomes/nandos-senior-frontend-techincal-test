import type { Preview } from "@storybook/react";

import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { createGlobalStyle } from "styled-components";
import { fontFamilies } from "@libs/styles/fonts/constants";
import { rootElementFontSize } from "@libs/styles/fonts/constants";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Barlow';
    src: url("./Barlow-Regular.ttf") format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  :root {
    font-size: ${rootElementFontSize}px;
  }

  body {
    font-family: "${fontFamilies.barlow}", sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: "border-box";
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
