import { css } from "styled-components";
import { convertPixelValueToRem } from "@libs/helpers/convertPixelValueToRem";
import { baseFontMixin } from "./baseFont";

export const body1 = css`
  ${baseFontMixin};
  font-size: ${convertPixelValueToRem(22)};
  font-weight: 400;
  line-height: ${convertPixelValueToRem(34.1)};
`;

export const body2 = css`
  ${baseFontMixin};
  font-size: ${convertPixelValueToRem(18)};
  font-weight: 400;
  line-height: ${convertPixelValueToRem(25.2)};
`;
