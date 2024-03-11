import { styled } from "styled-components";
import { colours } from "@libs/styles/colours";
import { convertPixelValueToRem } from "@libs/helpers/convertPixelValueToRem";
import DismissIcon from "@libs/components/Icons/DismissIcon";

export const DismissButtonSC = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${convertPixelValueToRem(36)};
  height: ${convertPixelValueToRem(36)};
  background: none;
  border: none;
  border-radius: 50%;
  color: ${colours.black};
  cursor: pointer;
  transition: "background-color 200ms, color 200ms";

  &:active {
    background-color: ${colours.mexicanPink};
    color: ${colours.milk};
  }

  &:focus {
    background-color: transparent;
    border: ${convertPixelValueToRem(2)} solid ${colours.shockingPink};
    color: ${colours.black};
  }

  &:hover {
    background-color: ${colours.shockingPink};
    color: ${colours.milk};
  }

  &:disabled {
    background-color: transparent;
    border: none;
    color: ${colours.darkLiver};
    cursor: not-allowed;
  }
`;

export const DismissButtonIconSC = styled(DismissIcon)`
  color: inherit;
  width: ${convertPixelValueToRem(12)};
  height: ${convertPixelValueToRem(12)};
`;
