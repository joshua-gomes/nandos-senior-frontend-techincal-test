import { css } from "styled-components";
import { baseFontMixin } from "./baseFont";
import { convertPixelValueToRem } from "@libs/helpers/convertPixelValueToRem";

export const heading1 = css`
  ${baseFontMixin};
  font-size: ${convertPixelValueToRem(30)};
  font-weight: 400;
  line-height: ${convertPixelValueToRem(40.5)};
`;
