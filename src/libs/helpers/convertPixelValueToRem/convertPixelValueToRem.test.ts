import { convertPixelValueToRem } from "./convertPixelValueToRem";

jest.mock("@libs/styles/fonts/constants", () => ({
  rootElementFontSize: 12,
}));

describe("convertPixelValueToRem", () => {
  test.each([
    {
      pixelValue: 12,
      expectedRemValue: 1,
    },
    {
      pixelValue: 18,
      expectedRemValue: 1.5,
    },
    {
      pixelValue: 24,
      expectedRemValue: 2,
    },
  ])(
    "returns the expected rem value for the passed in pixel value",
    ({ pixelValue, expectedRemValue }) => {
      const remValue = convertPixelValueToRem(pixelValue);

      expect(remValue).toBe(`${expectedRemValue}rem`);
    }
  );
});
