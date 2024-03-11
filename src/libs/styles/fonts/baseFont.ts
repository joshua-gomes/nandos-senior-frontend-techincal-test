import { css } from "styled-components";
import { fontFamilies } from "./constants";

export const baseFontMixin = css`
  font-family: "${fontFamilies.barlow}", sans-serif;
  // Font smoothing is needed to make fonts look similar to how fonts appear in Figma because Figma uses anti aliasing
  font-smooth: always;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
`;
