import { rootElementFontSize } from "@libs/styles/fonts/constants";

export const convertPixelValueToRem = (pixelValue: number) => {
  const remValue = pixelValue / rootElementFontSize;

  return `${remValue}rem`;
};
