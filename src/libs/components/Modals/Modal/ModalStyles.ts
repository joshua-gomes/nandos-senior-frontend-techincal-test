import styled from "styled-components";
import { colours } from "@libs/styles/colours";
import { spacing } from "@libs/styles/spacing";
import { breakpoints } from "@libs/styles/breakpoints";
import { convertPixelValueToRem } from "@libs/helpers/convertPixelValueToRem";
import { heading1 } from "@libs/styles/fonts/headingFonts";
import { body1, body2 } from "@libs/styles/fonts/bodyFonts";

export const ModalWrapperSC = styled.div`
  width: ${convertPixelValueToRem(560)};
  max-width: 100%;
  padding: ${spacing.small} ${spacing.small} ${spacing.large} ${spacing.small};
  border-radius: 8px;
  background-color: ${colours.milk};

  @media screen and (min-width: ${breakpoints.desktop}px) {
    padding: ${spacing.medium} ${spacing.large} ${spacing.large} ${spacing.large};
  }
`;

export const ModalHeadingWrapperSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${spacing.large};
`;

export const ModalTitleSC = styled.h2`
  ${heading1};
`;

export const ModalTextSC = styled.p`
  ${body1};

  @media screen and (min-width: ${breakpoints.desktop}px) {
    ${body2};
  }
`;
